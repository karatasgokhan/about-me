# about-me

Single-page About site for Gökhan Karataş, in English (`/en`) and Turkish (`/tr`).

Next.js 15 (App Router, statically generated), React 19, TypeScript, Tailwind CSS v4. No UI or animation libraries: motion is plain CSS plus one `IntersectionObserver`.

## Commands

```bash
yarn dev        # http://localhost:3000
yarn build
yarn lint
yarn typecheck
```

## Where things live

| Path | What |
| --- | --- |
| `src/content/profile.ts` | Facts: dates, stack, contact links |
| `src/content/dictionary.ts` | All copy, in both languages |
| `src/components/Hero.tsx` | Headline, intro, diff |
| `src/components/career/` | Career timeline drawn as a network waterfall |
| `src/components/Skills.tsx` | Skills printed as a test run |
| `src/components/Contact.tsx` | Contact links and footer |
| `src/app/globals.css` | Design tokens and all animations |

Durations ("8 years", the length of the current role's bar) are computed at build time, so rebuild occasionally.

Set `NEXT_PUBLIC_SITE_URL` in production to emit canonical and `hreflang` links.
