"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center text-white"
    >

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.2,
        }}
        className="rounded-3xl bg-black/30 px-8 py-6 backdrop-blur-md"
      >

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className="max-w-4xl text-3xl font-bold tracking-tight md:text-5xl"
        >
          Apartament w kultowym falowcu na Przymorzu
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="mt-4 text-base text-neutral-200 md:text-lg"
        >
          Gdańsk • Przymorze • Falowiec
        </motion.p>

      </motion.div>

    </motion.div>

  );
}