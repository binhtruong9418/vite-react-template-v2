import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center py-12">
            <h1 className="text-4xl font-bold text-center mb-6">Welcome to YourApp</h1>
            <p className="text-xl text-center text-gray-600 max-w-2xl mb-8">
                A modern React application with a clean architecture and best practices.
            </p>
            <div className="flex gap-4">
                <Link to="/products">
                    <button>Browse Products</button>
                </Link>
                <Link to="/login">
                    <button>
                        Sign In
                    </button>
                </Link>
            </div>
        </div>
    )
}
