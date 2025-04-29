import React from "react";
import { ContactForm } from "./ContactForm";
import { LuClock, LuMail, LuMapPin, LuPhone } from "react-icons/lu";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-20 bg-white w-full">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Contáctanos
                    </h2>
                    <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        ¿Tienes preguntas o estás listo para empezar tu camino
                        hacia la nutrición? Contáctanos hoy mismo.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                                Nuestra Información
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <LuMapPin
                                        className="text-green-500 mr-4 mt-1 flex-shrink-0"
                                        size={20}
                                    />
                                    <div>
                                        <h4 className="font-medium text-gray-800">
                                            Ubicación
                                        </h4>
                                        <p className="text-gray-600">
                                            123 Nutrition Street, Healthy City,
                                            10001
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <LuPhone
                                        className="text-green-500 mr-4 mt-1 flex-shrink-0"
                                        size={20}
                                    />
                                    <div>
                                        <h4 className="font-medium text-gray-800">
                                            Teléfono
                                        </h4>
                                        <p className="text-gray-600">
                                            +1 (555) 123-4567
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <LuMail
                                        className="text-green-500 mr-4 mt-1 flex-shrink-0"
                                        size={20}
                                    />
                                    <div>
                                        <h4 className="font-medium text-gray-800">
                                            Correo electrónico
                                        </h4>
                                        <p className="text-gray-600">
                                            info@nutrivida.com
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <LuClock
                                        className="text-green-500 mr-4 mt-1 flex-shrink-0"
                                        size={20}
                                    />
                                    <div>
                                        <h4 className="font-medium text-gray-800">
                                            Horario
                                        </h4>
                                        <p className="text-gray-600">
                                            Lunes - Viernes: 9:00 AM - 6:00 PM
                                        </p>
                                        <p className="text-gray-600">
                                            Sábado: 10:00 AM - 2:00 PM
                                        </p>
                                        <p className="text-gray-600">
                                            Domingo: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-80 rounded-lg overflow-hidden shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d941.6710579224058!2d-98.9381171303694!3d19.25258879887427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1bf7ba4d5063%3A0x79697e497287ef43!2sC.%20Pirul%2038%2C%20San%20Miguel%20Xico%2C%2056614%20Valle%20de%20Chalco%20Solidaridad%2C%20M%C3%A9x.!5e0!3m2!1ses-419!2smx!4v1745541994907!5m2!1ses-419!2smx"
                                className="w-full h-full"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación de la tienda de pizzería en Valle de Chalco"
                            ></iframe>
                        </div>
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};
