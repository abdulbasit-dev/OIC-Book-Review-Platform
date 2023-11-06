<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\BookCollection;
use App\Http\Resources\BookResource;
use App\Services\GoogleBookApiService;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index()
    {
        $query = "subject:fiction";
        $results = GoogleBookApiService::searchBooks($query);
        return new BookCollection($results['items']);
    }

    public function searchBooks(Request $request)
    {
        $query = $request->query('q');
        $results = GoogleBookApiService::searchBooks($query);

        return new BookCollection($results['items']);
    }

    public function getBookDetails($bookId)
    {
        $bookDetails = GoogleBookApiService::getBookDetails($bookId);
         return new BookResource($bookDetails);
    }
}
