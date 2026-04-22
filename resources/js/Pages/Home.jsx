import React from "react";
import { Star, MapPin, Zap, Shield, Sparkles, Users } from "lucide-react";

export default function Home() {
    const services = [
        {
            icon: Zap,
            title: "Inspección y Foto-Documentación",
            description: "Inspección clara del 100% con fotos detalladas",
        },
        {
            icon: Shield,
            title: "Materiales de Marca",
            description: "Owens Corning, GAF, James Hardie, Westlake",
        },
        {
            icon: Sparkles,
            title: "Limpieza Completa",
            description: "Barredora magnética y retiro de escombros incluido",
        },
        {
            icon: Users,
            title: "Equipos Locales",
            description: "Sirviendo Columbus & Central Ohio desde 2007",
        },
    ];

    const process = [
        { step: "01", title: "Inspeccionar y Fotografiar", icon: "📸" },
        { step: "02", title: "Opciones y Cotización Escrita", icon: "📋" },
        { step: "03", title: "Proteger y Programar", icon: "📅" },
        { step: "04", title: "Instalar a Especificación", icon: "🔨" },
        { step: "05", title: "Limpieza y Barredora Magnética", icon: "🧹" },
        { step: "06", title: "Inspección Final y Garantía", icon: "✅" },
    ];

    const testimonials = [
        {
            name: "Raqnie Toledo",
            text: "No podría estar más feliz con esta empresa de techos. De principio a fin, el equipo fue rápido, educado y muy profesional. Recibí un precio justo y trabajo de excelente calidad.",
            rating: 5,
            service: "Techos",
        },
        {
            name: "Dave Arnold",
            text: "United Exteriors Group ha hecho múltiples techos para mí. Son muy confiables. Su trabajo es excepcional. Sus equipos son trabajadores.",
            rating: 5,
            service: "Múltiples Servicios",
        },
    ];

    const locations = [
        "Columbus",
        "Dublin",
        "Hilliard",
        "Grove City",
        "Westerville",
        "Gahanna",
        "Powell",
        "Worthington",
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-accent-600 text-white py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                                Techos & Remodelación{" "}
                                <span className="text-secondary-400">
                                    Exterior
                                </span>{" "}
                                en Columbus
                            </h1>
                            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                                Desde 2007, United Exteriors protege y renueva
                                hogares del centro de Ohio con techos,
                                revestimientos y servicios de canales
                                confiables.
                            </p>
                            <div className="flex gap-4 flex-col sm:flex-row">
                                <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg hover:shadow-xl">
                                    Cotización Gratis
                                </button>
                                <a
                                    href="tel:6143737444"
                                    className="bg-white hover:bg-gray-100 text-primary-500 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg hover:shadow-xl"
                                >
                                    Llamar Ahora: (614) 373-7444
                                </a>
                            </div>
                        </div>
                        <div className="relative h-96 md:h-full">
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary-400 to-orange-400 rounded-3xl opacity-90 transform hover:scale-105 transition"></div>
                            <div className="absolute inset-4 bg-white rounded-3xl flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">🏠</div>
                                    <p className="text-primary-500 font-bold text-xl">
                                        Proteja su inversión
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-4 text-primary-500">
                        Lo que nos hace diferentes
                    </h2>
                    <p className="text-center text-gray-600 mb-12 text-lg">
                        Comprometidos con calidad, transparencia y
                        profesionalismo
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, idx) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={idx}
                                    className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition border-t-4 border-secondary-500"
                                >
                                    <Icon className="w-12 h-12 text-secondary-500 mb-4" />
                                    <h3 className="font-bold text-lg text-primary-500 mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {service.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-4 text-primary-500">
                        Nuestro Proceso de 6 Pasos
                    </h2>
                    <p className="text-center text-gray-600 mb-12 text-lg">
                        Transparencia en cada fase de su proyecto
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {process.map((item, idx) => (
                            <div key={idx} className="relative">
                                <div className="bg-gradient-to-br from-primary-500 to-accent-600 text-white p-8 rounded-xl">
                                    <div className="text-5xl font-bold mb-4 opacity-20">
                                        {item.step}
                                    </div>
                                    <div className="text-4xl mb-4">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-bold text-xl mb-2">
                                        {item.title}
                                    </h3>
                                    <div className="w-12 h-1 bg-secondary-400 rounded-full"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-4 text-primary-500">
                        Lo que dicen nuestros clientes
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border-l-4 border-secondary-500"
                            >
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map(
                                        (_, i) => (
                                            <Star
                                                key={i}
                                                size={20}
                                                className="fill-secondary-500 text-secondary-500"
                                            />
                                        ),
                                    )}
                                </div>
                                <p className="text-gray-700 mb-6 italic">
                                    "{testimonial.text}"
                                </p>
                                <div>
                                    <p className="font-bold text-primary-500">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        {testimonial.service}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-4 text-primary-500">
                        Áreas de Servicio
                    </h2>
                    <p className="text-center text-gray-600 mb-12 text-lg">
                        Sirviendo Columbus & Central Ohio
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {locations.map((location, idx) => (
                            <div
                                key={idx}
                                className="flex items-center justify-center p-4 bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg border border-primary-200 hover:border-secondary-500 hover:shadow-md transition"
                            >
                                <div className="flex items-center gap-2">
                                    <MapPin
                                        size={20}
                                        className="text-secondary-500"
                                    />
                                    <span className="font-semibold text-primary-500">
                                        {location}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative bg-gradient-to-r from-primary-600 to-accent-600 text-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-bold mb-6">
                        ¿Listo para proteger su hogar?
                    </h2>
                    <p className="text-xl text-gray-100 mb-8">
                        Obtenga una cotización gratuita sin compromiso. La
                        mayoría de citas se programan en pocos días hábiles.
                    </p>
                    <div className="flex gap-4 justify-center flex-col sm:flex-row">
                        <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-10 py-4 rounded-lg font-bold text-lg transition shadow-lg hover:shadow-xl">
                            Solicitar Cotización Gratis
                        </button>
                        <a
                            href="tel:6143737444"
                            className="border-2 border-white hover:bg-white hover:text-primary-600 text-white px-10 py-4 rounded-lg font-bold text-lg transition"
                        >
                            (614) 373-7444
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-primary-800 text-gray-300 py-12 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                            <div className="w-8 h-8 bg-secondary-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">U</span>
                            </div>
                            United Exteriors
                        </h3>
                        <p className="text-sm">
                            Techos y Remodelación Exterior de Calidad en
                            Columbus, Ohio
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">Contacto</h4>
                        <p className="text-sm mb-2">📞 (614) 373-7444</p>
                        <p className="text-sm mb-2">
                            📧 Info@Unitedexteriorsoh.Com
                        </p>
                        <p className="text-sm">
                            📍 118 Norton Rd, Columbus, OH 43228
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">Horario</h4>
                        <p className="text-sm">Lun-Vie: 8:00 AM - 5:00 PM</p>
                        <p className="text-sm">Citas disponibles</p>
                    </div>
                </div>
                <div className="border-t border-gray-600 pt-8">
                    <p className="text-center text-sm">
                        © 2024 United Exteriors Group. Todos los derechos
                        reservados.
                    </p>
                </div>
            </footer>
        </div>
    );
}
