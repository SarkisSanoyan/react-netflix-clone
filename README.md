# Netflix Clone 🎬

A responsive Netflix clone built with **React**, **Tailwind CSS**, and **React Router**. Users can search for movies, toggle dark/light mode, watch trailers in a modal, and view detailed information for each movie. The project emphasizes performance, accessibility, and smooth animations.

---

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)

---

## Features

- **Search movies**: Filter movies in real-time with debounced input.  
- **Dark/Light mode**: Toggle theme using Tailwind's dark mode.  
- **Responsive grid**: Movie cards adapt to all screen sizes.  
- **Movie details page**: Show full movie info and back navigation.  
- **Trailer modal**: Watch YouTube trailers in a modal with ESC & outside click close.  
- **Accessibility**: `aria-label`s for buttons and inputs.  
- **Animations**: Smooth hover effects, modal fade-in/out.

---

## Technologies

- React 18  
- Tailwind CSS  
- React Router DOM  
- JavaScript (ES6+)  
- React Hooks: `useState`, `useEffect`, `useMemo`, `useCallback`  
- Suspense & lazy-loading  
- React Portals for modal  

---

## Project Overview

**Component Structure:**

```bash
src/components/
├── Header.jsx
├── SearchBar.jsx
├── MovieGrid.jsx
├── MovieCard.jsx
└── MovieDetails.jsx
```

**Key Logic:**

- `useDebounce` for search input to reduce unnecessary renders  
- `useMemo` for filtering movies efficiently  
- `useCallback` to memoize functions like opening modal  
- Dark/light mode handled with custom `useTheme` hook and Tailwind's `dark:` variants  
- `React.memo` used on `MovieCard` for performance optimization  
- `Modal` component supports **ESC key close** and **click outside to close**  
- Routing uses `id` for reliable URL navigation  

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/SarkisSanoyan/react-netflix-clone.git
cd react-netflix-clone
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm start
# or
yarn start
```

---

## Usage 

Use the search bar to filter movies.

Click Dark/Light Mode to toggle themes.

Click Watch Trailer to open the trailer modal.

Click Details to navigate to the movie details page.

Click outside the modal or press Escape to close the trailer.

---

## Folder Structure 

```bash
netflix-clone/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   ├── MovieGrid.jsx
│   │   ├── MovieCard.jsx
│   │   └── MovieDetails.jsx
│   │   └── ui/
│   │       ├── Loader.jsx
│   │       └── Modal.jsx
│   ├── hooks/
│   │   ├── useDebounce.js
│   │   └── useTheme.js
│   ├── movies.data.js
│   └── App.jsx
├── tailwind.config.js
├── package.json
└── README.md
```





