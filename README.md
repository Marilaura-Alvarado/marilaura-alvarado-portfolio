# Marilaura Alvarado Navarro — professional portfolio

A separate portfolio based on Artem's WEB-CV content structure and the supplied Plety design reference: pure black, white primary buttons, an unblurred full-screen video hero, a masked infinite logo marquee, alternating video-backed feature panels, a five-question transparent accordion, and a video footer with four link columns. The original WEB-CV is preserved.

Built with Next.js 16.4.1, React 19, TypeScript, and Tailwind CSS 4. No animation libraries. Content comes from the supplied CV; project results are contextualized as reported collaboration outcomes. English, Spanish, and Russian cover the entire page. Language choice is remembered independently of Artem's site.

## Development

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3001. This workspace initially reuses the original project's installed dependencies through a local node_modules junction. A fresh checkout can install independently with npm install. Webpack is selected explicitly to support the shared dependency directory.

## Portrait

The profile displays the supplied photograph from `public/assets/photos/marilaura-portrait.png` in a responsive square frame. To replace it, update the `portrait` entry in `lib/site-config.ts`:

```ts
export const portrait = {
  src: "/assets/photos/marilaura-portrait.png",
  alt: "Marilaura Alvarado Navarro",
};
```

The profile uses one image without thumbnails or carousel controls.

## Content and contacts

- `lib/content.ts`: all EN / ES / RU copy, five roles, education, certificates, project results.
- `lib/design-copy.ts`: localized copy for the Plety composition and its five FAQs.
- `lib/site-config.ts`: verified CV contact links, images, asset base path, three local reference video paths.
- `public/assets/Marilaura_Alvarado_Navarro_CV.pdf`: unchanged original CV.
- `components/portfolio.tsx`: sections, navigation, language selection, portrait, direct contact links, copy-email button.
- `app/globals.css`: reference styling, responsive rules, marquee, scroll reveals, FAQ transitions.

Contact uses email, telephone, and LinkedIn links. The email link opens the visitor's email application. There is no server mail form or simulated delivery confirmation.

All three reference videos are stored locally. The hero and footer use the same orange-and-black video; feature panels use their specified purple and blue videos. A localized footer pause/resume control stops all videos and the marquee. Static gradients remain if video playback fails or reduced motion is requested. Change VIDEO_SOURCES in site-config.ts to replace videos. No third-party frontend services or animation libraries are required. FadeInUp uses IntersectionObserver, a 40px upward reveal, and a 1000ms CSS transition. The marquee repeats five experience wordmarks four times and translates by exactly one group over 30 seconds.

## GitHub Pages

Public site: https://marilaura-alvarado.github.io/marilaura-alvarado-portfolio/

The workflow `.github/workflows/nextjs.yml` builds and deploys pushes to `main`. In repository **Settings → Pages**, keep **Source: GitHub Actions**. No custom domain or repository secrets are needed.

```sh
npm ci
npm run build:pages
```

The Pages build derives the repository subpath and public URL from GITHUB_REPOSITORY, with this repository as the local default. NEXT_PUBLIC_BASE_PATH and NEXT_PUBLIC_SITE_URL may override those values. The regular `npm run build` still builds for the private Sites URL at the domain root.

To preview a Pages build locally in PowerShell:

```powershell
$env:NEXT_PUBLIC_BASE_PATH = "/marilaura-alvarado-portfolio"
npm run preview
```

Open http://127.0.0.1:3001/marilaura-alvarado-portfolio/ . Clear that environment variable before previewing a root build.

## Standard build and preview

```sh
npm run typecheck
npm run build
npm run preview
```

The production static export is `out/`. The preview serves it on http://127.0.0.1:3001. Deploy that directory to a static host. Set NEXT_PUBLIC_BASE_PATH before building when hosting under a repository subpath. The tracked `.openai/hosting.json` belongs to this separate private Site; do not replace it with the original portfolio's identity.

Design reference: the supplied Plety prompt. The personal profile, photo reservations, career history, and education supplement its main composition. Its fictional product copy and links are replaced by professional facts and verified CV hyperlinks. Interface panels are illustrations; company names indicate work experience and industry collaboration, rather than endorsements.
