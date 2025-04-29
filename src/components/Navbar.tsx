"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className=" fixed top-0 left-0 right-0 z-50">
            <div className="bg-white shadow-md py-2">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="text-2xl font-bold text-green-600"
                        >
                            NutriVida
                        </Link>
                    </div>
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link
                            href="#hero"
                            className="text-gray-700 hover:text-green-600 transition-colors"
                        >
                            Inicio
                        </Link>
                        <Link
                            href="#about"
                            className="text-gray-700 hover:text-green-600 transition-colors"
                        >
                            Nosotros
                        </Link>
                        <Link
                            href="#services"
                            className="text-gray-700 hover:text-green-600 transition-colors"
                        >
                            Servicios
                        </Link>
                        <Link
                            href="#gallery"
                            className="text-gray-700 hover:text-green-600 transition-colors"
                        >
                            Galería
                        </Link>
                        <Link
                            href="#contact"
                            className="text-gray-700 hover:text-green-600 transition-colors"
                        >
                            Contacto
                        </Link>
                    </nav>
                    {/* Mobile Menu Link */}
                    <button
                        className="md:hidden text-gray-700 focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="container mx-auto px-4 py-4 flex flex-col items-center justify-center space-y-4">
                        <Link
                            href="#hero"
                            className="text-gray-700 hover:text-green-600 transition-colors py-2"
                        >
                            Inicio
                        </Link>
                        <Link
                            href="#about"
                            className="text-gray-700 hover:text-green-600 transition-colors py-2"
                        >
                            Nosotros
                        </Link>
                        <Link
                            href="#services"
                            className="text-gray-700 hover:text-green-600 transition-colors py-2"
                        >
                            Servicios
                        </Link>
                        <Link
                            href="#gallery"
                            className="text-gray-700 hover:text-green-600 transition-colors py-2"
                        >
                            Galería
                        </Link>
                        <Link
                            href="#contact"
                            className="text-gray-700 hover:text-green-600 transition-colors py-2"
                        >
                            Contacto
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
