# Express API with Jest and Supertest

This project is a simple Express.js API server with Jest and Supertest for testing.

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installing dependencies

Install dependencies:

```bash
npm install
```

### Running the Tests

Run the Jest test suite:

```bash
npm test
```

### Starting the Server

Start the Express server:

```bash
npm start
```

The server will be running on [http://localhost:3000](http://localhost:3000).

## API Endpoints

- **GET /api/data**
  - Requires a valid Authorization in the `authorization` header.
  - Example valid Authorization: 'dXNlcjpwYXNzd29yZA=='
