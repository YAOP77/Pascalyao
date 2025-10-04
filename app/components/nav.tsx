"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitch } from "./theme-switch";
// import { metaData } from "../lib/config";

const navItems = {
  "/blog": { name: "About Me" },
  "/projects": { name: "Projects" },
  "/stacks": { name: "Skills/Stacks" },
};


export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center text-3xl font-semibold">
            <img src="/Logo-PY.png" alt="Logo" className="w-12 h-10 mr-2" style={{ display: 'inline-block' }} title="Yao Pascal" />
            Portfolio
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = pathname === path;
            return (
              <Link
                key={path}
                href={path}
                className={`transition-all hover:text-red-500 dark:hover:text-neutral-200 flex align-middle relative ${isActive ? 'border-b-10 border-red-600 mask-b-from-red-500' : ''}`}
              >
                {name}
              </Link>
            );
          })}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
