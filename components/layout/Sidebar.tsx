"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = [
    { label: "Inicio", href: "/" },
    { label: "Sobre mí", href: "/about" },
    { label: "Proyectos", href: "/projects" },
    { label: "Servicios", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "/contact" },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
    const pathname = usePathname();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-40 bg-black/20 dark:bg-black/40 backdrop-blur-sm"
                    />

                    {/* Sidebar Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
                        className="fixed right-0 top-0 z-50 h-full w-full md:w-[50%] bg-neutral-50 dark:bg-neutral-900 shadow-2xl overflow-y-auto"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-8 right-8 p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
                        >
                            <X className="w-8 h-8 text-black dark:text-white" />
                        </button>

                        {/* Menu Items */}
                        <nav className="flex flex-col justify-center h-full px-12 md:px-24 space-y-8">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={onClose}
                                    className="group flex items-baseline space-x-6"
                                >
                                    <span
                                        className={clsx(
                                            "text-4xl md:text-6xl font-black tracking-tight text-black dark:text-white transition-opacity duration-300 group-hover:opacity-70",
                                            pathname === item.href ? "opacity-100" : "opacity-90"
                                        )}
                                    >
                                        {item.label}
                                    </span>
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

