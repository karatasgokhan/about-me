import { notFound } from "next/navigation";
import { Career } from "@/components/career/Career";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Masthead } from "@/components/Masthead";
import { Skills } from "@/components/Skills";
import { getDictionary } from "@/content/dictionary";
import { careerStart, isLocale } from "@/content/profile";
import { toYM, wholeYearsBetween } from "@/lib/timeline";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getDictionary(locale);
  // The page is statically generated, so "now" is the time of the last build.
  const today = new Date();
  const now = toYM(today);
  const years = wholeYearsBetween(careerStart, now);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-10 focus:bg-ink focus:px-3 focus:py-2 focus:font-mono focus:text-xs focus:text-paper"
      >
        {t.skip}
      </a>
      <Masthead locale={locale} t={t.masthead} />
      <main id="main">
        <Hero locale={locale} years={years} t={t.hero} />
        <Career locale={locale} now={now} t={t.career} />
        <Skills years={years} t={t.skills} />
      </main>
      <Contact year={today.getFullYear()} t={t.contact} />
    </>
  );
}
