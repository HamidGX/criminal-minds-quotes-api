# criminal-minds-quotes-api

This application is a simple REST API that gathers quotes from the TV series 'Criminal Minds'. Its purpose is to serve as a practical example for learning to create a REST API.

This project is part of the course I designed, HamidGX, with the specific goal of teaching React / Node.

1. Frontend here: [criminal-minds-frontend](https://github.com/HamidGX/criminal-minds-frontend)

2. JSON format for uploading to the MongoDB database: [criminal-minds-json](https://gist.github.com/HamidGX/2524c9e44822ce7411240926ce128bc1)

## Requirements

1. Node: Version 20.10.0 was used in this case.
2. Package Manager: You have the option to choose between NPM, Yarn, or other alternatives.

## Installation

```bash
yarn install
yarn dev
```

## Build

```bash
yarn build
```

## Dependencies

These are some of the dependencies used in the project, along with their respective versions:

```bash
"cors": "2.8.5",
"dotenv": "16.4.5",
"express": "4.19.0",
"mongoose"": "8.2.2"
```

## devDependencies

These are some of the devDependencies used in the project, along with their respective versions:

```bash
"@types/cors": "2.8.17",
"@types/express": "4.17.21",
"ts-node-dev": "2.0.0",
"typescript": "5.4.3"
```

## Environment Variables

To configure the necessary environment variables for the application to function, follow these steps:

1. At the root of the project, create a file named .env.

2. Open the .env file and then define the necessary environment variables following this format:

```javascript
//env example
MONGO_URI = 'YOUR_MONGODB_URI'
CORS_WHITELIST = 'http://localhost:5173,http://localhost:4173'
PORT = 4000
```

## API Reference

#### Get Random Quote

```http
  Endpoint: GET /api/quotes/random
  URL Example: http://localhost:4000/api/quotes/random/
```

#### Get Specific Quote

This route returns a specific quote identified by its ID.

```http
  Endpoint: GET /api/quotes/id/{id}
  URL Example: http://localhost:4000/api/quotes/id/660277247bc0ed20d9070f8f
```

#### Get All Quotes

This route returns all available quotes.

```http
  Endpoint: GET /api/quotes/
  URL Example: http://localhost:4000/api/quotes/
```

#### Search by Keyword

This endpoint retrieves all available quotes based on the provided keyword.

```http
  Endpoint: GET /api/quotes/search
  URL Example: http://localhost:4000/api/quotes/search?keyword=example
```

## Author

Developed by [HamidGX](https://github.com/HamidGX)
