<?php

namespace App\Http\Controllers;

use App\Models\Content;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class ContentController extends Controller
{
    private function serialize(Content $item): array
    {
        return array_merge($item->toArray(), [
            'name' => $item->title, 'sector' => $item->category,
            'readTime' => $item->read_time, 'body' => $item->body ?? [],
            'partner_logo' => $item->partner_logo ? '/storage/'.$item->partner_logo : null,
            'image' => $item->image ? '/storage/'.$item->image : null,
            'gallery' => array_map(fn ($path) => $path ? '/storage/'.$path : null, $item->gallery ?? []),
            'images' => array_map(fn ($path) => '/storage/'.$path, array_values(array_filter(array_merge([$item->image], $item->gallery ?? [])))),
        ]);
    }
    public function index(string $kind)
    {
        return Content::where('kind', $kind)->where('published', true)->latest('id')->get()->map(fn ($item) => $this->serialize($item));
    }
    public function adminIndex(string $kind)
    {
        return Content::where('kind', $kind)->latest('id')->get()->map(fn ($item) => $this->serialize($item));
    }
    private function save(Request $request, string $kind, Content $content)
    {
        $galleryRules = [];
        for ($slot = 2; $slot <= 5; $slot++) {
            $galleryRules["image_$slot"] = $kind === 'projects' ? 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048' : 'prohibited';
            $galleryRules["remove_image_$slot"] = $kind === 'projects' ? 'nullable|boolean' : 'prohibited';
        }
        $request->validate($galleryRules);
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => ['required', 'string', 'max:255', 'regex:/^[a-z0-9]+(?:-[a-z0-9]+)*$/', Rule::unique('contents')->where('kind', $kind)->ignore($content->id)],
            'category' => $kind === 'projects' ? ['required', Rule::in(['Residential', 'Commercial', 'Hospitality', 'Interiors'])] : 'required|string|max:255',
            'summary' => 'required|string|max:5000',
            'description' => ($kind === 'projects' ? 'required' : 'nullable').'|string|max:50000',
            'body' => ($kind === 'blogs' ? 'required' : 'nullable').'|string|max:100000',
            'detail' => 'nullable|string|max:255',
            'read_time' => 'nullable|string|max:255',
            'youtube_url' => $kind === 'blogs' ? ['nullable', 'string', 'max:2048', new \App\Rules\YouTubeUrl] : 'prohibited',
            'alt' => 'required|string|max:255',
            'published' => 'required|boolean',
            'partner_name' => $kind === 'projects' ? [Rule::requiredIf($request->hasFile('partner_logo') || ($content->partner_logo && !$request->boolean('remove_partner_logo'))), 'nullable', 'string', 'max:255'] : 'prohibited',
            'partner_logo' => $kind === 'projects' ? 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048' : 'prohibited',
            'remove_partner_logo' => $kind === 'projects' ? 'nullable|boolean' : 'prohibited',
            'image' => [($content->image ? 'nullable' : 'required'), 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
        ]);
        $oldPaths = array_values(array_filter(array_merge([$content->image, $content->partner_logo], $content->gallery ?? [])));
        $gallery = $content->gallery ?? [null, null, null, null];
        $newPaths = [];
        $data['body'] = isset($data['body']) ? preg_split('/\R\s*\R/', trim($data['body'])) : [];
        unset($data['image'], $data['partner_logo'], $data['remove_partner_logo']);
        try {
            if ($request->hasFile('image')) {
                $data['image'] = $request->file('image')->store('content', 'public');
                $newPaths[] = $data['image'];
            }
            if ($kind === 'projects') {
                if ($request->boolean('remove_partner_logo')) $data['partner_logo'] = null;
                if ($request->hasFile('partner_logo')) {
                    $data['partner_logo'] = $request->file('partner_logo')->store('content', 'public');
                    $newPaths[] = $data['partner_logo'];
                }
                for ($slot = 2; $slot <= 5; $slot++) {
                    if ($request->boolean("remove_image_$slot")) $gallery[$slot - 2] = null;
                    if ($request->hasFile("image_$slot")) {
                        $gallery[$slot - 2] = $request->file("image_$slot")->store('content', 'public');
                        $newPaths[] = $gallery[$slot - 2];
                    }
                }
                $data['gallery'] = $gallery;
            }
            $content->fill(array_merge($data, ['kind' => $kind]))->save();
        } catch (\Throwable $exception) {
            Storage::disk('public')->delete($newPaths);
            throw $exception;
        }
        $currentPaths = array_filter(array_merge([$content->image, $content->partner_logo], $content->gallery ?? []));
        foreach (array_diff($oldPaths, $currentPaths) as $path) {
            if (str_starts_with($path, 'content/')) Storage::disk('public')->delete($path);
        }
        return response()->json($this->serialize($content));
    }
    public function store(Request $request, string $kind) { return $this->save($request, $kind, new Content); }
    public function update(Request $request, string $kind, Content $content)
    {
        abort_unless($content->kind === $kind, 404);
        return $this->save($request, $kind, $content);
    }
    public function destroy(string $kind, Content $content)
    {
        abort_unless($content->kind === $kind, 404);
        $images = array_filter(array_merge([$content->image, $content->partner_logo], $content->gallery ?? []));
        $content->delete();
        foreach ($images as $image) {
            if (str_starts_with($image, 'content/')) Storage::disk('public')->delete($image);
        }
        return response()->noContent();
    }
}
