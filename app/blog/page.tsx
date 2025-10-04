
"use client";
import { motion } from "framer-motion";
// import Link from "next/link";
// import { formatDate, getBlogPosts } from "app/lib/posts";

// export const metadata = {
//   title: "Blog",
//   description: "Nextfolio Blog",
// };

export default function BlogPosts() {
  // let allBlogs = getBlogPosts();

  return (
    <section>
      {/* <h1 className="mb-8 text-2xl font-medium">About Me</h1> */}
      <div>
        <p>
          I’m passionate about building robust, clean, and scalable project architectures that stand the test of time.  
          With {" "}
          {["React.js", "Next.js", "Node.js", "TypeScript"].map((tech, i) => (
            <motion.span
              key={tech}
              className="text-red-500 text-lg font-bold mask-b-from-red-500"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.2 }}
            >
              {tech}
              {i < 3 ? ", " : ""}
            </motion.span>
          ))}
          , I focus on creating modern web applications that combine performance, usability, and long-term maintainability.  
          {/* With <span className="text-neutral-500"> React.js, Next.js, Node.js, and TypeScript</span>, I focus on creating modern web applications that combine performance, usability, and long-term maintainability.   */}
          <br />
          <br />
          I’m always exploring new technologies and taking on challenges that help me grow as a developer.
        </p>
        {/* ... */}
      </div>
    </section>
  );
}