# Pinia Tasks

A modern task management application built with Vue 3, Pinia, and Vite.

## Features

- Task management with CRUD operations
- State management using Pinia
- Modern Vue 3 Composition API
- Responsive design
- Fast development with Vite

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Project Setup

1. Clone the repository:

```sh
git clone <your-repository-url>
cd pinia-tasks
```

2. Install dependencies:

```sh
npm install
```

3. Create environment file:

```sh
cp .env.example .env
```

4. Start development server:

```sh
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Structure

```
pinia-tasks/
├── src/
│   ├── assets/        # Static assets
│   ├── components/    # Vue components
│   ├── stores/        # Pinia stores
│   ├── views/         # Page components
│   ├── router/        # Vue Router configuration
│   ├── App.vue        # Root component
│   └── main.js        # Application entry point
├── public/            # Public static assets
├── .env.example       # Example environment variables
├── vite.config.js     # Vite configuration
└── package.json       # Project dependencies and scripts
```

## Environment Variables

Create a `.env` file in the root directory based on `.env.example`. Required variables:

- `VITE_APP_TITLE` - Application title
- `VITE_API_BASE_URL` - API base URL

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
