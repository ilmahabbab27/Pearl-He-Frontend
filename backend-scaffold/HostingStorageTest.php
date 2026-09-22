<?php
namespace Tests\Feature;
use App\Models\Content;
use App\Models\SiteSetting;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;
class HostingStorageTest extends TestCase {
    use RefreshDatabase;
    public function test_public_images_use_the_configured_hosting_url(): void {
        config(['filesystems.disks.public.url' => '/backend/uploads']);
        Storage::forgetDisk('public');
        Content::create(['kind' => 'projects', 'slug' => 'hosting-test', 'title' => 'Hosting test', 'category' => 'Residential', 'summary' => 'Summary', 'alt' => 'House', 'image' => 'content/cover.jpg', 'gallery' => ['content/gallery.jpg', null], 'partner_name' => 'Partner', 'partner_logo' => 'content/logo.png', 'published' => true]);
        $this->getJson('/api/content/projects')->assertOk()->assertJsonPath('0.image', '/backend/uploads/content/cover.jpg')->assertJsonPath('0.gallery.0', '/backend/uploads/content/gallery.jpg')->assertJsonPath('0.gallery.1', null)->assertJsonPath('0.images.1', '/backend/uploads/content/gallery.jpg')->assertJsonPath('0.partner_logo', '/backend/uploads/content/logo.png');
        $this->getJson('/api/settings')->assertOk()->assertJsonPath('hero_image', '/backend/uploads/'.SiteSetting::findOrFail(1)->hero_image);
    }
}
