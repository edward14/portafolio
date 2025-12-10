import type { Metadata } from "next";
import Link from "next/link";
import { Code, Server, LayoutDashboard, Database, Bot, Wrench, Cable, Video } from "lucide-react";

export const metadata: Metadata = {
    title: "Servicios | Edward Echandia",
    description: "Servicios de desarrollo web, backend, sistemas administrativos, bases de datos y soporte técnico por Edward Echandia.",
};

export default function ServicesPage() {
    const services = [
        {
            icon: Code,
            title: "Desarrollo Frontend",
            description: "Creación de interfaces modernas, rápidas y responsivas utilizando React, Next.js y TailwindCSS. Implementación de componentes reutilizables, optimización del rendimiento y diseño orientado a la experiencia del usuario.",
            price: "Consultar",
        },
        {
            icon: Server,
            title: "Desarrollo Backend",
            description: "Construcción de APIs robustas y seguras con Node.js y Express. Incluye autenticación con JWT, manejo de base de datos, validaciones y documentación técnica.",
            price: "Consultar",
        },
        {
            icon: LayoutDashboard,
            title: "Sistemas Administrativos a la Medida",
            description: "Desarrollo de aplicaciones para negocios como inventarios, facturación, control de productos, dashboards y gestión de usuarios. Soluciones totalmente personalizadas según el flujo de trabajo del cliente.",
            price: "Consultar",
        },
        {
            icon: Database,
            title: "Integración de Bases de Datos",
            description: "Diseño, modelado y gestión de bases de datos en MySQL, PostgreSQL o MongoDB. Optimización de consultas, relaciones, índices y conexión directa con aplicaciones web o móviles.",
            price: "Consultar",
        },
        {
            icon: Bot,
            title: "Automatización y Scripting",
            description: "Automatización de tareas repetitivas mediante scripts en Python o JavaScript. Generación de reportes, manipulación de archivos, envío automatizado de información y bots administrativos.",
            price: "Consultar",
        },
        {
            icon: Wrench,
            title: "Soporte Técnico",
            description: "Mantenimiento preventivo y correctivo de equipos de cómputo, diagnóstico de fallas y optimización de sistemas.",
            price: "Consultar",
        },
        {
            icon: Cable,
            title: "Cableado Estructurado",
            description: "Instalación profesional de redes de datos, cableado de red certificado y organización de cuartos de telecomunicaciones.",
            price: "Consultar",
        },
        {
            icon: Video,
            title: "Sistemas de CCTV",
            description: "Instalación y configuración de cámaras de seguridad, sistemas de videovigilancia y monitoreo remoto.",
            price: "Consultar",
        },
    ];

    return (
        <div className="space-y-12 pb-20">
            <header>
                <h1 className="text-5xl md:text-8xl font-black mb-6">Servicios</h1>
                <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl font-light">
                    Soluciones digitales y técnicas a medida para tus necesidades.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                    <div key={index} className="bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 p-8 rounded-2xl hover:shadow-lg dark:hover:shadow-neutral-900/50 transition-shadow duration-300">
                        <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-700 rounded-xl flex items-center justify-center mb-6 text-neutral-900 dark:text-neutral-100">
                            <service.icon size={24} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                        <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">{service.description}</p>
                        <Link
                            href="/contact"
                            className="text-emerald-600 dark:text-emerald-400 font-mono font-medium hover:underline hover:underline-offset-4 transition-all"
                        >
                            {service.price} →
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
