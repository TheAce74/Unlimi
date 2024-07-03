# Unlimi

Unlimi is a mini project developed as a job application task. It fetches data from an API and displays it in a table, with filtering and searching capabilities. The project is built with React, TypeScript, and Vite, and utilizes various libraries and tools for state management, UI components, and styling.

## Table of Contents

- [Unlimi](#unlimi)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Setup Instructions](#setup-instructions)
  - [Codebase Structure](#codebase-structure)
  - [Hosting](#hosting)
  - [Contact](#contact)

## Project Overview

Unlimi fetches data from an API and displays it in a user-friendly table. Users can filter and search through the data to find relevant information quickly. The API URL is stored in a `.env` file under the name `VITE_API_URL`.

## Features

- Fetch data from an API
- Display data in a table
- Filtering and searching capabilities
- Responsive design

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **UI Components**: Mantine, React-Toastify, Hamburger-React
- **State Management**: React Context, React Query
- **Styling**: TailwindCSS
- **HTTP Client**: Axios
- **Utilities**: clsx, use-click-away-react
- **Dev Tools**: ESLint, Prettier, React Query Devtools

## Setup Instructions

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/TheAce74/Unlimi.git
   cd Unlimi
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Setup environment variables**:
   Create a `.env` file in the root directory and add the following line:

   ```bash
   VITE_API_URL=your_api_url_here
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

### Build

To create a production build, run:

```bash
npm run build
# or
yarn build
```

### Lint

To lint the project, run:

```bash
npm run lint
# or
yarn lint
```

## Codebase Structure

The project follows a typical Vite + React + TypeScript setup. Here is an overview of the `src` directory:

- **assets**: Contains static assets like images and SVGs.
- **components**: Contains reusable components.
- **context**: Contains the app context for state management.
- **hooks**: Contains reusable logic in custom hooks.
- **utils**: Contains utility functions, constants, and types.
- **services**: Contains external services like Mantine and Axios configurations.

### Example Structure

```plaintext
src/
├── assets/
├── components/
│   ├── CustomTable.tsx
│   └── Filter.tsx
├── context/
│   └── AppContext.tsx
├── hooks/
│   └── useFetchProducts.ts
├── utils/
│   ├── constants.ts
│   └── types.ts
├── services/
│   ├── mantine.ts
│   └── axios.ts
├── App.tsx
├── main.tsx
├── index.css
└── ...
```

## Hosting

The project is hosted on Vercel. You can visit the live site [here](https://unlimi.vercel.app).

## Contact

If you have any questions or need further assistance, feel free to contact me:

- **Name**: Chisom Udonsi
- **Portfolio**: [udonsichisom.dev](https://udonsichisom.dev)
