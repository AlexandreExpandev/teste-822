# Hello World Generator API

A Node.js API for generating "Hello World" code in various programming languages.

## Features

- Generate Hello World code in multiple programming languages
- List available programming languages
- Download generated code as a file with the appropriate extension
- RESTful API design with proper error handling

## Supported Languages

- JavaScript
- TypeScript
- Python
- Java
- C#
- C++
- PHP
- Ruby
- Go
- Rust

## API Endpoints

### Get Available Languages

```
GET /api/external/languages
```

Returns a list of all supported programming languages.

### Generate Code

```
GET /api/external/code/:language
```

Generates and returns Hello World code for the specified language.

### Download Code

```
GET /api/external/code/:language/download
```

Downloads Hello World code as a file with the appropriate extension.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies

```bash
npm install
```

3. Create a `.env` file based on `.env.example`

4. Start the development server

```bash
npm run dev
```

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── api/                  # API controllers
├── config/               # Application configuration
├── middleware/           # Express middleware
├── routes/               # Route definitions
├── services/             # Business logic
├── types/                # TypeScript type definitions
├── utils/                # Utility functions
└── server.ts            # Application entry point
```

## License

MIT
