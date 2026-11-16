import type { EntryId, Locale } from "./profile";

type EntryCopy = {
  /** Shown as the "request name" in the chart */
  name: string;
  org: string;
  role: string;
  type: string;
  summary: string;
};

type Suite = {
  file: string;
  /** A suite that is still running rather than passed */
  running?: boolean;
  tests: { title: string; where: string }[];
};

export type Dictionary = {
  meta: { title: string; description: string };
  skip: string;
  masthead: { role: string; place: string; language: string };
  hero: {
    statusServer: string;
    statusHydrated: string;
    /** Words of the headline; wrap a word in *asterisks* to emphasise it. */
    headline: string[];
    /** {years} is replaced with whole years since the first job. */
    intro: string;
    diffTitle: string;
    diff: { before: string; after: string }[];
    removed: string;
    added: string;
    facts: string[];
  };
  career: {
    kicker: string;
    heading: string;
    hint: string;
    listLabel: string;
    columns: { name: string; status: string; type: string; time: string };
    ongoing: string;
    pending: string;
    labels: { role: string; org: string; period: string; stack: string };
    more: string;
    entries: Record<EntryId, EntryCopy>;
  };
  skills: {
    kicker: string;
    heading: string;
    body: string;
    suites: Suite[];
    pass: string;
    runs: string;
    summary: { tests: string; passed: string; running: string; time: string; years: string };
  };
  contact: {
    kicker: string;
    heading: string;
    body: string;
    email: string;
    footer: string;
  };
};

const en: Dictionary = {
  meta: {
    title: "Gökhan Karataş, Software Developer",
    description:
      "Software developer focused on the frontend, working across agency, product and enterprise teams since 2018. React, Next.js, NestJS and TypeScript; migrations, server rendering and test automation.",
  },
  skip: "Skip to content",
  masthead: { role: "Software Developer", place: "Türkiye", language: "Language" },
  hero: {
    statusServer: "server-rendered HTML",
    statusHydrated: "hydrated",
    headline: ["I", "make", "frontends", "*faster*,", "and", "harder", "to", "break."],
    intro:
      "Software developer, {years} years in. Frontend first, with NestJS on the backend when a product needs the whole stack. I started on agency sites, built customs software at ATEZ, and now work on Vodafone's web products through Kafein, where I worked on moving a major app from Angular to React.",
    diffTitle: "how I leave a codebase",
    diff: [
      { before: "Angular", after: "React" },
      { before: "client-side rendering", after: "Next.js with SSR" },
      { before: "“it works on my machine”", after: "Jest, Cypress, Puppeteer" },
      { before: "writing every line by hand", after: "pairing with AI tools" },
    ],
    removed: "Removed:",
    added: "Added:",
    facts: ["{years} years of frontend", "3 teams", "MSc Computer Engineering"],
  },
  career: {
    kicker: "01 / Career",
    heading: "The whole career, as a network waterfall.",
    hint: "Select a request to inspect it.",
    listLabel: "Career and education timeline",
    columns: { name: "Name", status: "Status", type: "Type", time: "Time" },
    ongoing: "now",
    pending: "pending",
    labels: { role: "role", org: "at", period: "period", stack: "stack" },
    more: "Full record on LinkedIn",
    entries: {
      bsc: {
        name: "bsc-mis",
        org: "Bilecik Şeyh Edebali Üniversitesi",
        role: "BSc, Management Information Systems",
        type: "degree",
        summary:
          "Where the business side comes from: information systems, plus the computer club and the rock music society.",
      },
      gulenayva: {
        name: "gulenayva",
        org: "Gülenayva İnteraktif Medya Ajansı",
        role: "Frontend Developer",
        type: "digital agency",
        summary:
          "Where I learned the craft. Responsive, cross-browser client sites, CSS animation, and lazy-loaded WebP images to help SEO and speed.",
      },
      msc: {
        name: "msc-computer-engineering",
        org: "İstanbul Ticaret Üniversitesi",
        role: "MSc, Computer Engineering",
        type: "degree",
        summary: "Done alongside full-time work, to put engineering depth under the day job.",
      },
      atez: {
        name: "atez",
        org: "ATEZ Yazılım Teknolojileri",
        role: "Frontend Developer",
        type: "customs software",
        summary:
          "Internal web applications for a company that connects customs authorities, operators and logistics providers. Multi-language interfaces, with UI tests automated in Jest and Cypress.",
      },
      vodafone: {
        name: "vodafone",
        org: "Vodafone, via Kafein Technology Solutions",
        role: "Software Developer",
        type: "telecom",
        summary:
          "Worked on moving a major project from Angular to React and built a new Next.js app on Vodafone's UI framework, with server-side rendering for faster loads and Jest unit tests behind it. I also build tools for Vodafone's teams end to end, with NestJS on the backend.",
      },
    },
  },
  skills: {
    kicker: "02 / Skills",
    heading: "What holds up in production.",
    body: "No skill bars, no percentages. Each line is something I have done on a real product, and the tag says where.",
    suites: [
      {
        file: "migration.spec.ts",
        tests: [{ title: "moves a major Angular app to React", where: "vodafone" }],
      },
      {
        file: "rendering.spec.ts",
        tests: [
          { title: "server-renders with Next.js to cut load times", where: "vodafone" },
          { title: "lazy-loads WebP images", where: "gulenayva" },
        ],
      },
      {
        file: "testing.spec.ts",
        tests: [
          { title: "writes unit tests with Jest", where: "vodafone, atez" },
          { title: "automates UI tests with Cypress and Puppeteer", where: "atez" },
        ],
      },
      {
        file: "interface.spec.ts",
        tests: [
          { title: "styles with styled-components, Tailwind CSS, Sass", where: "all" },
          { title: "builds on Ant Design and Carbon", where: "atez" },
          { title: "ships multi-language products with i18n", where: "atez" },
        ],
      },
      {
        file: "backend.spec.ts",
        tests: [
          { title: "builds APIs with NestJS", where: "vodafone, personal" },
          { title: "ships full-stack products end to end", where: "vodafone, personal" },
        ],
      },
      {
        file: "ai.spec.ts",
        running: true,
        tests: [{ title: "builds with AI tooling", where: "now" }],
      },
    ],
    pass: "PASS",
    runs: "RUNS",
    summary: { tests: "Tests:", passed: "passed", running: "running", time: "Time:", years: "years" },
  },
  contact: {
    kicker: "03 / Response",
    heading: "That's the short version.",
    body: "The full history is on LinkedIn. For anything else, write to me.",
    email: "Email",
    footer: "Built with Next.js. Server-rendered, obviously.",
  },
};

const tr: Dictionary = {
  meta: {
    title: "Gökhan Karataş, Software Developer",
    description:
      "2018'den beri ajans, ürün ve kurumsal ekiplerde çalışan, frontend ağırlıklı yazılım geliştirici. React, Next.js, NestJS ve TypeScript; migrasyon, sunucu tarafı render ve test otomasyonu.",
  },
  skip: "İçeriğe geç",
  masthead: { role: "Software Developer", place: "Türkiye", language: "Dil" },
  hero: {
    statusServer: "sunucudan gelen HTML",
    statusHydrated: "hydrate edildi",
    headline: ["Arayüzleri", "*hızlandırıyor*,", "kırılmalarını", "zorlaştırıyorum."],
    intro:
      "{years} yıldır yazılım geliştiriyorum: önce frontend, ürün uçtan uca gerektirdiğinde backend'de NestJS. Ajans işleriyle başladım, ATEZ'de gümrük yazılımları geliştirdim. Şimdi Kafein üzerinden Vodafone'un web ürünlerinde çalışıyorum; orada büyük bir uygulamayı Angular'dan React'e taşıyan ekipte geliştirme yaptım.",
    diffTitle: "bir kod tabanını nasıl bırakırım",
    diff: [
      { before: "Angular", after: "React" },
      { before: "istemci tarafı render", after: "Next.js ile SSR" },
      { before: "“bende çalışıyor”", after: "Jest, Cypress, Puppeteer" },
      { before: "her satırı elle yazmak", after: "yapay zekâ araçlarıyla çalışmak" },
    ],
    removed: "Çıkarılan:",
    added: "Eklenen:",
    facts: ["{years} yıl frontend", "3 ekip", "Bilgisayar Mühendisliği Yüksek Lisansı"],
  },
  career: {
    kicker: "01 / Kariyer",
    heading: "Tüm kariyer, bir network waterfall'u olarak.",
    hint: "İncelemek için bir istek seç.",
    listLabel: "Kariyer ve eğitim zaman çizelgesi",
    columns: { name: "Ad", status: "Durum", type: "Tür", time: "Süre" },
    ongoing: "şimdi",
    pending: "sürüyor",
    labels: { role: "rol", org: "yer", period: "dönem", stack: "stack" },
    more: "Tüm kayıt LinkedIn'de",
    entries: {
      bsc: {
        name: "bsc-mis",
        org: "Bilecik Şeyh Edebali Üniversitesi",
        role: "Lisans, Yönetim Bilişim Sistemleri",
        type: "derece",
        summary:
          "İş tarafını buradan aldım: bilişim sistemleri, yanında bilgisayar kulübü ve rock müzik topluluğu.",
      },
      gulenayva: {
        name: "gulenayva",
        org: "Gülenayva İnteraktif Medya Ajansı",
        role: "Frontend Developer",
        type: "dijital ajans",
        summary:
          "Zanaatı burada öğrendim. Responsive ve tarayıcılar arası uyumlu müşteri siteleri, CSS animasyonları, SEO ve hız için lazy-load edilen WebP görseller.",
      },
      msc: {
        name: "msc-computer-engineering",
        org: "İstanbul Ticaret Üniversitesi",
        role: "Yüksek Lisans, Bilgisayar Mühendisliği",
        type: "derece",
        summary: "Tam zamanlı çalışırken tamamladım; günlük işin altına mühendislik derinliği koymak için.",
      },
      atez: {
        name: "atez",
        org: "ATEZ Yazılım Teknolojileri",
        role: "Frontend Developer",
        type: "gümrük yazılımı",
        summary:
          "Gümrük idarelerini, operatörleri ve lojistik sağlayıcıları birbirine bağlayan bir şirket için kurum içi web uygulamaları. Çok dilli arayüzler, Jest ve Cypress ile otomatikleşen arayüz testleri.",
      },
      vodafone: {
        name: "vodafone",
        org: "Vodafone, Kafein Technology Solutions üzerinden",
        role: "Software Developer",
        type: "telekom",
        summary:
          "Büyük bir projenin Angular'dan React'e taşınmasında geliştirme yaptım ve Vodafone'un UI framework'ü üzerinde yeni bir Next.js uygulaması geliştirdim: daha hızlı yükleme için SSR, arkasında Jest birim testleri. Ayrıca Vodafone ekiplerinin kullandığı araçları, backend'de NestJS ile uçtan uca geliştiriyorum.",
      },
    },
  },
  skills: {
    kicker: "02 / Yetkinlik",
    heading: "Canlıda sınanmış olanlar.",
    body: "Yetenek çubuğu yok, yüzde yok. Her satır gerçek bir üründe yaptığım bir iş; etiket nerede yaptığımı söylüyor.",
    suites: [
      {
        file: "migration.spec.ts",
        tests: [{ title: "büyük bir Angular uygulamasını React'e taşır", where: "vodafone" }],
      },
      {
        file: "rendering.spec.ts",
        tests: [
          { title: "Next.js ile sunucuda render edip yüklemeyi hızlandırır", where: "vodafone" },
          { title: "WebP görselleri lazy-load eder", where: "gulenayva" },
        ],
      },
      {
        file: "testing.spec.ts",
        tests: [
          { title: "Jest ile birim testleri yazar", where: "vodafone, atez" },
          { title: "arayüz testlerini Cypress ve Puppeteer ile otomatikleştirir", where: "atez" },
        ],
      },
      {
        file: "interface.spec.ts",
        tests: [
          { title: "styled-components, Tailwind CSS ve Sass ile stil yazar", where: "hepsi" },
          { title: "Ant Design ve Carbon üzerine arayüz kurar", where: "atez" },
          { title: "i18n ile çok dilli ürünler çıkarır", where: "atez" },
        ],
      },
      {
        file: "backend.spec.ts",
        tests: [
          { title: "NestJS ile API geliştirir", where: "vodafone, kişisel" },
          { title: "uçtan uca full stack ürün çıkarır", where: "vodafone, kişisel" },
        ],
      },
      {
        file: "ai.spec.ts",
        running: true,
        tests: [{ title: "yapay zekâ araçlarıyla geliştirir", where: "şimdi" }],
      },
    ],
    pass: "PASS",
    runs: "RUNS",
    summary: { tests: "Testler:", passed: "geçti", running: "sürüyor", time: "Süre:", years: "yıl" },
  },
  contact: {
    kicker: "03 / Yanıt",
    heading: "Kısa versiyonu bu.",
    body: "Tüm geçmiş LinkedIn'de. Geri kalan her şey için bana yaz.",
    email: "E-posta",
    footer: "Next.js ile yapıldı. Tabii ki sunucuda render edildi.",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, tr };

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
