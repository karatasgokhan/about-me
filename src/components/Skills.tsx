import type { CSSProperties } from "react";
import type { Dictionary } from "@/content/dictionary";
import { Reveal } from "./Reveal";

const index = (i: number) => ({ "--i": i }) as CSSProperties;

export function Skills({ years, t }: { years: number; t: Dictionary["skills"] }) {
  const passed = t.suites.filter((s) => !s.running).reduce((sum, s) => sum + s.tests.length, 0);
  const running = t.suites.filter((s) => s.running).reduce((sum, s) => sum + s.tests.length, 0);

  // Each printed line gets the next index, so the output "runs" top to bottom.
  let line = 0;

  return (
    <section
      aria-labelledby="skills-title"
      className="grid gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:py-24"
    >
      <div className="lg:col-span-5">
        <p className="font-mono text-xs uppercase tracking-wider text-mute">{t.kicker}</p>
        <h2
          id="skills-title"
          className="display mt-4 max-w-[12ch] text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[0.95]"
        >
          {t.heading}
        </h2>
        <p className="mt-6 max-w-[38ch] text-lg leading-snug">{t.body}</p>
      </div>

      <Reveal className="border border-ink p-4 font-mono text-[0.8125rem] leading-relaxed sm:p-6 lg:col-span-7">
        <p className="reveal-line text-mute" style={index(line++)}>
          $ jest gokhan
        </p>

        {t.suites.map((suite) => (
          <div key={suite.file} className="mt-5">
            <p className="reveal-line" style={index(line++)}>
              <span
                className={
                  suite.running
                    ? "bg-signal px-1.5 font-bold text-ink"
                    : "bg-plus px-1.5 font-bold text-paper"
                }
              >
                {suite.running ? t.runs : t.pass}
              </span>{" "}
              {suite.file}
            </p>
            <ul className="mt-1">
              {suite.tests.map((test) => (
                <li
                  key={test.title}
                  className="reveal-line flex items-baseline justify-between gap-4 pl-3"
                  style={index(line++)}
                >
                  <span>
                    <span
                      aria-hidden="true"
                      className={suite.running ? "blink text-minus" : "text-plus"}
                    >
                      {suite.running ? "○" : "✓"}
                    </span>{" "}
                    {test.title}
                  </span>
                  <span className="shrink-0 text-right text-mute">{test.where}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <p className="reveal-line mt-6 border-t border-ink/20 pt-4" style={index(line++)}>
          <span className="text-mute">{t.summary.tests}</span>{" "}
          <span className="font-bold text-plus">
            {passed} {t.summary.passed}
          </span>
          , {running} {t.summary.running}
          <br />
          <span className="text-mute">{t.summary.time}</span> {years} {t.summary.years}
        </p>
      </Reveal>
    </section>
  );
}
