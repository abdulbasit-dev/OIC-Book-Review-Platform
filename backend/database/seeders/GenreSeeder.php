<?php

namespace Database\Seeders;

use App\Models\Genre;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GenreSeeder extends Seeder
{
    public function run(): void
    {
        DB::table("genres")->delete();
        $genres = [
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
        ];

        foreach ($genres as $genre) {
            Genre::create([
                "name" => $genre
            ]);
        }
    }
}
