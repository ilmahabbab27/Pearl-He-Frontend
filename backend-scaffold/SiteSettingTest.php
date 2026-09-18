<?php
namespace Tests\Feature;
use App\Models\User;
use App\Models\SiteSetting;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;
class SiteSettingTest extends TestCase {
    use RefreshDatabase;
    public function test_public_can_read_but_cannot_change_hero(): void {
        $this->getJson('/api/settings')->assertOk()->assertJsonPath('hero_image', '/storage/seed/hero-architecture.jpg');
        $this->postJson('/api/admin/settings', ['hero_alt' => 'Changed'])->assertUnauthorized();
    }
    public function test_admin_can_replace_hero_preserve_it_and_update_description(): void {
        Storage::fake('public');
        $this->actingAs(User::factory()->create());
        $this->postJson('/api/admin/settings', ['hero_alt' => 'New residence', 'hero_image' => UploadedFile::fake()->image('hero.jpg')])->assertOk()->assertJsonPath('hero_alt', 'New residence');
        $old = SiteSetting::findOrFail(1)->hero_image;
        Storage::disk('public')->assertExists($old);
        $this->postJson('/api/admin/settings', ['hero_alt' => 'Updated description'])->assertOk()->assertJsonPath('hero_image', '/storage/'.$old);
        $this->postJson('/api/admin/settings', ['hero_alt' => 'Another residence', 'hero_image' => UploadedFile::fake()->image('next.png')])->assertOk();
        Storage::disk('public')->assertMissing($old);
        $new = SiteSetting::findOrFail(1)->hero_image;
        $this->getJson('/api/settings')->assertJsonPath('hero_image', '/storage/'.$new)->assertJsonPath('hero_alt', 'Another residence');
        $this->assertCount(1, Storage::disk('public')->allFiles());
    }
    public function test_invalid_hero_is_rejected_without_changing_settings(): void {
        Storage::fake('public');
        $this->actingAs(User::factory()->create());
        $this->postJson('/api/admin/settings', ['hero_alt' => '', 'hero_image' => UploadedFile::fake()->create('bad.php', 10)])->assertUnprocessable()->assertJsonValidationErrors(['hero_alt', 'hero_image']);
        $this->postJson('/api/admin/settings', ['hero_alt' => 'Large image', 'hero_image' => UploadedFile::fake()->image('large.png')->size(4097)])->assertUnprocessable()->assertJsonValidationErrors('hero_image');
        $this->assertDatabaseHas('site_settings', ['id' => 1, 'hero_image' => 'seed/hero-architecture.jpg']);
        $this->assertCount(0, Storage::disk('public')->allFiles());
    }
}
