import Image from "next/image";
export const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-gray-50 w-full">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Acerca De
                    </h2>
                    <div className="w-24 h-1 bg-green-500 mx-auto"></div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="md:w-1/2">
                        <Image
                            src="/aboutnutrition.jpg"
                            alt="Nutritionist consulting with a client"
                            width={500}
                            height={500}
                            className="rounded-lg shadow-lg w-full h-auto"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            Nuestra Filosofía
                        </h3>
                        <p className="text-gray-600 mb-6">
                            En NutriVida, creemos que una nutrición adecuada es
                            la base de la salud y el bienestar general. Nuestro
                            enfoque combina el conocimiento científico con la
                            atención personalizada para ayudarte a alcanzar tus
                            objetivos de salud.
                        </p>
                        <p className="text-gray-600 mb-6">
                            Entendemos que cada persona es única, con diferentes
                            necesidades, preferencias y estilos de vida. Por
                            eso, creamos planes de nutrición personalizados que
                            se adaptan a ti, no dietas genéricas difíciles de
                            mantener.
                        </p>
                        <p className="text-gray-600">
                            Nuestro equipo de nutricionistas certificados se
                            dedica a brindar orientación basada en la evidencia
                            y apoyo continuo durante tu camino hacia una vida
                            saludable. Nos comprometemos a ayudarte a
                            desarrollar una relación positiva con la
                            alimentación y hábitos sostenibles que te lleven al
                            bienestar a largo plazo.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
