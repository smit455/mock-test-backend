# Mock Test API

The **Mock Test API** is a backend service designed for creating and managing mock tests for users. The system enables users to register, log in, generate mock tests with randomly selected questions, and submit their answers. It ensures that users are only presented with questions they haven't attempted yet and tracks their progress by recording the questions they've already answered.

This API is built with **Node.js** and **MongoDB**, and provides an intuitive interface for interacting with mock tests in educational applications. It can be easily integrated into various platforms, such as learning management systems (LMS), online quiz apps, or other educational tools.

## Key Features

- **User Management**: Provides user registration and login functionalities with password encryption.
- **Mock Test Creation**: Users can generate mock tests with a specified number of questions based on their previous attempts.
- **Question Management**: Allows users to access a list of available questions for each mock test and view answers they have submitted.
- **Tracking Progress**: The system tracks which questions users have attempted and prevents them from retaking questions in new mock tests.
- **Submit Answers**: Users can submit their answers for each mock test, and the system can store these for further evaluation.

## Use Cases

- **Students**: Students can generate mock tests to practice before an exam, track their progress, and evaluate their knowledge.
- **Educators**: Educators can use the system to offer personalized mock tests to students, based on their learning progress.
- **Learning Management Systems**: The API can be integrated with existing learning platforms to automate mock test generation and result tracking.


## Tech Stack

- **Node.js**: JavaScript runtime
- **Express**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: ODM (Object Data Modeling) for MongoDB
- **TypeScript**: Superset of JavaScript for type safety
- **bcryptjs**: Library for hashing passwords

## Setup Instructions

### Prerequisites

- **Node.js** (v16.x or higher)
- **MongoDB** (either a local installation or MongoDB Atlas)

### 1. Clone the repository

```bash
git clone https://github.com/smit455/mock-test-backend
cd mock_test
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create a .env file
```bash
MONGODB_URI=mongodb://your_mongo_db_connection_string
PORT=5000
```
### 4. Run the server
You can run the server in development mode using nodemon:
```bash
npm run dev
```

## Postman Collection

You can use the following Postman collection to test the API endpoints:

- [Mock Test API Postman Collection](https://documenter.getpostman.com/view/29743624/2sAYQcGBCd)

