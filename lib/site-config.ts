export const SITE_URL = "https://marilaura-alvarado-navarro.clevereagle513.chatgpt.site";
export const EMAIL = "Marilaura2001@gmail.com";
export const PHONE = "+50686477992";
export const LINKEDIN = "https://www.linkedin.com/in/marilaura-alvarado";
export const PROTOTYPE = "https://gasight.figma.site/";
export const PORTFOLIO = "https://drive.google.com/file/d/17E_AWSXgqLyLGFMfspNO3XDIP1cMaAAe/view?pli=1";
export const assetPath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;

// Add supplied photos here. Paths are relative to public/, never remote placeholders.
export const photos: { src: string; alt: string; position?: string }[] = [];

// The reference video is optional. An empty URL uses the static gradient fallback.
export const AMBIENT_VIDEO = "/assets/ambient-gradient.mp4";
