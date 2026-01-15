import type { Metadata } from "next";
import { Download } from "lucide-react";
import TechStack from "@/components/ui/TechStack";
import Timeline from "@/components/ui/Timeline";

export const metadata: Metadata = {
    title: "Sobre mí | Edward Echandia",
    description: "Conoce más sobre Edward Echandia, desarrollador web especializado en React y Next.js.",
};

export default function AboutPage() {
    return (
        <div className="space-y-12 pb-20">
            <header>
                <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-6">Sobre mí</h1>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl font-light">
                    Soy un desarrollador apasionado por crear experiencias digitales únicas y funcionales.
                </p>
            </header>

            <div className="space-y-6 text-base text-neutral-800 dark:text-neutral-200 leading-relaxed max-w-3xl">
                <p>
                    Mi nombre es Edward Echandia y tengo experiencia en el desarrollo de aplicaciones web modernas.
                    Me especializo en el ecosistema de JavaScript, con un enfoque particular en React y Next.js.
                </p>
                <p>
                    Siempre busco aprender nuevas tecnologías y mejorar mis habilidades.
                    Me encanta el diseño minimalista y la atención al detalle.
                </p>
            </div>

            {/* Timeline Section */}
            <Timeline />

            {/* CV Download Section */}
            <div>
                <a
                    href="/cv-edward-echandia.pdf"
                    download
                    className="inline-flex items-center gap-3 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-bold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                >
                    <Download size={20} />
                    Descargar CV
                </a>
            </div>

            {/* Tech Stack Section */}
            <TechStack />
        </div>
    );
}

