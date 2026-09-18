<?php
namespace Tests\Feature;
use App\Models\ContactMessage;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
class ContactMessageTest extends TestCase {
    use RefreshDatabase;
    private function inquiry(): array {
        return ['name' => 'Client Name', 'email' => 'client@example.test', 'phone' => '+94 123456789', 'message' => "Please discuss my project.\nThank you."];
    }
    public function test_public_submission_is_saved_and_visible_to_admin(): void {
        $this->postJson('/api/contact', array_merge($this->inquiry(), ['is_read' => true]))->assertCreated()->assertJsonStructure(['message'])->assertJsonMissingPath('email');
        $this->assertDatabaseHas('contact_messages', ['email' => 'client@example.test', 'is_read' => false]);
        $this->actingAs(User::factory()->create());
        $this->getJson('/api/admin/messages')->assertOk()->assertJsonPath('unread', 1)->assertJsonPath('messages.data.0.message', $this->inquiry()['message']);
    }
    public function test_guests_cannot_read_or_change_inquiries(): void {
        $message = ContactMessage::create($this->inquiry());
        $this->getJson('/api/admin/messages')->assertUnauthorized();
        $this->postJson('/api/admin/messages/'.$message->id, ['is_read' => true])->assertUnauthorized();
        $this->deleteJson('/api/admin/messages/'.$message->id)->assertUnauthorized();
    }
    public function test_invalid_submissions_are_rejected_and_rate_limited(): void {
        $this->postJson('/api/contact', ['name' => '', 'email' => 'invalid', 'message' => str_repeat('a', 10001)])->assertUnprocessable()->assertJsonValidationErrors(['name', 'email', 'message']);
        $this->assertDatabaseCount('contact_messages', 0);
        for ($i = 0; $i < 4; $i++) $this->postJson('/api/contact', $this->inquiry())->assertCreated();
        $this->postJson('/api/contact', $this->inquiry())->assertStatus(429);
    }
    public function test_admin_can_mark_read_unread_and_delete(): void {
        $message = ContactMessage::create($this->inquiry());
        $this->actingAs(User::factory()->create());
        $this->postJson('/api/admin/messages/'.$message->id, ['is_read' => true])->assertOk()->assertJsonPath('is_read', true);
        $this->getJson('/api/admin/messages')->assertJsonPath('unread', 0);
        $this->postJson('/api/admin/messages/'.$message->id, ['is_read' => false])->assertOk()->assertJsonPath('is_read', false);
        $this->postJson('/api/admin/messages/'.$message->id, ['is_read' => 'invalid'])->assertUnprocessable();
        $this->deleteJson('/api/admin/messages/'.$message->id)->assertNoContent();
        $this->assertDatabaseCount('contact_messages', 0);
    }
    public function test_inbox_is_paginated_newest_first(): void {
        for ($i = 1; $i <= 21; $i++) ContactMessage::create(array_merge($this->inquiry(), ['name' => 'Client '.$i]));
        $this->actingAs(User::factory()->create());
        $this->getJson('/api/admin/messages')->assertJsonCount(20, 'messages.data')->assertJsonPath('messages.data.0.name', 'Client 21')->assertJsonPath('messages.last_page', 2);
        $this->getJson('/api/admin/messages?page=2')->assertJsonCount(1, 'messages.data')->assertJsonPath('messages.data.0.name', 'Client 1');
    }
}
