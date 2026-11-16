import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { getDictionary } from "@/content/dictionary";
import { isLocale, locales, person } from "@/content/profile";
import "../globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  variable: "--font-bricolage",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jetbrains",
  display: "swap",
});

type Params = Promise<{ locale: string }>;

// Set NEXT_PUBLIC_SITE_URL in production to get canonical and hreflang links.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = { themeColor: "#f1eee6" };

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { meta } = getDictionary(locale);

  return {
    title: meta.title,
    description: meta.description,
    authors: [{ name: person.name }],
    openGraph: { type: "profile", title: meta.title, description: meta.description, locale },
    ...(siteUrl && {
      metadataBase: new URL(siteUrl),
      alternates: {
        canonical: `/${locale}`,
        languages: Object.fromEntries(locales.map((code) => [code, `/${code}`])),
      },
    }),
  };
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale} className={`${bricolage.variable} ${instrument.variable} ${jetbrains.variable}`}>
      <head>
        {/* Scroll reveals need JS; without it, show everything in its final state. */}
        <noscript>
          <style>{`.reveal-line{opacity:1;transform:none}.bar{transform:none}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
