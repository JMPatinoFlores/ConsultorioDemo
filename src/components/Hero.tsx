import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative flex md:h-screen h-[100%] items-center justify-between md:justify-center w-full py-20 md:py-0"
        >
            <Image
                src="/nutricion.jpg"
                alt="Nutrición"
                fill
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="mx-auto px-4 relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Bienvenido a{" "}
                    <span className="text-green-400">NutriVida</span>
                </h1>
                <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
                    Tu camino hacia una salud óptima a través de una orientación
                    nutricional personalizada
                </p>
                <Link
                    href="#contact"
                    className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 text-lg"
                >
                    Reservar una Consulta
                </Link>
            </div>
        </section>
    );
}
