"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ArticleNav() {
  return (
    <motion.nav
      className="fixed top-8 left-8 z-50"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col space-y-2">
        <Link href="/">
          <Button variant="ghost" className="hover:bg-gray-100">
            ← Home
          </Button>
        </Link>
        <Link href="/about">
          <Button variant="ghost" className="hover:bg-gray-100">
            ← About
          </Button>
        </Link>
        <Link href="/articles">
          <Button variant="ghost" className="hover:bg-gray-100">
            ← Articles
          </Button>
        </Link>
      </div>
    </motion.nav>
  );
}
