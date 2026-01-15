import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
    title: "Proyectos | Edward Echandia",
    description: "Explora los proyectos de desarrollo web de Edward Echandia, incluyendo aplicaciones React y Next.js.",
};

export default function ProjectsPage() {
    return (
        <div className="space-y-12 pb-20">
            <header>
                <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-6">Proyectos</h1>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl font-light">
                    Una selección de mis trabajos más recientes.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <Link
                        key={project.id}
                        href={`/projects/${project.slug}`}
                        className="group cursor-pointer"
                    >
                        <div className="aspect-video w-full rounded-2xl mb-4 overflow-hidden relative bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        </div>
                        <div className="flex justify-between items-start gap-4">
                            <div>
                                <h3 className="text-xl font-bold group-hover:underline decoration-2 underline-offset-4">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 line-clamp-2">
                                    {project.description}
                                </p>
                            </div>
                            <span className="text-xs font-mono text-neutral-500 border border-neutral-200 dark:border-neutral-700 px-2 py-1 rounded shrink-0 h-fit">
                                {project.category}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

