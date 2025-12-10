import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects, getProjectBySlug, getAllProjectSlugs } from "@/data/projects";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return { title: "Proyecto no encontrado" };
    }

    return {
        title: `${project.title} | Edward Echandia`,
        description: project.description,
    };
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="space-y-12 pb-20">
            {/* Back Button */}
            <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
                <ArrowLeft size={20} />
                <span>Volver a proyectos</span>
            </Link>

            {/* Header */}
            <header className="space-y-4">
                <div className="flex items-center gap-4 flex-wrap">
                    <span className="text-sm font-mono text-neutral-500 border border-neutral-200 dark:border-neutral-700 px-3 py-1 rounded">
                        {project.category}
                    </span>
                    <span className="text-sm font-mono text-neutral-500">
                        {project.year}
                    </span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black">
                    {project.title}
                </h1>
                <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-3xl font-light">
                    {project.description}
                </p>
            </header>

            {/* Main Image */}
            <div className="aspect-video w-full rounded-2xl overflow-hidden relative bg-neutral-100 dark:bg-neutral-800">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">Descripción</h2>
                        <div className="prose prose-neutral dark:prose-invert max-w-none">
                            {project.longDescription.split("\n\n").map((paragraph, index) => (
                                <p key={index} className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">Características</h2>
                        <ul className="space-y-3">
                            {project.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 shrink-0" />
                                    <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    {/* Technologies */}
                    <section className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-2xl">
                        <h3 className="text-lg font-bold mb-4">Tecnologías</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 px-3 py-1 rounded-full text-sm font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Links */}
                    <section className="space-y-3">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-6 py-3 rounded-xl font-bold hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors"
                            >
                                <Github size={20} />
                                Ver en GitHub
                            </a>
                        )}
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full border-2 border-neutral-900 dark:border-white px-6 py-3 rounded-xl font-bold hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 transition-colors"
                            >
                                <ExternalLink size={20} />
                                Ver Demo
                            </a>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
}
