<?php

namespace Database\Seeders;

use App\Models\Content;
use Illuminate\Database\Seeder;

class ContentSeeder extends Seeder
{
    public function run(): void
    {
        foreach (json_decode(file_get_contents(database_path('seeders/content.json')), true, 512, JSON_THROW_ON_ERROR) as $item) {
            Content::firstOrCreate(['kind' => $item['kind'], 'slug' => $item['slug']], $item);
        }
    }
}
