# Hello World Generator - Frontend

This is the frontend for the Hello World Generator application, built with React, TypeScript, Vite, and Tailwind CSS.

## Project Structure

The project follows a domain-driven, feature-based architecture to ensure scalability and maintainability. Key directories include:

- `src/app`: Core application setup (entry point, routing, providers).
- `src/pages`: Page components that correspond to routes.
- `src/domain`: Business logic, components, hooks, and services related to specific business domains (e.g., `codeGenerator`).
- `src/core`: Shared, reusable, and non-domain-specific code (UI components, hooks, utils).
- `src/assets`: Global assets like CSS and fonts.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm

### Installation

1.  Clone the repository.
2.  Navigate to the `frontend` directory.
3.  Install dependencies:

    ```bash
    npm install
    ```

4.  Create a `.env` file by copying `.env.example` and configure the `VITE_API_BASE_URL` to point to your running backend instance.

    ```bash
    cp .env.example .env
    ```

### Running the Development Server

To start the Vite development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` by default.

### Building for Production

To create a production-ready build:

```bash
npm run build
```

The optimized static files will be generated in the `dist` directory.

### Linting

To run the linter and check for code quality issues:

```bash
npm run lint
```
