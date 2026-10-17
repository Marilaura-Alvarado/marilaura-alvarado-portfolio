export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://marilaura-alvarado-navarro.clevereagle513.chatgpt.site";
export const EMAIL = "Marilaura2001@gmail.com";
export const PHONE = "+50686477992";
export const LINKEDIN = "https://www.linkedin.com/in/marilaura-alvarado";
export const GITHUB = "https://github.com/Marilaura-Alvarado";
export const PROTOTYPE = "https://gasight.figma.site/";
export const PORTFOLIO = "https://drive.google.com/file/d/17E_AWSXgqLyLGFMfspNO3XDIP1cMaAAe/view?pli=1";
export const assetPath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;

export const portrait = {
  src: "/assets/photos/marilaura-portrait.png",
  alt: "Marilaura Alvarado Navarro",
};

// Locally served videos from the supplied Plety reference.
export const VIDEO_SOURCES = {
  hero: "/assets/hero-plety.mp4",
  delivery: "/assets/ambient-gradient.mp4",
  analytics: "/assets/analytics-plety.mp4",
};
