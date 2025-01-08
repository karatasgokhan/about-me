"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { memo, useCallback, useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/articles", label: "Articles" },
  { path: "/books", label: "Books" },
  { path: "/projects", label: "Projects" },
  { path: "/travels", label: "Travels" },
  { path: "/sources", label: "Sources" },
] as const;

const Logo = memo(function Logo() {
  const locale = useLocale();

  return (
    <Link href={`/${locale}`} className="relative group">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-lg transform transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
            GK
          </div>
          <div className="absolute inset-0 bg-black/10 rounded-xl transform transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 -z-10" />
        </div>
        <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 hidden sm:inline">
          Gökhan KARATAŞ
        </span>
      </div>
    </Link>
  );
});

const NavItem = memo(function NavItem({
  path,
  label,
  isActive,
  isMobile,
  onClick,
  locale,
}: {
  path: string;
  label: string;
  isActive: boolean;
  isMobile?: boolean;
  onClick?: () => void;
  locale: string;
}) {
  const fullPath = path === "/" ? `/${locale}` : `/${locale}${path}`;

  return (
    <Link
      href={fullPath}
      className={cn(
        "relative px-6 py-2",
        isMobile && "w-full text-center py-3 hover:bg-gray-50"
      )}
      onClick={onClick}
    >
      {isActive && (
        <motion.div
          className={cn(
            "absolute inset-0 bg-white rounded-xl shadow-sm",
            isMobile && "bg-gray-100"
          )}
          layoutId={isMobile ? undefined : "nav-active"}
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
          isActive ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
        )}
      >
        {label}
      </span>
    </Link>
  );
});

export const MainNav = memo(function MainNav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const locale = useLocale();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const getActiveState = useCallback(
    (path: string) => {
      const cleanPathname = pathname.replace(`/${locale}`, "");
      if (path === "/") {
        return cleanPathname === "";
      }
      return cleanPathname.startsWith(path);
    },
    [pathname, locale]
  );

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
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center bg-gray-100/50 rounded-2xl p-1.5">
            {navItems.map((item) => (
              <NavItem
                key={item.path}
                path={item.path}
                label={item.label}
                isActive={getActiveState(item.path)}
                locale={locale}
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>

          <div className="hidden md:block w-[180px]" />
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200/80 md:hidden shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="flex flex-col items-stretch py-2">
              {navItems.map((item) => (
                <NavItem
                  key={item.path}
                  path={item.path}
                  label={item.label}
                  isActive={getActiveState(item.path)}
                  isMobile
                  onClick={() => setIsMenuOpen(false)}
                  locale={locale}
                />
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
});
