"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function ContactCTA() {
    return (
        <section className="py-24 px-4 md:px-8 bg-neutral-900 text-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-600 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-600 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
                >
                    ¿Tienes un proyecto en mente?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="text-xl text-neutral-300 mb-10 max-w-2xl mx-auto"
                >
                    Estoy disponible para nuevas oportunidades. Hablemos sobre cómo puedo ayudarte a construir tu próxima gran idea.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Link
                        href="/contact"
                        className="px-8 py-4 bg-white text-neutral-900 rounded-full font-bold text-lg hover:bg-neutral-100 transition-colors flex items-center gap-2"
                    >
                        Contáctame <Mail className="w-5 h-5" />
                    </Link>
                    <Link
                        href="/projects"
                        className="px-8 py-4 bg-transparent border border-neutral-700 text-white rounded-full font-bold text-lg hover:bg-neutral-800 transition-colors flex items-center gap-2"
                    >
                        Ver Portafolio <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
