"use client";

import Image from "next/image";
import { socialLinks } from "./lib/config";
import { SiHey } from "react-icons/si";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/Pascal-Yao.jpeg"
          alt="Profile photo"
          className="clip-trapezoid block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={180}
          height={180}
          priority
        />
      </a>
      <h1 className="flex items-center gap-2 mb-8 text-2xl font-medium">
        Hi, I’m 
        <span className="text-4xl font-extrabold">
          Pascal Yao
        </span>
        <SiHey />
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I’m a <span className="underline">Fullstack Web Developer</span> I’m a Fullstack Web Developer passionate about building fast, modern, and user-friendly web applications. I work mainly with
        </p>
        <div className="flex flex-wrap gap-2">
          {['React.js', 'Next.js', 'Node.js', 'TypeScript'].map((tech, i) => (
            <motion.span
              key={tech}
              className="text-red-500 text-lg font-bold mask-b-from-red-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.2 }}
            >
              {tech}
              {i < 3 ? ", " : ""}
            </motion.span>
          ))}
        </div>
        <p>
          to create scalable digital solutions.
        </p>
      </div>
    </section>
  );
}
