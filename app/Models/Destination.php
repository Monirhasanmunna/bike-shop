<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Destination extends Model
{
    use Uuid;

    protected $fillable = [
        'name',
        'slug',
        'status',
        'image'
    ];


    /**
     * @return HasMany
     */
    public function tours(): HasMany
    {
        return $this->hasMany(Tour::class, 'destination_id', 'id');
    }
}
