"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "tr" : "en";
    router.push(pathname.replace(`/${locale}`, `/${newLocale}`));
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="fixed bottom-4 right-4 bg-white/80 backdrop-blur-sm"
    >
      {locale === "en" ? "🇹🇷 TR" : "🇬🇧 EN"}
    </Button>
  );
}
