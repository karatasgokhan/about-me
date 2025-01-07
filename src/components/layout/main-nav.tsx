"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/articles", label: "Articles" },
  { path: "/sources", label: "Sources" },
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
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-white/80 backdrop-blur-xl border-b border-gray-200/80" />
      <nav className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="relative group">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-lg transform transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                  GK
                </div>
                <div className="absolute inset-0 bg-black/10 rounded-xl transform transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 -z-10" />
              </div>
              <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Gökhan KARATAŞ
              </span>
            </div>
          </Link>
          <div className="flex items-center bg-gray-100/50 rounded-2xl p-1.5">
            {navItems.map((item) => {
              const isActive = getActiveState(item.path);

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className="relative px-6 py-2"
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-white rounded-xl shadow-sm"
                      layoutId="nav-active"
                      transition={{
                        type: "spring",
                        bounce: 0.25,
                        duration: 0.5,
                      }}
                    />
                  )}
                  <span
                    className={cn(
                      "relative z-10 text-sm font-medium transition-colors duration-300",
                      isActive
                        ? "text-gray-900"
                        : "text-gray-600 hover:text-gray-900"
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="w-[180px]" /> {/* Spacer to match logo width */}
        </div>
      </nav>
    </motion.header>
  );
}
