<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('contents', function (Blueprint $table) {
            $table->id();
            $table->string('kind');
            $table->string('slug');
            $table->string('title');
            $table->string('category');
            $table->text('summary');
            $table->text('description')->nullable();
            $table->json('body')->nullable();
            $table->string('detail')->nullable();
            $table->string('read_time')->nullable();
            $table->string('image')->nullable();
            $table->string('alt');
            $table->boolean('published')->default(false);
            $table->timestamps();
            $table->unique(['kind', 'slug']);
        });
    }
    public function down(): void { Schema::dropIfExists('contents'); }
};
