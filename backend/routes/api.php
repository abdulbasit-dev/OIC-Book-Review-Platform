<?php

use App\Http\Controllers\Api\V1\{
    BookController,
    BookReviewController,
    GenreController
};

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// books
Route::group(['prefix' => 'books'], function () {
    Route::get("/", [BookController::class, 'index']);
    Route::get('/search', [BookController::class, 'searchBooks']);
    Route::get('/{bookId}', [BookController::class, 'getBookDetails']);
});

// reviews
Route::group(['prefix' => 'reviews'], function () {
    Route::post("/", [BookReviewController::class, 'submitReview']);
    Route::get('/{bookId}', [BookReviewController::class, 'getBookReviews']);
});

// genres
Route::get("/genres", [GenreController::class, '__invoke']);
