"use client";

import Image from "next/image";
import { useState } from "react";
import { LuX } from "react-icons/lu";

export const GallerySection = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const galleryItems = [
        {
            image: "/consultorio.jpg",
            title: "Nuestro Consultorio",
            description:
                "Un espacio tranquilo y acogedor para tus consultas de nutrición.",
        },
        {
            image: "/preparacion.jpg",
            title: "Preparación de Comidas Saludables",
            description: "Aprenda a preparar comidas nutritivas y deliciosas.",
        },
        {
            image: "/peso.jpg",
            title: "Historia de Éxito de un Cliente",
            description:
                "María perdió 15kg y recuperó su energía con nuestra orientación.",
        },
        {
            image: "/taller.jpg",
            title: "Taller de Nutrición",
            description:
                "Talleres mensuales para educar a nuestra comunidad sobre la alimentación saludable.",
        },
        {
            image: "/plan.jpg",
            title: "Plan de Comidas Personalizado",
            description:
                "Ejemplo de un plan de alimentación semanal personalizado para uno de nuestros clientes.",
        },
        {
            image: "/evaluacion.jpg",
            title: "Evaluación Nutricional",
            description:
                "Herramientas profesionales que utilizamos para evaluar su estado nutricional.",
        },
    ];
    return (
        <section id="gallery" className="py-20 bg-gray-50 w-full">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Galería y Testimonios
                    </h2>
                    <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Conozca nuestras instalaciones y las historias de éxito
                        de nuestros clientes.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform duration-300 hover:-translate-y-2"
                            onClick={() => setSelectedImage(item.image)}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={800}
                                height={800}
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                <h3 className="text-white font-semibold text-lg">
                                    {item.title}
                                </h3>
                                <p className="text-gray-200 text-sm">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Image Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative max-w-4xl w-full">
                            <button
                                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage(null);
                                }}
                            >
                                <LuX size={24} />
                            </button>
                            <Image
                                src={selectedImage}
                                alt="Enlarged view"
                                width={1000}
                                height={1000}
                                className="w-full h-auto max-h-[80vh] object-contain"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
