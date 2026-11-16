import type { Dictionary } from "@/content/dictionary";
import { axisStartYear, entries, person, type Locale } from "@/content/profile";
import { formatPeriod, span } from "@/lib/timeline";
import { Reveal } from "../Reveal";
import { Waterfall, type WaterfallRow } from "./Waterfall";

export function Career({ locale, now, t }: { locale: Locale; now: string; t: Dictionary["career"] }) {
  const axisEndYear = Number(now.slice(0, 4)) + 1;
  const years = Array.from({ length: axisEndYear - axisStartYear }, (_, i) => axisStartYear + i);

  const rows: WaterfallRow[] = entries.map((entry) => {
    const copy = t.entries[entry.id];
    return {
      ...copy,
      id: entry.id,
      kind: entry.kind,
      stack: entry.stack,
      pending: entry.end === null,
      status: entry.end === null ? t.pending : "200",
      period: formatPeriod(locale, entry.start, entry.end, t.ongoing, entry.yearsOnly),
      ...span(entry.start, entry.end ?? now, axisStartYear, axisEndYear),
    };
  });

  return (
    <section aria-labelledby="career-title" className="bg-ink px-5 py-16 text-paper sm:px-8 lg:py-24">
      <p className="font-mono text-xs uppercase tracking-wider text-dim">{t.kicker}</p>
      <h2
        id="career-title"
        className="display mt-4 max-w-[18ch] text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[0.95]"
      >
        {t.heading}
      </h2>
      <p className="mt-4 font-mono text-xs text-dim">{t.hint}</p>

      <Reveal className="mt-10 lg:mt-14">
        <Waterfall
          rows={rows}
          years={years}
          defaultId="vodafone"
          labels={{ list: t.listLabel, columns: t.columns, ...t.labels }}
        />
      </Reveal>

      <p className="mt-12 px-3 font-mono text-sm">
        <a
          href={person.links.linkedin}
          className="big-link underline decoration-signal decoration-2 underline-offset-4"
        >
          {t.more}{" "}
          <span aria-hidden="true" className="arrow">
            ↗
          </span>
        </a>
      </p>
    </section>
  );
}
