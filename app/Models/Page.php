<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    use Uuid;

    protected $fillable = [
        'title',
        'slug',
        'content',
        'status'
    ];
}
