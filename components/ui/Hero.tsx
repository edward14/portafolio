"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  useEffect(() => {
    // Prevent scrolling on the home page
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <section className="relative h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-100 dark:from-neutral-800 to-transparent opacity-50" />

      {/* Hero Text - On mobile: top center, On desktop: absolute left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-20 text-center md:text-left md:absolute md:left-2 lg:left-4 xl:left-8 md:top-[15%] md:max-w-xs lg:max-w-sm xl:max-w-md md:pl-2 lg:pl-4 xl:pl-6 mt-20 md:mt-0"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base md:text-lg lg:text-xl text-neutral-500 dark:text-neutral-400 font-medium mb-2"
        >
          Hola, soy
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight mb-4"
        >
          Edward Echandia
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="space-y-1"
        >
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-neutral-600 dark:text-neutral-300 font-light">
            Profesional en Sistemas
          </p>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-neutral-600 dark:text-neutral-300 font-light">
            & Desarrollo de Software
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-6 text-sm md:text-base text-neutral-400 dark:text-neutral-500 italic"
        >
          Despliega el menú para conocer más
        </motion.p>
      </motion.div>

      {/* Avatar - Centered */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{
          scale: 1,
          opacity: 1,
          y: [0, -10, 0]
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className="relative z-10 flex items-center justify-center pointer-events-none select-none mt-4 md:mt-0"
        style={{ height: "50vh", maxHeight: "50vh" }}
      >
        <div className="relative h-full w-auto md:h-[70vh] md:max-h-[70vh]">
          <Image
            src="/hero-avatar.png"
            alt="Avatar de Edward Echandia"
            width={500}
            height={667}
            className="h-full w-auto object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}



