import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MOVIES } from '../movies.data';

import Header from './Header';

function MovieDetails() {
    const { id } = useParams();
    const movie = useMemo(() => MOVIES.find(movie => movie.trailer === id), [id]);

    if (!movie) return <p>Movie not found!</p>;

    return (
        <div className=" relative min-h-screen bg-white dark:bg-[#141414] flex items-center justify-center">
            <header className=" absolute top-0 left-0 px-6 py-4 flex items-center justify-between z-50 hidden sm:flex">
                <Header />
            </header>

            <div className="flex flex-col items-center justify-center bg-white dark:bg-[#141414] p-6 rounded-2xl shadow-lg max-w-sm hover:scale-105 transition-transform duration-300">
                <h1 className="text-2xl font-bold mb-4 text-red-800">{movie.title}</h1>

                <img
                    className="w-[300px] h-[450px] object-cover rounded-lg shadow-md mb-4 border border-gray-800"
                    src={movie.image}
                    alt={movie.title}
                />

                <p className="text-black dark:text-white text-sm mb-3 text-center">{movie.description}</p>

                <p className="text-lg font-semibold">
                    <span className="text-[#c09a00]">IMDB Rating: {movie.rating}</span>
                </p>

                <Link
                    to="/"
                    className="mt-4 bg-red-800 hover:bg-red-600 text-white py-2 px-4 rounded transition duration-300"
                    aria-label={`Back to Home`}
                >
                    Back to Home
                </Link>
            </div>
        </div>
    )
}

export default MovieDetails