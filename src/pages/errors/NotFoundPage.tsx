"use client"

import type React from "react"

import { useState } from "react"
import {
    FaHome,
    FaSearch,
    FaArrowLeft,
    FaSadTear,
    FaExclamationTriangle,
    FaCompass,
    FaMapMarkerAlt,
    FaQuestionCircle,
    FaEnvelope,
    FaNewspaper,
    FaShoppingCart,
    FaInfoCircle,
    FaHeadset,
} from "react-icons/fa"
import { BiError, BiSearchAlt, BiLinkExternal } from "react-icons/bi"
import { IoMdRefresh, IoMdPlanet } from "react-icons/io"
import { MdOutlineSignalWifiOff, MdOutlineSignalWifiStatusbarConnectedNoInternet4 } from "react-icons/md"
import { RiRoadMapLine, RiFilePaperLine } from "react-icons/ri"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"

export default function NotFoundPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const navigate = useNavigate()

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4 py-12">
            <div className="max-w-3xl w-full text-center">
                {/* 404 Icon Illustration */}
                <div className="mb-8 relative mx-auto w-64 h-64 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center animate-float">
                        <div className="relative">
                            {/* Planet/World Background */}
                            <IoMdPlanet className="text-blue-100 text-[200px]" />

                            {/* 404 Text */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className="text-5xl font-bold text-blue-800">404</h2>
                            </div>

                            {/* Sad Face */}
                            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
                                <FaSadTear className="text-blue-500 text-4xl animate-pulse" />
                            </div>

                            {/* Disconnected Icons */}
                            <MdOutlineSignalWifiStatusbarConnectedNoInternet4 className="absolute top-10 right-10 text-red-500 text-3xl" />
                            <BiError className="absolute top-20 left-10 text-orange-500 text-3xl animate-bounce" />
                        </div>
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
                    <FaExclamationTriangle className="text-yellow-500" />
                    <span>Page Not Found</span>
                </h1>

                <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto flex items-center justify-center">
                    <FaInfoCircle className="mr-2 text-blue-500" />
                    Sorry, the page you are looking for does not exist or has been moved to a different address.
                </p>

                {/* Connection check suggestion */}
                <div className="mb-8 bg-blue-50 rounded-lg p-4 flex items-center justify-center gap-3 max-w-md mx-auto">
                    <MdOutlineSignalWifiOff className="text-blue-600 text-xl flex-shrink-0" />
                    <p className="text-sm text-blue-700">
                        Check your internet connection or ensure the URL entered is correct.
                    </p>
                </div>

                {/* Search box */}
                <form onSubmit={handleSearch} className="mb-8 max-w-md mx-auto">
                    <div className="relative">
                        <BiSearchAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-3 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-full hover:bg-blue-700 transition flex items-center gap-1"
                        >
                            <FaSearch className="text-sm" />
                            <span>Search</span>
                        </button>
                    </div>
                </form>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                    <Link
                        to="/"
                        className="flex items-center justify-center gap-2 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-md"
                    >
                        <FaHome className="text-lg" />
                        <span>Go to Homepage</span>
                    </Link>
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center justify-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition shadow-sm"
                    >
                        <FaArrowLeft className="text-lg" />
                        <span>Go Back</span>
                    </button>
                    <button
                        onClick={() => window.location.reload()}
                        className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-200 transition shadow-sm"
                    >
                        <IoMdRefresh className="text-lg" />
                        <span>Reload Page</span>
                    </button>
                </div>

                {/* Site map */}
                <div className="mt-8 border-t border-gray-200 pt-8">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center justify-center gap-2">
                        <RiRoadMapLine className="text-blue-600" />
                        <span>You might want to visit:</span>
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
                        <Link
                            to="/products"
                            className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition shadow-sm"
                        >
                            <FaShoppingCart className="text-blue-500" />
                            <span>Products</span>
                        </Link>
                        <Link
                            to="/services"
                            className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition shadow-sm"
                        >
                            <FaCompass className="text-blue-500" />
                            <span>Services</span>
                        </Link>
                        <Link
                            to="/blog"
                            className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition shadow-sm"
                        >
                            <FaNewspaper className="text-blue-500" />
                            <span>Blog</span>
                        </Link>
                        <Link
                            to="/contact"
                            className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition shadow-sm"
                        >
                            <FaEnvelope className="text-blue-500" />
                            <span>Contact</span>
                        </Link>
                        <Link
                            to="/support"
                            className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition shadow-sm"
                        >
                            <FaHeadset className="text-blue-500" />
                            <span>Support</span>
                        </Link>
                        <Link
                            to="/sitemap"
                            className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition shadow-sm"
                        >
                            <FaMapMarkerAlt className="text-blue-500" />
                            <span>Sitemap</span>
                        </Link>
                    </div>
                </div>

                {/* Help section */}
                <div className="mt-8 text-center">
                    <Link to="/help" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition">
                        <FaQuestionCircle className="mr-2" />
                        <span>Need help? Visit our Help Center</span>
                        <BiLinkExternal className="ml-1" />
                    </Link>
                </div>

                {/* Report issue */}
                <div className="mt-4 text-center">
                    <Link
                        to="/report-issue"
                        className="inline-flex items-center text-gray-500 hover:text-gray-700 text-sm transition"
                    >
                        <RiFilePaperLine className="mr-1" />
                        <span>Report this issue</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}