<?php
namespace App\Http\Controllers;
use App\Models\SiteSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
class SiteSettingController extends Controller {
    public function show() {
        $settings = SiteSetting::findOrFail(1);
        return response()->json(['hero_image' => '/storage/'.$settings->hero_image, 'hero_alt' => $settings->hero_alt]);
    }
    public function update(Request $request) {
        $data = $request->validate(['hero_alt' => 'required|string|max:255', 'hero_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:4096']);
        $settings = SiteSetting::findOrFail(1);
        $old = $settings->hero_image;
        $uploaded = null;
        unset($data['hero_image']);
        try {
            if ($request->hasFile('hero_image')) {
                $uploaded = $request->file('hero_image')->store('hero', 'public');
                $data['hero_image'] = $uploaded;
            }
            $settings->update($data);
        } catch (\Throwable $e) {
            if ($uploaded) Storage::disk('public')->delete($uploaded);
            throw $e;
        }
        if ($uploaded && str_starts_with($old, 'hero/')) Storage::disk('public')->delete($old);
        return $this->show();
    }
}
