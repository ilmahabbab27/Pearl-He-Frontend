<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Content extends Model
{
    protected $guarded = ['id'];
    protected function casts(): array
    {
        return ['gallery' => 'array', 'body' => 'array', 'published' => 'boolean'];
    }
}
