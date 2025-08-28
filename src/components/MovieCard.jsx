import { memo, Suspense, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import Loader from './ui/Loader';
import Modal from './ui/Modal';

function MovieCard({ movie }) {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const openTrailer = useCallback(() => setIsOpenModal(true), []);
    const closeTrailer = useCallback(() => setIsOpenModal(false), []);

    return (
        <div className="flex flex-col bg-white dark:bg-[#141414] dark:text-white border border-gray-800 rounded-xl shadow-md m-4 p-4 w-full max-w-sm hover:scale-102 hover:shadow-xl transition-transform duration-500">
            {isOpenModal && (
                <Suspense fallback={<Loader />}>
                    <Modal onClose={closeTrailer}>
                        <iframe
                            className="w-full aspect-video rounded-lg"
                            src={`https://www.youtube.com/embed/${movie.trailer}?controls=0`}
                            title={`Trailer of ${movie.title}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </Modal>
                </Suspense>
            )}

            <h1 className="text-black dark:text-white text-lg sm:text-xl font-semibold text-center truncate mb-3">
                {movie.title}
            </h1>

            <img
                src={movie.image}
                alt={movie.title}
                loading="lazy"
                className="w-full h-auto aspect-[2/3] object-cover rounded-lg"
            />

            <p className="text-black dark:text-white text-sm mt-3 line-clamp-3">
                {movie.description}
            </p>

            <p className="text-[#c09a00] text-sm font-medium text-center mt-2">
                IMDB Rating: {movie.rating}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 items-center justify-between mt-4">
                <button
                    onClick={openTrailer}
                    className="text-xs sm:text-sm bg-red-800 hover:bg-red-600 text-white py-2 px-4 rounded-md transition duration-300 w-full sm:w-[48%] text-center cursor-pointer"
                    aria-label={`Watch trailer for ${movie.title}`}
                >
                    Watch Trailer 🎬
                </button>

                <Link to={`/movie/${movie.trailer}`} className="w-full sm:w-[48%]">
                    <button
                        className="text-xs sm:text-sm bg-gray-800 hover:bg-gray-600 text-white py-2 px-4 rounded-md transition duration-300 w-full flex items-center justify-center cursor-pointer"
                        aria-label={`Details for ${movie.title}`}
                    >
                        Details 🔗
                    </button>
                </Link>
            </div>
        </div>


    )
}

export default memo(MovieCard);