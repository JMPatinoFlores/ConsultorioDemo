import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export const FloatingWhatsApp = () => {
    const phoneNumber = "5652147607"; // Replace with actual WhatsApp number
    const message = "¡Hola! Quiero una página web como la de NutriVida.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;

    return (
        <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-50 bg-green-500 p-4 rounded-full shadow-lg hover:scale-105 transition-transform"
            aria-label="Enviar mensaje en WhatsApp"
        >
            <FaWhatsapp className="text-white md:text-5xl text-xl" />
        </Link>
    );
};
