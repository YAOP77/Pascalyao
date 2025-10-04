"use client";
import { motion } from "framer-motion";

export default function AnimatedProject({ title, delay = 0 }: { title: string; delay?: number }) {
  return (
    <h2 className="text-xl font-bold">
      <motion.span
        className="span text-red-500 mask-b-from-red-500"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay }}
      >
        {title}
      </motion.span>
    </h2>
  );
}
