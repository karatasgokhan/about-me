"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/articles", label: "Articles" },
];

export function MainNav() {
  const pathname = usePathname();

  const getActiveState = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(path);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16 space-x-8">
          {navItems.map((item) => {
            const isActive = getActiveState(item.path);

            return (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "relative py-2 text-sm font-medium transition-colors hover:text-gray-900",
                  isActive ? "text-gray-900" : "text-gray-500"
                )}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"
                    layoutId="navbar-active"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
