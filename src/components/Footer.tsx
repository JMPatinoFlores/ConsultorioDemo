import { LuFacebook, LuInstagram, LuLinkedin, LuTwitter } from "react-icons/lu";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-800 text-white py-12 w-full">
            <div className="container mx-auto px-4">
                <div>
                    <div className="flex flex-col items-center justify-center mb-4">
                        <h3 className="text-xl font-semibold mb-4">
                            NutriVida
                        </h3>
                        <p className="text-gray-300 mb-4 text-center">
                            Tu aliado de confianza para una orientación
                            nutricional personalizada y un estilo de vida más
                            saludable.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-300 hover:text-green-400 transition-colors"
                                aria-label="Facebook"
                            >
                                <LuFacebook size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-green-400 transition-colors"
                                aria-label="Instagram"
                            >
                                <LuInstagram size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-green-400 transition-colors"
                                aria-label="Twitter"
                            >
                                <LuTwitter size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-green-400 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <LuLinkedin size={20} />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="text-xl font-semibold mb-4">Enlaces</h3>
                        <div className="flex items-center max-w-7xl space-x-4">
                            <a
                                href="#hero"
                                className="text-gray-300 hover:text-green-400 transition-colors"
                            >
                                Inicio
                            </a>

                            <a
                                href="#about"
                                className="text-gray-300 hover:text-green-400 transition-colors"
                            >
                                Nosotros
                            </a>

                            <a
                                href="#services"
                                className="text-gray-300 hover:text-green-400 transition-colors"
                            >
                                Servicios
                            </a>

                            <a
                                href="#gallery"
                                className="text-gray-300 hover:text-green-400 transition-colors"
                            >
                                Galería
                            </a>

                            <a
                                href="#contact"
                                className="text-gray-300 hover:text-green-400 transition-colors"
                            >
                                Contacto
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-12 pt-6 text-center">
                    <p className="text-gray-400">
                        &copy; {currentYear} NutriVida. Todos los derechos
                        reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};
