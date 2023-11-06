<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

class ApiKey
{
    public function handle(Request $request, Closure $next)
    {
        // take X-Authorization header from request and check if it is valid
        if ($request->header('X-Authorization') != config('app.api_key')) {
            Log::info("Unauthorized access attempt with API key: " . $request->header('X-Authorization'));
            return response()->json([
                'result' => false,
                'status' => Response::HTTP_UNAUTHORIZED,
                'message' => "Unauthorized access",
            ], Response::HTTP_UNAUTHORIZED);
        }

        Log::info("Authorized access attempt with API key: " . $request->header('X-Authorization'));

        return $next($request);
    }
}
