"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 mt-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Brand / Copyright */}
                <div className="text-center md:text-left">
                    <p className="font-bold text-lg tracking-tight">Edward Echandia</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                        © {currentYear}. Construido con Next.js y Tailwind.
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-6">
                    <a href="https://github.com/edward14" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors">
                        <Github size={20} />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400 transition-colors">
                        <Linkedin size={20} />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-sky-500 dark:text-neutral-400 dark:hover:text-sky-400 transition-colors">
                        <Twitter size={20} />
                        <span className="sr-only">Twitter</span>
                    </a>
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-pink-600 dark:text-neutral-400 dark:hover:text-pink-500 transition-colors">
                        <Instagram size={20} />
                        <span className="sr-only">Instagram</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
