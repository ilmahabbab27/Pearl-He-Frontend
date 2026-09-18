<?php
namespace Tests\Feature;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use App\Rules\YouTubeUrl;
use Tests\TestCase;
class BlogVideoTest extends TestCase {
    use RefreshDatabase;
    public function test_video_can_be_saved_preserved_changed_and_removed(): void {
        Storage::fake('public');
        $this->actingAs(User::factory()->create());
        $data = ['title' => 'Video article', 'slug' => 'video-article', 'category' => 'Design', 'summary' => 'Summary', 'body' => 'Article text', 'alt' => 'House', 'published' => true, 'image' => UploadedFile::fake()->image('house.jpg'), 'youtube_url' => 'https://youtu.be/abcdefghijk'];
        $id = $this->postJson('/api/admin/blogs', $data)->assertOk()->assertJsonPath('youtube_url', $data['youtube_url'])->json('id');
        $this->getJson('/api/content/blogs')->assertJsonPath('0.youtube_url', $data['youtube_url']);
        unset($data['image'], $data['youtube_url']);
        $this->postJson('/api/admin/blogs/'.$id, $data)->assertOk()->assertJsonPath('youtube_url', 'https://youtu.be/abcdefghijk');
        $data['youtube_url'] = 'https://youtube.com/shorts/12345678901';
        $this->postJson('/api/admin/blogs/'.$id, $data)->assertOk()->assertJsonPath('youtube_url', $data['youtube_url']);
        $data['youtube_url'] = '';
        $this->postJson('/api/admin/blogs/'.$id, $data)->assertOk()->assertJsonPath('youtube_url', null);
        $data['youtube_url'] = 'https://example.com/video';
        $this->postJson('/api/admin/blogs/'.$id, $data)->assertUnprocessable()->assertJsonValidationErrors('youtube_url');
        $this->assertDatabaseHas('contents', ['id' => $id, 'youtube_url' => null]);
        $data['youtube_url'] = 'https://youtu.be/abcdefghijk';
        $data['category'] = 'Residential'; $data['description'] = 'Project';
        $this->postJson('/api/admin/projects', $data)->assertUnprocessable()->assertJsonValidationErrors('youtube_url');
    }
    public function test_supported_links_and_unsafe_or_invalid_links(): void {
        foreach (['https://youtube.com/watch?v=abcdefghijk&t=20', 'https://www.youtube.com/watch?v=abcdefghijk', 'https://m.youtube.com/watch?v=abcdefghijk', 'https://youtu.be/abcdefghijk?si=share', 'https://youtube.com/shorts/abcdefghijk', 'https://youtube.com/live/abcdefghijk', 'https://youtube.com/embed/abcdefghijk'] as $url) {
            $this->assertTrue(Validator::make(['url' => $url], ['url' => [new YouTubeUrl]])->passes(), $url);
        }
        foreach (['javascript:alert(1)', 'https://youtube.com.evil.test/watch?v=abcdefghijk', 'https://youtube.com@evil.test/watch?v=abcdefghijk', 'https://evil.test@youtube.com/watch?v=abcdefghijk', 'https://youtube.com/playlist?list=abcdefghijk', 'https://youtube.com/watch?v[]=abcdefghijk', 'https://youtu.be/short', 'https://youtu.be/abcdefghijk/extra', '<iframe src="https://youtube.com"></iframe>'] as $url) {
            $this->assertTrue(Validator::make(['url' => $url], ['url' => [new YouTubeUrl]])->fails(), $url);
        }
    }
}
