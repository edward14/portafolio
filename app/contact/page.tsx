"use client";

import { useState } from "react";
import { Send, Twitter, Linkedin, Instagram, Github, CheckCircle, AlertCircle } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<FormStatus>("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            // Using Formspree - Replace YOUR_FORM_ID with your actual Formspree form ID
            const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <div className="space-y-12 pb-20">
            <header>
                <h1 className="text-5xl md:text-8xl font-black mb-6">Contacto</h1>
                <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl font-light">
                    ¿Tienes un proyecto en mente? Hablemos.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {status === "success" ? (
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-4">
                        <CheckCircle className="w-16 h-16 text-emerald-500" />
                        <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">¡Mensaje enviado!</h3>
                        <p className="text-emerald-600 dark:text-emerald-500">
                            Gracias por contactarme. Te responderé lo antes posible.
                        </p>
                        <button
                            onClick={() => setStatus("idle")}
                            className="mt-4 text-emerald-700 dark:text-emerald-400 underline hover:no-underline"
                        >
                            Enviar otro mensaje
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {status === "error" && (
                            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg flex items-center gap-3 text-red-700 dark:text-red-400">
                                <AlertCircle size={20} />
                                <span>Hubo un error. Por favor intenta de nuevo.</span>
                            </div>
                        )}

                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-bold uppercase tracking-wide">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-neutral-100 dark:bg-neutral-800 border-none rounded-lg p-4 focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all"
                                placeholder="Tu nombre"
                                required
                                disabled={status === "submitting"}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-bold uppercase tracking-wide">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-neutral-100 dark:bg-neutral-800 border-none rounded-lg p-4 focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all"
                                placeholder="tu@email.com"
                                required
                                disabled={status === "submitting"}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-bold uppercase tracking-wide">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full bg-neutral-100 dark:bg-neutral-800 border-none rounded-lg p-4 focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all resize-none"
                                placeholder="Cuéntame sobre tu proyecto..."
                                required
                                disabled={status === "submitting"}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "submitting"}
                            className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-lg font-bold flex items-center gap-2 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === "submitting" ? (
                                <>
                                    <span className="animate-spin">⏳</span>
                                    Enviando...
                                </>
                            ) : (
                                <>
                                    Enviar Mensaje
                                    <Send size={18} />
                                </>
                            )}
                        </button>
                    </form>
                )}

                <div className="bg-neutral-900 dark:bg-neutral-800 text-white p-8 rounded-2xl flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
                        <p className="text-neutral-400 mb-8">
                            También puedes encontrarme en mis redes sociales o enviarme un correo directo.
                        </p>

                        <div className="space-y-4">
                            <p className="font-mono text-lg">edwardandrese14@gmail.com</p>
                            <p className="font-mono text-lg"></p>
                        </div>
                    </div>

                    <div className="mt-12">
                        <p className="text-sm text-neutral-500 uppercase tracking-widest mb-4">Redes Sociales</p>
                        <div className="flex gap-4">
                            <a href="https://twitter.com/tu_usuario" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                                <Twitter size={18} />
                            </a>
                            <a href="https://linkedin.com/in/tu_usuario" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://instagram.com/tu_usuario" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                                <Instagram size={18} />
                            </a>
                            <a href="https://github.com/tu_usuario" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                                <Github size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

