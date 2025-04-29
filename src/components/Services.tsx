import { LuActivity, LuApple, LuClipboardList, LuHeart } from "react-icons/lu";

export const ServicesSection = () => {
    const services = [
        {
            icon: <LuClipboardList size={40} className="text-green-500 mb-4" />,
            title: "Planes de Nutrición Personalizados",
            description:
                "Planes de alimentación personalizados diseñados específicamente para tu cuerpo, objetivos y preferencias de estilo de vida.",
        },
        {
            icon: <LuHeart size={40} className="text-green-500 mb-4" />,
            title: "Manejo de Condiciones de Salud",
            description:
                "Orientación nutricional especializada para diabetes, problemas cardiovasculares, trastornos digestivos y más.",
        },
        {
            icon: <LuActivity size={40} className="text-green-500 mb-4" />,
            title: "Control de Peso",
            description:
                "Enfoques sostenibles para la pérdida o el aumento de peso con apoyo y ajustes continuos.",
        },
        {
            icon: <LuApple size={40} className="text-green-500 mb-4" />,
            title: "Educación Nutricional",
            description:
                "Aprende a tomar decisiones alimentarias informadas y a desarrollar hábitos saludables que duren toda la vida.",
        },
    ];

    return (
        <section id="services" className="py-20 bg-white w-full">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Nuestros Servicios
                    </h2>
                    <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Ofrecemos servicios nutricionales integrales adaptados a
                        tus necesidades y objetivos individuales.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-lg p-8 shadow-md transition-transform duration-300 hover:-translate-y-2"
                        >
                            <div className="flex justify-center">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-center">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="mt-16 bg-green-50 rounded-lg p-8 shadow-md">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        Nuestro Proceso de Consulta
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                1
                            </div>
                            <h4 className="text-lg font-medium text-gray-800 mb-2">
                                Evaluación Inicial
                            </h4>
                            <p className="text-gray-600">
                                Evaluación integral de su historial de salud,
                                estilo de vida y objetivos nutricionales.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                2
                            </div>
                            <h4 className="text-lg font-medium text-gray-800 mb-2">
                                Plan Personalizado
                            </h4>
                            <p className="text-gray-600">
                                Desarrollo de una estrategia nutricional
                                personalizada y adaptada a tus necesidades
                                específicas.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                3
                            </div>
                            <h4 className="text-lg font-medium text-gray-800 mb-2">
                                Apoyo Continuo
                            </h4>
                            <p className="text-gray-600">
                                Seguimiento periódico para seguir el progreso,
                                realizar ajustes y brindar motivación.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
