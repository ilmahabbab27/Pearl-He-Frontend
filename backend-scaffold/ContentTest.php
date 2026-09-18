<?php
namespace Tests\Feature;

use App\Models\Content;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class ContentTest extends TestCase
{
    use RefreshDatabase;
    private function payload(array $overrides = []): array
    {
        return array_merge(['title' => 'New article', 'slug' => 'new-article', 'category' => 'Design', 'summary' => 'Summary', 'body' => "First paragraph.\n\nSecond paragraph.", 'alt' => 'House', 'published' => false, 'image' => UploadedFile::fake()->image('house.jpg')], $overrides);
    }
    public function test_guests_cannot_manage_content(): void
    {
        $this->getJson('/api/admin/blogs')->assertUnauthorized();
        $this->postJson('/api/admin/blogs', $this->payload())->assertUnauthorized();
        $this->postJson('/api/admin/blogs/1', [])->assertUnauthorized();
        $this->deleteJson('/api/admin/blogs/1')->assertUnauthorized();
    }
    public function test_blog_publish_update_unpublish_and_delete(): void
    {
        Storage::fake('public');
        $this->actingAs(User::factory()->create());
        $created = $this->postJson('/api/admin/blogs', $this->payload())->assertOk()->assertJsonPath('body.1', 'Second paragraph.');
        $id = $created->json('id');
        $this->getJson('/api/content/blogs')->assertExactJson([]);
        $this->postJson('/api/admin/blogs/'.$id, $this->payload(['published' => true, 'image' => null]))->assertOk();
        $this->getJson('/api/content/blogs')->assertJsonCount(1)->assertJsonPath('0.slug', 'new-article');
        $this->postJson('/api/admin/blogs/'.$id, $this->payload(['published' => false, 'image' => null]))->assertOk();
        $this->getJson('/api/content/blogs')->assertExactJson([]);
        $this->deleteJson('/api/admin/blogs/'.$id)->assertNoContent();
        $this->assertDatabaseMissing('contents', ['id' => $id]);
        $this->assertCount(0, Storage::disk('public')->allFiles());
    }
    public function test_validation_duplicate_slugs_and_wrong_kind_are_rejected(): void
    {
        Storage::fake('public');
        $this->actingAs(User::factory()->create());
        $id = $this->postJson('/api/admin/blogs', $this->payload())->json('id');
        $this->postJson('/api/admin/blogs', $this->payload())->assertUnprocessable()->assertJsonValidationErrors('slug');
        $this->postJson('/api/admin/blogs', $this->payload(['slug' => '../bad', 'image' => UploadedFile::fake()->create('bad.php', 10)]))->assertUnprocessable()->assertJsonValidationErrors(['slug', 'image']);
        $this->deleteJson('/api/admin/projects/'.$id)->assertNotFound();
    }
    public function test_project_image_replacement_and_public_fields(): void
    {
        Storage::fake('public');
        $this->actingAs(User::factory()->create());
        $data = $this->payload(['category' => 'Residential', 'description' => 'Project description', 'published' => true]);
        $id = $this->postJson('/api/admin/projects', $data)->assertOk()->json('id');
        $old = Content::findOrFail($id)->image;
        $data['image'] = UploadedFile::fake()->image('replacement.png');
        $this->postJson('/api/admin/projects/'.$id, $data)->assertOk();
        Storage::disk('public')->assertMissing($old);
        $this->getJson('/api/content/projects')->assertJsonPath('0.name', 'New article')->assertJsonPath('0.sector', 'Residential');
    }
    public function test_login_logout_and_invalid_password(): void
    {
        User::factory()->create(['email' => 'admin@example.test', 'password' => bcrypt('test-password-only')]);
        $this->postJson('/api/login', ['email' => 'admin@example.test', 'password' => 'wrong'])->assertUnprocessable();
        $this->postJson('/api/login', ['email' => 'admin@example.test', 'password' => 'test-password-only'])->assertOk();
        $this->getJson('/api/user')->assertOk();
        $this->postJson('/api/logout')->assertNoContent();
        $this->assertGuest();
    }

    public function test_five_project_images_are_preserved_replaced_removed_and_deleted(): void
    {
        Storage::fake('public');
        $this->actingAs(User::factory()->create());
        $data = $this->payload(['category' => 'Residential', 'description' => 'Project description', 'published' => true]);
        for ($slot = 2; $slot <= 5; $slot++) $data["image_$slot"] = UploadedFile::fake()->image("view-$slot.jpg");
        $created = $this->postJson('/api/admin/projects', $data)->assertOk()->assertJsonCount(5, 'images');
        $id = $created->json('id');
        $original = Content::findOrFail($id)->gallery;
        $this->getJson('/api/content/projects')->assertJsonCount(5, '0.images');
        $edit = $this->payload(['category' => 'Residential', 'description' => 'Updated description', 'published' => true, 'image' => null]);
        $this->postJson('/api/admin/projects/'.$id, $edit)->assertOk()->assertJsonCount(5, 'images');
        $this->assertSame($original, Content::findOrFail($id)->gallery);
        $edit['image_2'] = UploadedFile::fake()->image('replacement.jpg');
        $edit['remove_image_3'] = true;
        $this->postJson('/api/admin/projects/'.$id, $edit)->assertOk()->assertJsonCount(4, 'images')->assertJsonPath('gallery.1', null);
        Storage::disk('public')->assertMissing($original[0]);
        Storage::disk('public')->assertMissing($original[1]);
        Storage::disk('public')->assertExists($original[2]);
        $this->assertCount(4, Storage::disk('public')->allFiles());
        $this->deleteJson('/api/admin/projects/'.$id)->assertNoContent();
        $this->assertCount(0, Storage::disk('public')->allFiles());
    }
    public function test_invalid_gallery_uploads_are_rejected_before_any_files_are_saved(): void
    {
        Storage::fake('public');
        $this->actingAs(User::factory()->create());
        $data = $this->payload(['category' => 'Residential', 'description' => 'Project', 'image_2' => UploadedFile::fake()->create('script.php', 10), 'image_3' => UploadedFile::fake()->image('large.jpg')->size(2049)]);
        $this->postJson('/api/admin/projects', $data)->assertUnprocessable()->assertJsonValidationErrors(['image_2', 'image_3']);
        $this->assertCount(0, Storage::disk('public')->allFiles());
        $this->postJson('/api/admin/blogs', $this->payload(['image_2' => UploadedFile::fake()->image('extra.jpg')]))->assertUnprocessable()->assertJsonValidationErrors('image_2');
    }

    public function test_project_partner_logo_is_preserved_replaced_removed_and_deleted(): void
    {
        Storage::fake('public');
        $this->actingAs(User::factory()->create());
        $data = $this->payload(['category' => 'Residential', 'description' => 'Project', 'published' => true, 'partner_name' => 'Partner Ltd', 'partner_logo' => UploadedFile::fake()->image('logo.png')]);
        $id = $this->postJson('/api/admin/projects', $data)->assertOk()->assertJsonPath('partner_name', 'Partner Ltd')->json('id');
        $old = Content::findOrFail($id)->partner_logo;
        $this->getJson('/api/content/projects')->assertJsonPath('0.partner_logo', '/storage/'.$old)->assertJsonCount(1, '0.images');
        unset($data['partner_logo']);
        $data['image'] = null;
        $this->postJson('/api/admin/projects/'.$id, $data)->assertOk()->assertJsonPath('partner_logo', '/storage/'.$old);
        $data['partner_logo'] = UploadedFile::fake()->image('new-logo.png');
        $this->postJson('/api/admin/projects/'.$id, $data)->assertOk();
        Storage::disk('public')->assertMissing($old);
        $replacement = Content::findOrFail($id)->partner_logo;
        unset($data['partner_logo']);
        $data['remove_partner_logo'] = true;
        $data['partner_name'] = null;
        $this->postJson('/api/admin/projects/'.$id, $data)->assertOk()->assertJsonPath('partner_logo', null)->assertJsonPath('partner_name', null);
        Storage::disk('public')->assertMissing($replacement);
        $data['partner_name'] = 'Partner Ltd';
        $data['partner_logo'] = UploadedFile::fake()->image('final-logo.png');
        $this->postJson('/api/admin/projects/'.$id, $data)->assertOk();
        $this->deleteJson('/api/admin/projects/'.$id)->assertNoContent();
        $this->assertCount(0, Storage::disk('public')->allFiles());
    }
    public function test_partner_logo_requires_a_name_and_valid_image_and_is_project_only(): void
    {
        Storage::fake('public');
        $this->actingAs(User::factory()->create());
        $data = $this->payload(['category' => 'Residential', 'description' => 'Project', 'partner_logo' => UploadedFile::fake()->image('logo.png')]);
        $this->postJson('/api/admin/projects', $data)->assertUnprocessable()->assertJsonValidationErrors('partner_name');
        $data['partner_name'] = 'Partner';
        $data['partner_logo'] = UploadedFile::fake()->create('logo.php', 10);
        $this->postJson('/api/admin/projects', $data)->assertUnprocessable()->assertJsonValidationErrors('partner_logo');
        $this->postJson('/api/admin/blogs', $data)->assertUnprocessable()->assertJsonValidationErrors(['partner_name', 'partner_logo']);
        $this->assertCount(0, Storage::disk('public')->allFiles());
    }
}
