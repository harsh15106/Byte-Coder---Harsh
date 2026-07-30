import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
            <h1 className="text-8xl font-bold">404</h1>

            <p className="mt-4 text-gray-400">
                The page you're looking for doesn't exist.
            </p>

            <Link
                to="/"
                className="mt-8 rounded-lg bg-violet-600 px-6 py-3"
            >
                Back Home
            </Link>
        </div>
    );
}