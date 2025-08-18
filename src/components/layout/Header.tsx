import {useState, useRef, useEffect} from "react"
import {FaUser, FaSignOutAlt, FaCog, FaBars, FaTimes, FaChevronDown} from "react-icons/fa"
import {Link, useLocation, useNavigate} from "react-router-dom"
import {LOCAL_STORAGE_KEY} from "@/lib/constants";
import {useAuth} from "@/lib/store";

export default function Header() {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const profileRef = useRef<HTMLDivElement>(null)
    const {clearUser} = useAuth();
    const navigate = useNavigate()
    const location = useLocation();

    // Close profile dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
                setIsProfileOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const handleLogout = () => {
        // Add your logout logic here
        console.log("Logging out...")

        localStorage.removeItem(LOCAL_STORAGE_KEY.JWT_KEY)
        clearUser();

        // Redirect to login or home page
        navigate("/login", {
            state: location
        })
    }

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-xl font-bold text-blue-600">
                            YourBrand
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link to="/"
                              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                            Home
                        </Link>
                        <Link to="/products"
                              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                            Products
                        </Link>
                        <Link to="/services"
                              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                            Services
                        </Link>
                        <Link to="/about"
                              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                            About Us
                        </Link>
                        <Link to="/contact"
                              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                            Contact
                        </Link>
                    </nav>

                    {/* Profile Dropdown */}
                    <div className="hidden md:flex items-center">
                        <div className="ml-3 relative" ref={profileRef}>
                            <div>
                                <button
                                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                                    className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full focus:outline-none"
                                >
                                    <FaUser className="h-5 w-5"/>
                                    <span className="text-sm font-medium">John Doe</span>
                                    <FaChevronDown
                                        className={`h-3 w-3 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`}/>
                                </button>
                            </div>

                            {/* Profile Dropdown Menu */}
                            {isProfileOpen && (
                                <div
                                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                                    <div className="py-1">
                                        <Link to="/profile"
                                              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            <FaUser className="mr-3 h-4 w-4"/>
                                            Profile
                                        </Link>
                                        <Link to="/settings"
                                              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            <FaCog className="mr-3 h-4 w-4"/>
                                            Settings
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                        >
                                            <FaSignOutAlt className="mr-3 h-4 w-4"/>
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
                        >
                            {isMobileMenuOpen ? (
                                <FaTimes className="block h-6 w-6"/>
                            ) : (
                                <FaBars className="block h-6 w-6"/>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/"
                              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100">
                            Home
                        </Link>
                        <Link to="/products"
                              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100">
                            Products
                        </Link>
                        <Link to="/services"
                              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100">
                            Services
                        </Link>
                        <Link to="/about"
                              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100">
                            About Us
                        </Link>
                        <Link to="/contact"
                              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100">
                            Contact
                        </Link>
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="flex items-center px-5">
                            <div className="flex-shrink-0">
                                <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                                    <FaUser className="h-5 w-5 text-gray-600"/>
                                </div>
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium text-gray-800">John Doe</div>
                                <div className="text-sm font-medium text-gray-500">user@example.com</div>
                            </div>
                        </div>
                        <div className="mt-3 px-2 space-y-1">
                            <Link to="/profile"
                                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100">
                                Profile
                            </Link>
                            <Link to="/settings"
                                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100">
                                Settings
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-gray-100"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
