"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-4 left-4 overflow-hidden rounded-full bg-slate-500 text-slate-100 shadow-lg">
      <ul className="m-1 flex bg-slate-500">
        <li className="relative">
          <Link href="/" className="block px-4 py-2">
            <span className="relative z-10">Homepage</span>
          </Link>
          {pathname === "/" && (
            <motion.div
              className="absolute inset-0 rounded-full bg-primary"
              layoutId="active"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </li>
        <li className="relative">
          <Link href="/editor" className="block px-4 py-2">
            <span className="relative z-10">Editor</span>
          </Link>
          {pathname === "/editor" && (
            <motion.div
              className="absolute inset-0 rounded-full bg-primary"
              layoutId="active"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
