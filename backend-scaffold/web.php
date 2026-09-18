<?php

use App\Http\Controllers\ContentController;
use App\Http\Controllers\SiteSettingController;
use App\Http\Controllers\ContactMessageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\ValidationException;

Route::get('/', fn () => response()->json(['application' => 'Pearl Heritance CMS']));
Route::prefix('api')->group(function () {
    Route::get('settings', [SiteSettingController::class, 'show']);
    Route::post('contact', [ContactMessageController::class, 'store'])->middleware('throttle:5,1');
    Route::get('csrf', fn () => response()->json(['token' => csrf_token()]));
    Route::post('login', function (Request $request) {
        $credentials = $request->validate(['email' => 'required|email', 'password' => 'required|string']);
        if (!Auth::attempt($credentials)) {
            throw ValidationException::withMessages(['email' => 'The email or password is incorrect.']);
        }
        $request->session()->regenerate();
        return response()->json(['name' => $request->user()->name]);
    })->middleware('throttle:5,1');
    Route::get('content/{kind}', [ContentController::class, 'index'])->whereIn('kind', ['blogs', 'projects']);
    Route::middleware('auth')->group(function () {
        Route::post('admin/settings', [SiteSettingController::class, 'update']);
        Route::get('admin/messages', [ContactMessageController::class, 'index']);
        Route::post('admin/messages/{message}', [ContactMessageController::class, 'update']);
        Route::delete('admin/messages/{message}', [ContactMessageController::class, 'destroy']);
        Route::get('user', fn (Request $request) => response()->json(['name' => $request->user()->name, 'email' => $request->user()->email]));
        Route::post('logout', function (Request $request) {
            Auth::logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();
            return response()->noContent();
        });
        Route::get('admin/{kind}', [ContentController::class, 'adminIndex'])->whereIn('kind', ['blogs', 'projects']);
        Route::post('admin/{kind}', [ContentController::class, 'store'])->whereIn('kind', ['blogs', 'projects']);
        Route::post('admin/{kind}/{content}', [ContentController::class, 'update'])->whereIn('kind', ['blogs', 'projects']);
        Route::delete('admin/{kind}/{content}', [ContentController::class, 'destroy'])->whereIn('kind', ['blogs', 'projects']);
    });
});
