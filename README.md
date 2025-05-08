# Activity Booking App

A simple REST API backend for a Basic Activity Booking App.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd activity-booking
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   MONGODB_URI=mongodb://localhost:27017/activity-booking
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start the server:
   ```
   npm run dev
   ```

## API Endpoints

- **Auth**
  - `POST /api/auth/register` — Register user
  - `POST /api/auth/login` — Login user (returns JWT)

- **Activities**
  - `GET /api/activities` — List all activities (public)

- **Bookings**
  - `POST /api/bookings` — Book an activity (auth required)
  - `GET /api/bookings/my` — Get my bookings (auth required)

## Tech Stack

- Node.js + Express.js
- MongoDB (with Mongoose)
- JWT for authentication
- bcrypt for password hashing
- express-validator for validation 