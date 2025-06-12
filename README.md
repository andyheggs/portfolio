# Andy Heggs Portfolio

This is the source code my personal portfolio website, built with React and styled using custom CSS. The site showcases my projects, skills, and experience, providing an interactive and visually appealing overview for visitors and potential collaborators.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [License](#license)

## Features

- Responsive design for desktop and mobile devices
- Built with modern React (using Vite for fast development)
- Styled using custom CSS
- Interactive data visualizations (via Nivo and D3)
- Smooth scrolling and routing with React Router
- Modular component-based architecture

## Tech Stack

- **Framework:** [React](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [CSS](https://www.w3.org/Style/CSS//), [Emotion](https://emotion.sh/docs/styled)
- **UI Components:** [Material UI Icons](https://mui.com/material-ui/material-icons/)
- **Data Visualization:** [Nivo](https://nivo.rocks/), [D3 Hierarchy](https://github.com/d3/d3-hierarchy)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Linting:** [ESLint](https://eslint.org/)
- **Routing:** [React Router DOM](https://reactrouter.com/)

## Getting Started

### Prerequisites

- Node.js (v18 or above recommended)
- npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/andyheggs/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173` (or as specified by Vite).

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## Project Structure

```
.
├── public/           # Static assets
├── src/
│   ├── assets/       # Images, fonts, etc.
│   ├── Components/   # React component library
│   ├── pages/        # App/page-level components
│   ├── App.jsx       # Main app entry
│   ├── main.jsx      # ReactDOM render entry
│   ├── App.css       # App-level styles
│   └── index.css     # Global styles
├── index.html        # HTML template
├── package.json
├── vite.config.js
└── eslint.config.js
```

## Available Scripts

- `npm run dev` – Start the local development server
- `npm run build` – Build the application for production
- `npm run preview` – Preview the production build locally
- `npm run lint` – Run ESLint to check for code issues

## License

This project is private and not licensed for redistribution.

---

*Made with ❤️ by Andy Heggs*
