<?php

namespace Database\Seeders;

use App\Models\Review;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("reviews")->delete();

        $faker = \Faker\Factory::create();

        foreach (range(1, 10) as $key) {
            Review::create([
                "name" => $faker->name,
                "review" => $faker->text,
                "book_id" => "In8mDwAAQBAJ",
                "rating" => $faker->numberBetween(1, 5)
            ]);
        }
    }
}
