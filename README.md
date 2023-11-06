### Book Review Platform

This repository contains the code for the backend and frontend.

#### Backend Setup

##### Prerequisites
- XAMPP or WAMP installed
- Composer installed


##### Installation Steps

1. Navigate to the `backend` directory.
2. Run `composer install` to install the dependencies.
3. Run `php artisan migrate --seed` to set up and seed the database.
4. Start the server by running `php artisan serve`.
5. The backend api will be accessible at `http://127.0.0.1:8000/api/v1`.

#### Frontend Setup

##### Prerequisites
- Node.js installed (including npm or yarn)

##### Installation Steps

1. Navigate to the `frontend` directory.
2. Run `npm install` or `yarn install` to install the required dependencies.
3. Start the frontend server by running `npm run dev` or `yarn start`.
4. The frontend will be accessible at `http://localhost:3000`.

#### Additional Information

- **Database Details**: The backend uses a seeded database. Check the backend documentation for available endpoints and database details.

- **Postman Collection**: For API testing, a Postman collection is available in the `postman_collection` directory.

- **External Database Api**: I used Google Book Api as external database api.

Please ensure you have the necessary prerequisites installed and follow the provided steps to set up and run both the backend and frontend locally. Adjust the instructions or provide additional information as needed for the specific configurations or requirements of your project.
