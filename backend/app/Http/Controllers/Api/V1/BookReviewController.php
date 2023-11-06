<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\ReviewRequest;
use App\Http\Resources\BookReviewCollection;
use App\Models\Review;
use App\Services\GoogleBookApiService;
use Illuminate\Http\Response;

class BookReviewController extends Controller
{
    public function submitReview(ReviewRequest $request)
    {
        $validated = $request->validated();

        try {
            // Check if the book exists in the Google Books API using the book ID
            $bookExists = $this->checkBookExists($validated['book_id']);

            if (!$bookExists) {
                return $this->jsonResponse(false, "Book does not exist in the Google Books database", Response::HTTP_NOT_FOUND);
            }

            // check if the book has already been reviewed by the user
            $review = Review::where('book_id', $validated['book_id'])->where('name', $validated['name'])->first();

            if ($review) {
                return $this->jsonResponse(false, "You have already reviewed this book", Response::HTTP_CONFLICT);
            }

            Review::create($validated);

            return $this->jsonResponse(true, "Review submitted successfully", Response::HTTP_CREATED);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function getBookReviews($bookId){
        try {
            $reviews = Review::where('book_id', $bookId)->orderByDesc("id")->get();

            return new BookReviewCollection($reviews);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    private function checkBookExists($bookId)
    {
        $response = GoogleBookApiService::getBookDetails($bookId);

        // Check if the API response indicates the book exists
        return !empty($response) && !isset($response['error']);
    }
}
