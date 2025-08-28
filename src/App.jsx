import { useState, useMemo } from 'react';
import { MOVIES } from './movies.data';
import { useDebounce } from './hooks/useDebounce';
import { useTheme } from './hooks/useTheme';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieGrid from './components/MovieGrid';

function App() {
  const [searchMovie, setSearchMovie] = useState("");
  const { theme, toggleTheme } = useTheme();

  const debouncedSearch = useDebounce(searchMovie, 500);

  const filteredMovies = useMemo(() => {
    const search = debouncedSearch.toLowerCase();

    return MOVIES.filter(movie => movie.title.toLowerCase().includes(search));
  }, [debouncedSearch]);

  return (
    <div className="w-full min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 py-5">
      <div className="flex items-center justify-between w-full">
        <Header />

        <SearchBar
          value={searchMovie}
          onChange={e => setSearchMovie(e.target.value)}
          onToggleTheme={toggleTheme}
          theme={theme}
        />
      </div>

      <main className="min-h-screen px-4">
        {filteredMovies.length ? (
          <MovieGrid movies={filteredMovies} />
        ) : (
          <div className="flex items-center justify-center min-h-[500px]">
            <p className="text-red-800 text-2xl font-bold">No movies found 🙄</p>
          </div>
        )}
      </main>

      <footer className="mt-6 text-center text-gray-800 dark:text-gray-200">
        © 2025 Netflix Clone. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
