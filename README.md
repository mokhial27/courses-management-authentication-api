# Courses Management and Authentication API

### Features

- **User Registration**: Allows users to register and receive a JWT for authentication.
- **User Login**: Enables users to log in and obtain a JWT for authenticated access.
- **JWT Authentication**: Ensures API endpoints are secure with JWT validation.
- **Course Management**: Supports CRUD operations (Create, Read, Update, Delete) for managing courses.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [API Endpoints](#api-endpoints)
4. [License](#license)

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/courses-management-and-authentication-api.git
   cd courses-management-and-authentication-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=3000
   DATABASE_URL=your_database_url
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the server:**
   ```bash
   npm start
   ```

## Usage

Once the server is running, interact with the API using tools like Postman or cURL.

### Example API Requests

1. **Register a new user:**
   ```bash
   POST /api/register
   {
     "username": "newuser",
     "password": "password123"
   }
   ```

2. **Login a user:**
   ```bash
   POST /api/login
   {
     "username": "newuser",
     "password": "password123"
   }
   ```

3. **Get all courses:**
   ```bash
   GET /api/courses
   ```

4. **Create a new course:**
   ```bash
   POST /api/courses
   {
     "title": "Course Title",
     "description": "Course Description"
   }
   ```

## API Endpoints

### Authentication

- `POST /api/register`: Register a new user and receive a JWT.
- `POST /api/login`: Log in a user and receive a JWT.

### Course Management

- `GET /api/courses`: Retrieve all courses.
- `GET /api/courses/:id`: Retrieve a specific course by ID.
- `POST /api/courses`: Create a new course.
- `PATCH /api/courses/:id`: Update a course by ID (partial updates).
- `DELETE /api/courses/:id`: Delete a course by ID.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
