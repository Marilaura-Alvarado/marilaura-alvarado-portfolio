"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowDownToLine, ArrowUpRight, AudioLines, Check, ChevronDown, ChevronLeft, ChevronRight, CircleCheck, Copy, FileText, Layers3, Menu, Pause, Play, Plus, ScanLine, Sparkles, X } from "lucide-react";
import { content, type Language } from "@/lib/content";
import { designCopy } from "@/lib/design-copy";
import { assetPath, EMAIL, GITHUB, LINKEDIN, PHONE, PORTFOLIO, PROTOTYPE, photos, VIDEO_SOURCES as videoSources } from "@/lib/site-config";

const locales: Language[] = ["en", "es", "ru"];
const navigation = ["about", "features", "faq", "contact"];

function SocialLinks() {
  return <div className="nav-social-links"><a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M5.3 7.4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM3.7 9h3.2v12H3.7V9Zm5.6 0h3.1v1.7h.1A3.5 3.5 0 0 1 15.7 9c3.4 0 4 2.2 4 5.1V21h-3.2v-6.1c0-1.5 0-3.3-2-3.3s-2.3 1.5-2.3 3.2V21H9.3V9Z"/></svg></a><a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub · Marilaura-Alvarado"><svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 .8a11.2 11.2 0 0 0-3.5 21.8c.6.1.8-.2.8-.5v-2.1c-3.2.7-3.8-1.4-3.8-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.6 0-1.2.4-2.2 1.2-3-.1-.3-.5-1.5.1-3 0 0 1-.3 3.1 1.1a10.7 10.7 0 0 1 5.6 0C17.3 4.9 18.3 5.2 18.3 5.2c.6 1.5.2 2.7.1 3 .8.8 1.2 1.8 1.2 3 0 4.3-2.7 5.3-5.3 5.6.4.4.8 1.1.8 2.2v3.1c0 .3.2.6.8.5A11.2 11.2 0 0 0 12 .8Z"/></svg></a></div>;
}

function Logo({ small = false, onNavigate }: { small?: boolean; onNavigate?: () => void }) {
  return <a className={`brand ${small ? "brand-small" : ""}`} href="#about" aria-label="Marilaura Alvarado Navarro" onClick={onNavigate}><svg viewBox="0 0 36 36" fill="none" aria-hidden="true"><path d="m18 3 13 7.5v15L18 33 5 25.5v-15L18 3Z" stroke="currentColor" strokeWidth="1.5"/><path d="m5 10.5 13 7.7 13-7.7M18 18.2V33M11.5 6.7l13 7.6v7.5L18 25.6l-6.5-3.8v-7.5L24.5 6.7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg><span>Marilaura<span className="brand-last"> Alvarado</span></span></a>;
}

function FadeInUp({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current || !window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setVisible(true); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.08 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`fade-in-up ${visible ? "is-visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

function VideoBackdrop({ src, enabled, paused, variant }: { src: string; enabled: boolean; paused: boolean; variant: "hero" | "feature" | "footer" }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    if (!ref.current || !enabled || failed) return;
    if (paused) ref.current.pause();
    else ref.current.play().catch(() => setFailed(true));
  }, [enabled, paused, failed]);
  return <div className={`video-backdrop video-${variant}`} aria-hidden="true">{enabled && !failed && <video ref={ref} autoPlay muted loop playsInline preload={variant === "hero" ? "auto" : "metadata"} onError={() => setFailed(true)}><source src={assetPath(src)} type="video/mp4" onError={() => setFailed(true)}/></video>}<div className="video-overlay"/></div>;
}

function BrandSymbol({ index }: { index: number }) {
  return <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">{index === 0 ? <><path d="m4 23 8-15 5 9 4-9 7 15M8 23h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></> : index === 1 ? <><path d="M8 26V13h6v13m4 0V7h6v19M5 26h22" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M20 3c4 4-3 5 0 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></> : index === 2 ? <><rect x="5" y="5" width="22" height="22" rx="6" stroke="currentColor" strokeWidth="2"/><path d="m11 21 10-10M11 11h10v10" stroke="currentColor" strokeWidth="2"/></> : index === 3 ? <><path d="M5 7h22v5H19v15h-6V12H5V7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></> : <><path d="M4 25h24M7 25V13m6 12V13m6 12V13m6 12V13M4 10l12-6 12 6H4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></>}</svg>;
}

function PhotoGallery({ lang }: { lang: Language }) {
  const t = content[lang];
  const [selected, setSelected] = useState(0);
  const [failed, setFailed] = useState<string[]>([]);
  const available = photos.filter(photo => !failed.includes(photo.src));
  const current = available[selected % Math.max(available.length, 1)];
  return <div className="photo-gallery">
    <div className="photo-main">{current ? <img src={assetPath(current.src)} alt={current.alt} style={{ objectPosition: current.position || "center" }} loading="lazy" onError={() => setFailed(old => [...old, current.src])}/> : <div className="photo-reservation" role="img" aria-label={t.ui.portraitLabel}><ScanLine size={22}/><span className="photo-monogram">MA</span><span>{t.ui.portraitNote}</span></div>}{available.length > 1 && <div className="photo-controls"><button aria-label={lang === "ru" ? "Предыдущее фото" : lang === "es" ? "Foto anterior" : "Previous photo"} onClick={() => setSelected(old => (old - 1 + available.length) % available.length)}><ChevronLeft size={16}/></button><button aria-label={lang === "ru" ? "Следующее фото" : lang === "es" ? "Siguiente foto" : "Next photo"} onClick={() => setSelected(old => (old + 1) % available.length)}><ChevronRight size={16}/></button></div>}</div>
    <div className="photo-thumbnails" aria-label={t.ui.galleryLabel}>{[1, 2, 3].map(index => { const photo = available[index]; return photo ? <button className="photo-thumb" key={photo.src} onClick={() => setSelected(index)} aria-label={photo.alt} aria-pressed={selected === index}><img src={assetPath(photo.src)} alt={photo.alt} loading="lazy" onError={() => setFailed(old => [...old, photo.src])}/></button> : <div className="photo-thumb photo-thumb-empty" key={index}><ScanLine size={13}/><span>{t.ui.galleryNote}</span></div>; })}</div>
  </div>;
}

function FAQ({ lang }: { lang: Language }) {
  const [opened, setOpened] = useState<number | null>(null);
  const d = designCopy[lang];
  return <section id="faq" className="mx-auto max-w-3xl px-6 py-32"><FadeInUp><h2 className="mb-12 text-center text-4xl font-semibold tracking-tight md:text-5xl">{d.faqTitle}</h2><div className="faq-container border border-white/10 rounded-xl bg-transparent">{d.faq.map((item, index) => <div className="faq-item" key={index}><h3><button className="faq-question" aria-expanded={opened === index} aria-controls={`faq-answer-${index}`} onClick={() => setOpened(old => old === index ? null : index)}><span>{item.question}</span><Plus size={20} className={opened === index ? "faq-plus is-open" : "faq-plus"}/></button></h3><div id={`faq-answer-${index}`} className={opened === index ? "faq-answer is-open" : "faq-answer"} inert={opened !== index} aria-hidden={opened !== index}><div><p>{item.answer}</p></div></div></div>)}</div></FadeInUp></section>;
}

export function Portfolio() {
  const [lang, setLang] = useState<Language>("en");
  const [ready, setReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [motionEnabled, setMotionEnabled] = useState(false);
  const [paused, setPaused] = useState(false);
  const [copied, setCopied] = useState<"idle" | "copied" | "failed">("idle");
  const menuButton = useRef<HTMLButtonElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const t = content[lang];
  const d = designCopy[lang];

  useEffect(() => {
    try { const saved = localStorage.getItem("marilaura-language"); if (locales.includes(saved as Language)) setLang(saved as Language); } catch { /* Optional browser storage. */ }
    setReady(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotion = () => setMotionEnabled(!query.matches);
    onScroll(); onMotion();
    window.addEventListener("scroll", onScroll, { passive: true });
    query.addEventListener("change", onMotion);
    return () => { window.removeEventListener("scroll", onScroll); query.removeEventListener("change", onMotion); if (timer.current) clearTimeout(timer.current); };
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = lang;
    try { localStorage.setItem("marilaura-language", lang); } catch { /* Optional browser storage. */ }
    setCopied("idle");
  }, [lang, ready]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") { setMenuOpen(false); menuButton.current?.focus(); } };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  async function copyEmail() {
    try { await navigator.clipboard.writeText(EMAIL); setCopied("copied"); } catch { setCopied("failed"); }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied("idle"), 5000);
  }

  return <div className={`portfolio-page bg-black text-white ${paused ? "motion-paused" : ""}`}>
    <a href="#main" className="skip-link">{t.ui.skip}</a>
    <header className={`site-nav fixed inset-x-0 top-0 z-50 ${scrolled || menuOpen ? "is-scrolled" : ""}`}>
      <div className="nav-inner mx-auto max-w-7xl px-6"><Logo onNavigate={() => setMenuOpen(false)}/><nav className="desktop-nav" aria-label={t.ui.menuOpen}>{navigation.map((id, index) => <a key={id} href={`#${id}`}>{d.nav[index]}</a>)}</nav><div className="nav-actions"><div className="language-switch" role="group" aria-label={t.ui.languageLabel}>{locales.map(locale => <button key={locale} lang={locale} aria-pressed={lang === locale} disabled={!ready} onClick={() => setLang(locale)}>{locale.toUpperCase()}</button>)}</div><SocialLinks/><a className="nav-cta rounded-full border border-white/5 bg-[#1F1F22] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#2A2A2D]" href="#contact">{d.primary}</a><button ref={menuButton} className="menu-toggle" aria-label={menuOpen ? t.ui.menuClose : t.ui.menuOpen} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(old => !old)}>{menuOpen ? <X size={23}/> : <Menu size={23}/>}</button></div></div>
      <nav id="mobile-menu" className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen} inert={!menuOpen} aria-label={t.ui.menuOpen}><div>{navigation.map((id, index) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{d.nav[index]}<ArrowUpRight size={16}/></a>)}</div></nav>
    </header>

    <main id="main">
      <section id="about" className="hero relative z-0 flex min-h-screen flex-col items-center justify-center pt-32 pb-20">
        <VideoBackdrop src={videoSources.hero} enabled={motionEnabled} paused={paused} variant="hero"/>
        <FadeInUp className="hero-content w-full px-6 text-center"><div className="hero-badge mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300 backdrop-blur-sm"><Sparkles size={13}/>{d.badge}</div><h1 className="mb-6 text-center text-5xl font-medium tracking-tight md:text-7xl">{d.heroLine1}<br/>{d.heroLine2} <span className="font-serif font-normal italic">{d.heroItalic}</span></h1><p className="hero-description mx-auto max-w-2xl text-center text-[16px] text-gray-400">{d.heroDescription}</p><div className="hero-buttons mt-8 flex flex-wrap justify-center gap-3"><a className="button button-white" href="#contact">{d.primary}<ArrowUpRight size={17}/></a><a className="button button-dark" href="#features">{d.secondary}</a></div></FadeInUp>
        <FadeInUp className="marquee-section mt-24 w-full" delay={100}><p className="mb-8 text-center text-sm font-medium text-gray-500">{d.marqueeLabel}</p><div className="marquee-mask"><div className="marquee-track">{[0, 1, 2, 3].map(copy => <div className="marquee-group" key={copy} aria-hidden={copy !== 0}>{["Maxim Technology", "Gazprom", "Intelmecsa", "Tbank", "SPbU"].map((company, index) => <div className="marquee-brand shrink-0 px-8" key={company}><BrandSymbol index={index}/><span>{company}</span></div>)}</div>)}</div></div></FadeInUp>
      </section>

      <section id="features" className="features-section">
        <div className="feature-row mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2">
          <FadeInUp className="feature-copy"><div className="feature-badge text-yellow-300"><Sparkles size={15}/>{d.delivery.badge}</div><h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">{d.delivery.title}</h2><p className="feature-description mt-6 text-gray-400">{d.delivery.description}</p><a href="#experience" className="button button-dark mt-8">{d.delivery.action}<ArrowUpRight size={16}/></a></FadeInUp>
          <FadeInUp className="feature-media delivery-media relative overflow-hidden rounded-3xl border border-white/10 p-8" delay={120}><VideoBackdrop src={videoSources.delivery} enabled={motionEnabled} paused={paused} variant="feature"/><div className="delivery-mockup floating-card rounded-2xl border border-white/10 bg-[#1C1C1E]/90 p-4 backdrop-blur-xl"><div className="mockup-label"><span className="mini-logo"><Layers3 size={16}/></span><span>{d.delivery.previewLabel}</span><span className="mockup-dots" aria-hidden="true">···</span></div><div className="workflow-chips">{d.delivery.chips.map((chip, index) => <span key={chip}>{index === 0 ? <FileText size={12}/> : index === 1 ? <Layers3 size={12}/> : <CircleCheck size={12}/>} {chip}</span>)}</div><div className="process-line" aria-hidden="true"><span/><i/><span/><i/><span/><i/><span/></div><div className="mockup-input"><Plus size={17}/><span>{d.delivery.prompt}</span><AudioLines size={17}/></div><p className="mockup-note">{d.delivery.note}</p></div></FadeInUp>
        </div>

        <div className="feature-row mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2">
          <FadeInUp className="feature-media analytics-media relative overflow-hidden rounded-3xl border border-white/10 p-8"><VideoBackdrop src={videoSources.analytics} enabled={motionEnabled} paused={paused} variant="feature"/><div className="analytics-mockup floating-card rounded-2xl border border-white/10 bg-[#1C1C1E]/90 p-4 backdrop-blur-xl"><div className="mockup-label"><span className="mini-logo"><AudioLines size={15}/></span><span>{d.analytics.cardTitle}</span><span className="mockup-dots" aria-hidden="true">···</span></div><p className="analytics-subtitle">{d.analytics.cardSubtitle}</p><div className="waveform" aria-hidden="true">{Array.from({ length: 45 }, (_, index) => <span key={index} style={{ height: `${12 + ((index * 17 + 11) % 41)}px` }}/>)}</div><div className="analytics-stats">{d.analytics.metrics.map(metric => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div><p className="mockup-note">{d.analytics.note}</p></div></FadeInUp>
          <FadeInUp className="feature-copy" delay={120}><div className="feature-badge text-green-300"><Sparkles size={15}/>{d.analytics.badge}</div><h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">{d.analytics.title}</h2><p className="feature-description mt-6 text-gray-400">{d.analytics.description}</p><a href={PROTOTYPE} target="_blank" rel="noopener noreferrer" className="button button-dark mt-8">{d.analytics.action}<ArrowUpRight size={16}/></a></FadeInUp>
        </div>
      </section>

      <section id="profile" className="profile-section mx-auto max-w-7xl px-6 py-24"><FadeInUp className="profile-grid"><PhotoGallery lang={lang}/><div className="profile-copy"><p className="section-label">{d.profileLabel}</p><h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Marilaura Alvarado Navarro<span className="profile-period">.</span></h2><p className="mt-6 text-base leading-7 text-gray-400">{t.section.aboutBody}</p><div className="profile-languages">{t.languages.map(language => <span key={language.name}>{language.name}<small>{language.level}</small></span>)}</div><a className="button button-dark mt-8" href={assetPath("/assets/Marilaura_Alvarado_Navarro_CV.pdf")} download>{t.ui.downloadCv}<ArrowDownToLine size={16}/></a></div></FadeInUp></section>

      <section id="experience" className="resume-section mx-auto max-w-7xl px-6 py-24"><FadeInUp><div className="resume-heading"><h2 className="text-4xl font-semibold tracking-tight md:text-5xl">{d.experienceTitle}</h2><p>{t.section.experienceIntro}</p></div><div className="experience-list">{t.jobs.map(job => <details className="experience-item" key={job.company}><summary><span><strong>{job.company}</strong><small>{job.role}</small></span><span className="experience-date">{job.period}</span><ChevronDown size={17}/></summary><div className="experience-detail"><p className="job-type">{job.type}</p><p>{job.summary}</p><ul>{job.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></div></details>)}</div></FadeInUp>
        <FadeInUp className="education-grid" delay={100}><div id="education"><h3 className="text-2xl font-semibold tracking-tight">{d.educationTitle}</h3>{t.education.map(degree => <article className="degree" key={degree.degree}><span>{degree.period}</span><h4>{degree.degree}</h4><p>{degree.school}</p></article>)}</div><div className="certifications"><h3 className="text-2xl font-semibold tracking-tight">{t.certificatesLabel}</h3><ul>{t.certificates.map(item => <li key={item.name}><span>{item.name}</span><time>{item.year}</time></li>)}</ul></div></FadeInUp>
        <FadeInUp className="expertise-list">{t.expertise.map(item => <div key={item.title}><h3>{item.title}</h3><p>{item.skills.join(" · ")}</p></div>)}</FadeInUp>
      </section>

      <FAQ lang={lang}/>
    </main>

    <footer id="contact" className="footer-section relative z-0 border-t border-white/5 px-6 pt-32 pb-10"><VideoBackdrop src={videoSources.hero} enabled={motionEnabled} paused={paused} variant="footer"/>
      <FadeInUp className="footer-cta mx-auto mb-32 max-w-3xl text-center"><h2 className="text-4xl font-medium tracking-tight md:text-6xl">{d.footerTitle}<br/><span className="font-serif font-normal italic">{d.footerItalic}</span></h2><div className="mt-8 flex flex-wrap justify-center gap-3"><a className="button button-white" href={`mailto:${EMAIL}`}>{d.primary}<ArrowUpRight size={17}/></a><a className="button button-dark" href={assetPath("/assets/Marilaura_Alvarado_Navarro_CV.pdf")} download>{t.ui.downloadCv}<ArrowDownToLine size={16}/></a></div><div className="footer-email"><a href={`mailto:${EMAIL}`}>{EMAIL}</a><button onClick={copyEmail} aria-label={copied === "copied" ? t.contact.copied : t.contact.copyEmail}>{copied === "copied" ? <Check size={14}/> : <Copy size={14}/>}</button></div><p className="copy-feedback" role="status">{copied === "copied" ? t.contact.copied : copied === "failed" ? t.contact.copyFailed : ""}</p></FadeInUp>
      <FadeInUp className="footer-grid mx-auto mb-24 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-4"><div><Logo small/><p>{d.footerDescription}</p></div><div><h3>{d.footerGroups[0]}</h3><a href="#about">{d.nav[0]}</a><a href="#features">{d.nav[1]}</a><a href="#faq">FAQ</a><a href="#profile">{d.profileLabel}</a></div><div><h3>{d.footerGroups[1]}</h3><a href="#experience">{d.experienceTitle}</a><a href="#education">{d.educationTitle}</a><a href={PORTFOLIO} target="_blank" rel="noopener noreferrer">{lang === "ru" ? "Портфолио" : lang === "es" ? "Portafolio" : "Portfolio"}</a><a href={PROTOTYPE} target="_blank" rel="noopener noreferrer">GASIGHT</a></div><div><h3>{d.footerGroups[2]}</h3><a href={`mailto:${EMAIL}`}>{t.contact.emailLabel}</a><a href={`tel:${PHONE}`}>+506 8647-7992</a><a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn<ArrowUpRight size={12}/></a><a href={assetPath("/assets/Marilaura_Alvarado_Navarro_CV.pdf")} download>{t.ui.downloadCv}</a></div></FadeInUp>
      <div className="footer-bottom mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 border-t border-white/5 pt-8 text-xs text-gray-500 md:flex-row"><span>© 2026 Marilaura Alvarado Navarro. {d.rights}</span><span className="footer-dot" aria-hidden="true">·</span><a href="#about">{t.ui.backTop}</a>{motionEnabled && <><span className="footer-dot" aria-hidden="true">·</span><button className="motion-toggle" aria-pressed={paused} onClick={() => setPaused(old => !old)}>{paused ? <Play size={12}/> : <Pause size={12}/>} {paused ? d.resume : d.pause}</button></>}</div>
    </footer>
  </div>;
}


