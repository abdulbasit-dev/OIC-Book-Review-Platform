<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\GenreCollection;
use App\Models\Genre;
use Illuminate\Http\Request;

class GenreController extends Controller
{
    public function __invoke()
    {
        $genres = Genre::pluck('name');

        // in case if u don't have any genres
        if ($genres->isEmpty()) {
            $genres = collect([
                'Fiction',
                'Science',
                'History',
                'Biography & Autobiography',
                'Business & Economics',
                'Cooking',
                'Self-Help',
                'Technology & Engineering',
                'Art',
                'Religion',
                'Health & Fitness',
                'Travel',
                'Science Fiction',
                'Fantasy',
                'Mystery & Detective',
                'Romance',
                'Comics & Graphic Novels'
            ]);
        }

        return new GenreCollection($genres);
    }
}
