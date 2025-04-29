"use client";

import { useState } from "react";

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitResult, setSubmitResult] = useState<{
        success: boolean;
        message: string;
    } | null>(null);
    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate EmailJS submission
        try {
            // In a real implementation, you would use EmailJS here
            // For example:
            // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
            // Simulating API delay
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setSubmitResult({
                success: true,
                message: "Thank you! Your message has been sent successfully.",
            });
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            setSubmitResult({
                success: false,
                message: "Something went wrong. Please try again later.",
            });
            console.error(error);
        } finally {
            setIsSubmitting(false);
            // Clear the result message after 5 seconds
            setTimeout(() => {
                setSubmitResult(null);
            }, 5000);
        }
    };
    return (
        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Envíanos un Mensaje
            </h3>
            {submitResult && (
                <div
                    className={`p-4 mb-6 rounded-md ${
                        submitResult.success
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                    }`}
                >
                    {submitResult.message}
                </div>
            )}
            <form onSubmit={handleSubmit} className="text-gray-900">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 ">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Nombre Completo *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Tu nombre"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Correo Electrónico *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Tu email"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label
                            htmlFor="phone"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Número de Teléfono
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Tu teléfono (opcional)"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="subject"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Asunto *
                        </label>
                        <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <option value="">Selecciona el asunto</option>
                            <option value="consultation">
                                Agendar una Constulta
                            </option>
                            <option value="information">
                                Pedir Información
                            </option>
                            <option value="feedback">
                                Quejas y Sugerencias
                            </option>
                            <option value="other">Otro</option>
                        </select>
                    </div>
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="message"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Mensaje *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="¿Cómo podemos ayudarte?"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-md text-white font-medium transition-colors ${
                        isSubmitting
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-green-600 hover:bg-green-700"
                    }`}
                >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </button>
            </form>
        </div>
    );
};
