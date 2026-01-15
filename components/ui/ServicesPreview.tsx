"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Layout, Server, Database, Smartphone } from "lucide-react";

const services = [
    {
        icon: <Layout className="w-8 h-8" />,
        title: "Desarrollo Frontend",
        description: "Interfaces modernas, responsivas y altamente interactivas utilizando React, Next.js y Tailwind CSS.",
    },
    {
        icon: <Database className="w-8 h-8" />,
        title: "Desarrollo Backend",
        description: "APIs robustas y escalables, diseño de bases de datos y lógica de servidor con Node.js y Python.",
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        title: "Desarrollo Full Stack",
        description: "Soluciones integrales de principio a fin, asegurando rendimiento, seguridad y una excelente experiencia de usuario.",
    },
];

export default function ServicesPreview() {
    return (
        <section className="py-20 px-4 md:px-8 bg-white dark:bg-neutral-900">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Mis Servicios</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        Ofrezco soluciones tecnológicas a medida, enfocadas en la calidad, escalabilidad y experiencia de usuario.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors group"
                        >
                            <div className="bg-white dark:bg-neutral-800 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
