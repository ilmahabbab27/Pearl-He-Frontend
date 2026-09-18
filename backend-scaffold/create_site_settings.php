<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
return new class extends Migration {
    public function up(): void {
        Schema::create('site_settings', function (Blueprint $table) {
            $table->id();
            $table->string('hero_image');
            $table->string('hero_alt');
            $table->timestamps();
        });
        DB::table('site_settings')->insert(['id' => 1, 'hero_image' => 'seed/hero-architecture.jpg', 'hero_alt' => 'Contemporary Sri Lankan residence designed and delivered by Pearl Heritance', 'created_at' => now(), 'updated_at' => now()]);
    }
    public function down(): void { Schema::dropIfExists('site_settings'); }
};
