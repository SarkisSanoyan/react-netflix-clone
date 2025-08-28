import { useEffect } from 'react';
import { createPortal } from 'react-dom';

function Modal({ children, onClose }) {

    // Close the modal when the escape key is pressed
    useEffect(() => {
        const handleEscape = e => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [onClose])

    // Close the modal when the overlay is clicked
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // Create a portal for the modal
    return createPortal(
        <div className='fixed inset-0 bg-black/75 backdrop-blur-sm bg-opacity-50 flex items-center justify-center'
            onClick={handleOverlayClick}
        >
            <div className='relative w-[90%] max-w-xl bg-white dark:bg-[#141414] text-white p-6 rounded-2xl shadow-lg animate-fade-in'>
                <button
                    onClick={onClose}
                    className="absolute top-1 right-2 text-black dark:text-white text-xl hover:text-red-800 transition duration-300 cursor-pointer"
                >
                    ✗
                </button>
                <div className='flex items-center justify-center'>
                    {children}
                </div>
            </div>
        </div>,
        document.body
    );
}

export default Modal