import Link from "next/link";
import type { Dictionary } from "@/content/dictionary";
import { locales, person, type Locale } from "@/content/profile";

export function Masthead({ locale, t }: { locale: Locale; t: Dictionary["masthead"] }) {
  return (
    <header className="flex items-center justify-between gap-6 border-b border-ink px-5 py-4 font-mono text-xs uppercase tracking-wider sm:px-8">
      <p className="font-medium">{person.name}</p>
      <p className="hidden text-mute md:block">
        {t.role} · {t.place}
      </p>
      <nav aria-label={t.language}>
        <ul className="flex gap-1">
          {locales.map((code) => {
            const active = code === locale;
            return (
              <li key={code}>
                <Link
                  href={`/${code}`}
                  hrefLang={code}
                  lang={code}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "bg-ink px-2 py-1 text-paper"
                      : "px-2 py-1 text-mute transition-colors hover:text-ink"
                  }
                >
                  {code}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
