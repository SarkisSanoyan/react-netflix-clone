function SearchBar({ value, onChange, onToggleTheme, theme }) {
    
  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-xl mt-4 sm:mt-0">
      <input
        type="search"
        value={value}
        onChange={onChange}
        placeholder="Search for a movie..."
        className="flex-1 border border-black/25 dark:border-white/25 px-3 py-2 text-slate-800 dark:text-white rounded outline-none w-full"
        aria-label="Search movies"
      />

      <button
        onClick={onToggleTheme}
        className="border border-black/25 dark:border-white/25 px-3 py-2 text-slate-700 dark:text-white rounded cursor-pointer outline-none hover:bg-slate-300 dark:hover:bg-slate-800 w-full sm:w-auto"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? "Light Mode 🌞" : "Dark Mode 🌙"}
      </button>
    </div>
  );
}

export default SearchBar;
