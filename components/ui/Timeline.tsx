"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

interface TimelineItem {
    id: number;
    title: string;
    organization: string;
    date: string;
    description: string;
    type: "work" | "education";
}

const timelineData: TimelineItem[] = [
    {
        id: 1,
        title: "Desarrollador Full Stack Freelance",
        organization: "Independiente",
        date: "Actualidad",
        description: "Desarrollo de proyectos web a medida, especializándome en tecnologías modernas como Next.js y React.",
        type: "work",
    },
    {
        id: 2,
        title: "Técnico en Programación de Software",
        organization: "Politécnico Pio Internacional de Occidente",
        date: "Beca Gobernación del Valle",
        description: "Formación especializada en desarrollo de software y lógica de programación.",
        type: "education",
    },
    {
        id: 3,
        title: "Técnico en Sistemas",
        organization: "Servicio Nacional de Aprendizaje - SENA",
        date: "Finalizado",
        description: "Mantenimiento de equipos, redes y fundamentos de sistemas informáticos.",
        type: "education",
    },
    {
        id: 4,
        title: "Bachiller Académico",
        organization: "CEVIDA CALI",
        date: "Finalizado",
        description: "Formación académica secundaria completa.",
        type: "education",
    },
];

export default function Timeline() {
    return (
        <section className="py-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3">
                <Calendar className="w-8 h-8 md:w-10 md:h-10 text-emerald-500" />
                Mi Trayectoria
            </h2>

            <div className="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-3 md:ml-6 space-y-12">
                {timelineData.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Icon Indicator */}
                        <div className="absolute -left-[9px] md:-left-[11px] top-0 bg-neutral-50 dark:bg-neutral-900 border-2 border-emerald-500 rounded-full p-1.5 md:p-2">
                            {item.type === "work" ? (
                                <Briefcase size={16} className="text-emerald-600 dark:text-emerald-400" />
                            ) : (
                                <GraduationCap size={16} className="text-emerald-600 dark:text-emerald-400" />
                            )}
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                                {item.title}
                            </h3>
                            <span className="text-sm font-mono text-neutral-500 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded w-fit mt-1 sm:mt-0">
                                {item.date}
                            </span>
                        </div>

                        <p className="text-lg font-medium text-emerald-600 dark:text-emerald-400 mb-2">
                            {item.organization}
                        </p>

                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
