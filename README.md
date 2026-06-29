# AuthForge

AuthForge is a simple authentication backend built using Node.js, Express and MongoDB. It supports user authentication using JWT and includes Docker support.

## Features

* User Signup
* User Signin
* JWT Authentication
* Protected Routes
* Get User Profile
* Update User Profile
* Password Hashing using bcrypt
* MongoDB Integration
* Docker Compose
* Swagger API Documentation
* Redis Rate Limiting

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* Redis
* Docker
* React
* Vite
* Axios

## API Endpoints

### Authentication

* POST `/api/auth/signup`
* POST `/api/auth/signin`

### User

* GET `/api/user/me`
* PUT `/api/user/me`

### Health Check

* GET `/health`

## Installation

Install backend dependencies:

```bash
npm install
```

Start backend:

```bash
npm run dev
```

Start frontend:

```bash
cd client
npm install
npm run dev
```

Start Docker services:

```bash
docker compose up
```

## Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
```

## Author

Ashutosh Tanguria
