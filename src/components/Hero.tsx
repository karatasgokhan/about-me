import type { CSSProperties } from "react";
import type { Dictionary } from "@/content/dictionary";
import { person, type Locale } from "@/content/profile";

const index = (i: number) => ({ "--i": i }) as CSSProperties;

/** "*word*," -> { text: "word", emphasis: true, tail: "," } */
function parseWord(raw: string) {
  const match = raw.match(/^\*(.+)\*(.*)$/);
  return match
    ? { text: match[1], emphasis: true, tail: match[2] }
    : { text: raw, emphasis: false, tail: "" };
}

export function Hero({ locale, years, t }: { locale: Locale; years: number; t: Dictionary["hero"] }) {
  const fill = (text: string) => text.replace("{years}", String(years));

  return (
    <section aria-labelledby="hero-title" className="px-5 pb-16 pt-10 sm:px-8 lg:pb-24 lg:pt-14">
      {/* The page arrives as plain server HTML, then "hydrates" into its type. */}
      <p className="flex items-center gap-2 font-mono text-xs text-mute" aria-hidden="true">
        <span>GET /{locale}</span>
        <span className="text-ink">200</span>
        <span className="status">
          <span className="status-server">○ {t.statusServer}</span>
          <span className="status-hydrated text-plus">● {t.statusHydrated}</span>
        </span>
      </p>

      <h1
        id="hero-title"
        className="display mt-6 max-w-[14ch] text-[clamp(2.5rem,11vw,9.5rem)] font-extrabold leading-[0.9]"
      >
        <span className="sr-only">{person.name}. </span>
        {t.headline.map((raw, i) => {
          const word = parseWord(raw);
          return (
            <span key={i}>
              <span className="word">
                <span style={index(i)}>
                  {word.emphasis ? (
                    <em className="font-serif font-normal tracking-normal">{word.text}</em>
                  ) : (
                    word.text
                  )}
                  {word.tail}
                </span>
              </span>{" "}
            </span>
          );
        })}
      </h1>

      <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-8">
        <p
          className="fade-up max-w-[46ch] text-lg leading-snug sm:text-xl lg:col-span-6"
          style={index(0)}
        >
          {fill(t.intro)}
        </p>

        <figure className="fade-up font-mono text-sm lg:col-span-5 lg:col-start-8" style={index(1)}>
          <figcaption className="text-mute">@@ {t.diffTitle} @@</figcaption>
          <ul className="mt-3 space-y-3">
            {t.diff.map((line) => (
              <li key={line.after}>
                <del className="block bg-minus/10 px-2 py-0.5 text-minus decoration-minus/50">
                  <span className="sr-only">{t.removed} </span>
                  <span aria-hidden="true" className="mr-2 inline-block no-underline">
                    −
                  </span>
                  {line.before}
                </del>
                <ins className="block bg-plus/12 px-2 py-0.5 text-plus">
                  <span className="sr-only">{t.added} </span>
                  <span aria-hidden="true" className="mr-2">
                    +
                  </span>
                  {line.after}
                </ins>
              </li>
            ))}
          </ul>
        </figure>
      </div>

      <ul
        className="fade-up mt-14 flex flex-col gap-x-10 gap-y-2 border-y border-ink py-4 font-mono text-xs uppercase tracking-wider sm:flex-row lg:mt-20"
        style={index(2)}
      >
        {t.facts.map((fact) => (
          <li key={fact}>{fill(fact)}</li>
        ))}
      </ul>
    </section>
  );
}
