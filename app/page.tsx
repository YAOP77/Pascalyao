import Image from "next/image";
import { socialLinks } from "./lib/config";
import { SiHey } from "react-icons/si";

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
        <span className="text-4xl font-extrabold mask-linear-from-neutral-600">
          Pascal Yao
        </span>
          <SiHey />
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I’m a <span className="underline">Fullstack Web Developer</span> passionate about building fast, modern, and user-friendly web applications.  
          I work mainly with <span className="text-neutral-500"> React.js, Next.js, Node.js, and TypeScript </span>to create scalable digital solutions.  
          {/* [View My Projects]   [Get in Touch] */}
        </p>
      </div>
    </section>
  );
}
