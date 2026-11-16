import type { Dictionary } from "@/content/dictionary";
import { person } from "@/content/profile";

export function Contact({ year, t }: { year: number; t: Dictionary["contact"] }) {
  const { email, linkedin, github } = person.links;
  const links = [
    { label: t.email, href: email && `mailto:${email}`, detail: email },
    { label: "LinkedIn", href: linkedin, detail: "in/gökhan-karataş" },
    { label: "GitHub", href: github, detail: github.replace("https://github.com/", "@") },
  ].filter((link) => link.href);

  return (
    <footer className="bg-signal px-5 pb-6 pt-16 text-ink sm:px-8 lg:pt-24">
      <section aria-labelledby="contact-title">
        <p className="font-mono text-xs uppercase tracking-wider">
          {t.kicker} <span aria-hidden="true">· HTTP/1.1 200 OK</span>
        </p>
        <h2
          id="contact-title"
          className="display mt-4 text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[0.95]"
        >
          {t.heading}
        </h2>
        <p className="mt-4 max-w-[40ch] text-lg leading-snug">{t.body}</p>

        <ul className="mt-12 border-t border-ink">
          {links.map((link) => (
            <li key={link.label} className="border-b border-ink">
              <a
                href={link.href}
                className="big-link flex flex-wrap items-baseline justify-between gap-x-6 py-4 lg:py-5"
              >
                <span className="display text-[clamp(2.5rem,9vw,7rem)] font-extrabold leading-none">
                  {link.label}{" "}
                  <span aria-hidden="true" className="arrow font-normal">
                    ↗
                  </span>
                </span>
                <span className="break-all font-mono text-xs sm:text-sm">{link.detail}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-16 flex flex-col justify-between gap-2 font-mono text-xs sm:flex-row">
        <span>
          © {year} {person.name}
        </span>
        <span>{t.footer}</span>
      </p>
    </footer>
  );
}
