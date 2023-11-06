<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class GoogleBookApiService
{
    protected static $baseUrl = 'https://www.googleapis.com/books/v1/volumes';
    protected static $apiKey = "AIzaSyAO5b6vuLiOcKhiyGPEqZWTc5zSIpg0NbY";

    public static function searchBooks($query)
    {
        $response = Http::get(self::$baseUrl, [
            'q' => $query,
            'key' => self::$apiKey
        ]);

        return $response->json();
    }

    public static function getBookDetails($bookId)
    {
        $response = Http::get(self::$baseUrl . "/$bookId", [
            'key' => self::$apiKey
        ]);

        return $response->json();
    }

    public static function subjects(){
        $response = Http::get(self::$baseUrl . "/subjects", [
            'key' => self::$apiKey
        ]);

        return $response->json();
    }
}
