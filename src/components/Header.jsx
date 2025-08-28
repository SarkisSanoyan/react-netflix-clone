import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="relative top-0 left-0 px-6 py-4 flex items-center justify-between hidden sm:flex">
            <Link to="/">
                <img
                    src="/Netflix-Logo.wine.svg"
                    alt="Logo"
                    className="w-32 md:w-40"
                />
            </Link>
        </header>
    );
}
