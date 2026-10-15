# Marilaura Alvarado Navarro — professional portfolio

A separate portfolio based on the structure of Artem's WEB-CV, with a new visual direction from the supplied reference: a near-black background, locally served ambient gradient video, purple-indigo accents, glass surfaces, and a centered editorial hero. The original WEB-CV is preserved.

Built with Next.js 16.4.1, React 19, TypeScript, and Tailwind CSS 4. No animation libraries. Content comes from the supplied CV; project results are contextualized as reported collaboration outcomes. English, Spanish, and Russian cover the entire page. Language choice is remembered independently of Artem's site.

## Development

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3001. This workspace initially reuses the original project's installed dependencies through a local node_modules junction. A fresh checkout can install independently with npm install. Webpack is selected explicitly to support the shared dependency directory.

## Add photographs

1. Put supplied images in `public/assets/photos/` (prefer optimized WebP or JPEG).
2. Add entries to the `photos` array in `lib/site-config.ts`:

```ts
export const photos = [
  { src: "/assets/photos/portrait.webp", alt: "Marilaura Alvarado Navarro", position: "center 35%" },
  { src: "/assets/photos/photo-02.webp", alt: "Describe the supplied photograph" },
];
```

The first image fills the portrait area, additional photos appear in the gallery strip, and previous/next controls appear when multiple images are available. Until then, the page shows a designed MA monogram and localized photo reservations. Invalid images fall back to the same treatment.

## Content and contacts

- `lib/content.ts`: all EN / ES / RU copy, five roles, education, certificates, project results.
- `lib/site-config.ts`: verified CV contact links, images, asset base path, optional ambient video path.
- `public/assets/Marilaura_Alvarado_Navarro_CV.pdf`: unchanged original CV.
- `components/portfolio.tsx`: sections, navigation, language selection, gallery, direct contact links, copy-email button.
- `app/globals.css`: semantic oklch color tokens and responsive styling.

Contact uses email, telephone, and LinkedIn links. The email link opens the visitor's email application. There is no server mail form or simulated delivery confirmation.

The reference video is stored locally. A localized pause/resume control lets visitors stop the motion. A static gradient remains visible if video playback fails or reduced motion is requested. To replace the video, update AMBIENT_VIDEO in site-config.ts; an empty string disables it. No third-party frontend services are required for the page.

## Build and preview

```sh
npm run typecheck
npm run build
npm run preview
```

The production static export is `out/`. The preview serves it on http://127.0.0.1:3001. Deploy that directory to a static host. Set NEXT_PUBLIC_BASE_PATH before building when hosting under a repository subpath. The tracked `.openai/hosting.json` belongs to this separate private Site; do not replace it with the original portfolio's identity.

Original inspiration: supplied Scalable design prompt. Its example sales metrics and SaaS marketing copy were replaced by the supplied professional facts. CV hyperlinks supply the LinkedIn, portfolio, and GASIGHT prototype targets. Company names indicate work experience and industry collaboration, rather than endorsements.
