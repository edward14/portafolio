"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export default function FeaturedProjects() {
    // Show only the first 2-3 projects
    const featuredProjects = projects.slice(0, 3);

    return (
        <section className="py-20 px-4 md:px-8 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos Destacados</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 max-w-xl">
                            Una selección de mis trabajos más recientes, donde aplico las mejores prácticas de desarrollo y diseño.
                        </p>
                    </div>
                    <Link
                        href="/projects"
                        className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium mt-4 md:mt-0"
                    >
                        Ver todos los proyectos <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-neutral-300 dark:border-neutral-700"
                        >
                            <div className="aspect-video relative overflow-hidden bg-neutral-100 dark:bg-neutral-700">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2 block uppercase tracking-wider">
                                    {project.category}
                                </span>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-400 text-sm line-clamp-2 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.slice(0, 3).map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded-md text-neutral-600 dark:text-neutral-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded-md text-neutral-600 dark:text-neutral-300">
                                            +{project.technologies.length - 3}
                                        </span>
                                    )}
                                </div>
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="absolute inset-0 z-10"
                                    aria-label={`Ver proyecto ${project.title}`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                        Ver todos los proyectos <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
