"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowDownToLine, ArrowUpRight, AudioLines, BarChart3, Check, ChevronDown, ChevronLeft, ChevronRight, Copy, ExternalLink, Globe2, GraduationCap, Layers3, Menu, Pause, Phone, Play, ScanLine, Sparkles, Target, Trophy, X } from "lucide-react";
import { content, type Language } from "@/lib/content";
import { AMBIENT_VIDEO, assetPath, EMAIL, LINKEDIN, PHONE, PORTFOLIO, PROTOTYPE, photos } from "@/lib/site-config";

const sections = ["about", "experience", "projects", "expertise", "education", "contact"];
const locales: Language[] = ["en", "es", "ru"];
const skillIcons = [Layers3, BarChart3, Target];

function Mark() {
  return <span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><path d="m7 22 3-13 6 9 6-9 3 13M10 22h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>;
}

function Portrait({ lang }: { lang: Language }) {
  const t = content[lang];
  const [selected, setSelected] = useState(0);
  const [failed, setFailed] = useState<string[]>([]);
  const usable = photos.filter(photo => !failed.includes(photo.src));
  const photo = usable[selected % Math.max(usable.length, 1)];
  return <div className="portrait-composition">
    <div className="portrait-card glass">
      <div className="portrait-top"><span className="micro">MARILAURA / 01</span><ScanLine size={18}/></div>
      {photo ? <img className="portrait-photo" src={assetPath(photo.src)} alt={photo.alt} style={{ objectPosition: photo.position || "center" }} onError={() => setFailed(old => [...old, photo.src])}/> : <div className="portrait-placeholder" role="img" aria-label={t.ui.portraitLabel}><div className="portrait-orbit orbit-one"/><div className="portrait-orbit orbit-two"/><span className="portrait-monogram">M<span>A</span></span><span className="portrait-star" aria-hidden="true">✳</span></div>}
      <div className="portrait-bottom"><span>Marilaura Alvarado Navarro<small>{photo ? t.hero.role : t.ui.portraitNote}</small></span>{usable.length > 1 ? <div className="gallery-controls"><button aria-label={lang === "ru" ? "Предыдущее фото" : lang === "es" ? "Foto anterior" : "Previous photo"} onClick={() => setSelected(old => (old - 1 + usable.length) % usable.length)}><ChevronLeft size={18}/></button><button aria-label={lang === "ru" ? "Следующее фото" : lang === "es" ? "Siguiente foto" : "Next photo"} onClick={() => setSelected(old => (old + 1) % usable.length)}><ChevronRight size={18}/></button></div> : <ArrowUpRight size={20}/>}</div>
    </div>
    <div className="portrait-note glass"><span className="note-symbol"><Globe2 size={18}/></span><span>ES · EN · RU<small>{t.languages.map(language => language.level).join(" / ")}</small></span></div>
    <div className="photo-strip" aria-label={t.ui.galleryLabel}>{[1, 2, 3].map(index => <div className="photo-slot" key={index}>{usable[index] ? <img src={assetPath(usable[index].src)} alt={usable[index].alt} loading="lazy" onError={() => setFailed(old => [...old, usable[index].src])}/> : <><span className="micro">0{index + 1}</span><ScanLine size={17}/><span>{t.ui.galleryNote}</span></>}</div>)}</div>
  </div>;
}

export function Portfolio() {
  const [lang, setLang] = useState<Language>("en");
  const [ready, setReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">("idle");
  const [videoEnabled, setVideoEnabled] = useState(false);
  const [videoPaused, setVideoPaused] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const t = content[lang];

  useEffect(() => {
    try { const saved = localStorage.getItem("marilaura-language"); if (locales.includes(saved as Language)) setLang(saved as Language); } catch { /* Storage is optional. */ }
    setReady(true);
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setVideoEnabled(!query.matches && Boolean(AMBIENT_VIDEO));
    updateMotion();
    query.addEventListener("change", updateMotion);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-12% 0px -65% 0px" });
    ["home", ...sections].forEach(id => { const element = document.getElementById(id); if (element) observer.observe(element); });
    return () => { observer.disconnect(); query.removeEventListener("change", updateMotion); if (copyTimer.current) clearTimeout(copyTimer.current); };
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = lang;
    try { localStorage.setItem("marilaura-language", lang); } catch { /* Storage is optional. */ }
    setCopyStatus("idle");
  }, [lang, ready]);

  useEffect(() => {
    if (!video.current || !videoEnabled) return;
    if (videoPaused) video.current.pause();
    else video.current.play().catch(() => setVideoEnabled(false));
  }, [videoEnabled, videoPaused]);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") { setMenuOpen(false); menuButton.current?.focus(); } };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [menuOpen]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopyStatus("copied");
    } catch { setCopyStatus("failed"); }
    if (copyTimer.current) clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopyStatus("idle"), 5000);
  }

  return <>
    <a className="skip-link" href="#main">{t.ui.skip}</a>
    <header className="site-header">
      <div className="nav-shell">
        <a className="brand" href="#home" aria-label="Marilaura Alvarado Navarro" onClick={() => setMenuOpen(false)}><Mark/><span>Marilaura<span className="brand-surname"> Alvarado</span><small>PROJECT MANAGER</small></span></a>
        <nav className="desktop-nav" aria-label={t.ui.menuOpen}>{sections.slice(0, 4).map((id, i) => <a key={id} className={active === id ? "is-active" : ""} aria-current={active === id ? "location" : undefined} href={`#${id}`}>{t.nav[i]}</a>)}</nav>
        <div className="nav-actions"><div className="language-switch" role="group" aria-label={t.ui.languageLabel}>{locales.map(locale => <button key={locale} lang={locale} aria-pressed={lang === locale} disabled={!ready} onClick={() => setLang(locale)}>{locale.toUpperCase()}</button>)}</div><a className="button button-small nav-contact" href="#contact">{t.ui.contactMe}<ArrowUpRight size={15}/></a><button ref={menuButton} className="menu-toggle" aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? t.ui.menuClose : t.ui.menuOpen} onClick={() => setMenuOpen(old => !old)}>{menuOpen ? <X size={21}/> : <Menu size={21}/>}</button></div>
      </div>
      {menuOpen && <nav className="mobile-nav" id="mobile-menu" aria-label={t.ui.menuOpen}>{sections.map((id, i) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}><span className="micro">0{i + 1}</span>{t.nav[i]}<ArrowUpRight size={17}/></a>)}</nav>}
    </header>

    <main id="main">
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="ambient" aria-hidden="true">{videoEnabled && <video ref={video} autoPlay loop muted playsInline preload="metadata" onError={() => setVideoEnabled(false)}><source src={assetPath(AMBIENT_VIDEO)} type="video/mp4" onError={() => setVideoEnabled(false)}/></video>}</div>
        <div className="hero-grid" aria-hidden="true"/>
        <div className="container hero-inner">
          <div className="hero-badge"><span className="status-dot"/>{t.hero.eyebrow}</div>
          <p className="hero-name">MARILAURA ALVARADO NAVARRO</p>
          <h1 id="hero-title">{t.hero.headlineFirst}<br/><em>{t.hero.headlineAccent}</em></h1>
          <p className="hero-description">{t.hero.description}</p>
          <div className="hero-actions"><a className="button button-primary" href="#contact">{t.ui.contactMe}<ArrowUpRight size={18}/></a><a className="button button-outline" href={assetPath("/assets/Marilaura_Alvarado_Navarro_CV.pdf")} download>{t.ui.downloadCv}<ArrowDownToLine size={17}/></a></div>
          <div className="hero-role"><span/>{t.hero.role}<span/></div>
          <div className="impact-panel glass">{t.metrics.map((metric, i) => <div className="impact-stat" key={metric.label}><span className="stat-index micro">0{i + 1} /</span><strong>{metric.value}</strong><h2>{metric.label}</h2><p>{metric.note}</p></div>)}</div>
          <div className="hero-bottom"><a className="scroll-cue" href="#about"><span>{t.ui.viewExperience}</span><ArrowDown size={14}/></a>{videoEnabled && <button className="video-toggle" aria-pressed={videoPaused} onClick={() => setVideoPaused(old => !old)}>{videoPaused ? <Play size={11}/> : <Pause size={11}/>}<span>{lang === "ru" ? (videoPaused ? "Продолжить видео" : "Приостановить видео") : lang === "es" ? (videoPaused ? "Reanudar fondo" : "Pausar fondo") : (videoPaused ? "Resume background" : "Pause background")}</span></button>}</div>
        </div>
      </section>

      <div className="experience-strip"><div className="container"><span className="micro">{t.section.experienceLabel}</span><div className="company-wordmarks"><span className="wordmark-maxim">maxim<span>technology</span></span><span className="wordmark-gazprom">GAZPROM<small>{t.jobs[1].type}</small></span><span className="wordmark-intelmecsa">intelmecsa<span>↗</span></span><span className="wordmark-tbank">T<span className="tbank-dot">.</span>bank</span><span className="wordmark-spbu">SPbU<small>1724</small></span></div></div></div>

      <section id="about" className="section-shell about-section" aria-labelledby="about-title"><div className="container about-grid">
        <Portrait lang={lang}/>
        <div className="about-copy"><p className="eyebrow"><span>01 /</span>{t.section.aboutLabel}</p><h2 className="section-title" id="about-title">{t.section.aboutTitle}</h2><p className="about-lead">{t.section.aboutLead}</p><p className="body-muted">{t.section.aboutBody}</p><div className="about-values"><div><Layers3 size={20}/><span>{t.expertise[0].title}</span></div><div><BarChart3 size={20}/><span>{t.expertise[1].title}</span></div></div><div className="language-cards">{t.languages.map(language => <div key={language.name}><strong>{language.name}</strong><span>{language.level}</span></div>)}</div><a className="text-link" href={assetPath("/assets/Marilaura_Alvarado_Navarro_CV.pdf")} download>{t.ui.downloadCv}<ArrowDownToLine size={16}/><span className="file-label">PDF · 4.0 MB</span></a></div>
      </div></section>

      <section id="experience" className="section-shell" aria-labelledby="experience-title"><div className="container"><div className="section-header"><div><p className="eyebrow"><span>02 /</span>{t.section.experienceLabel}</p><h2 className="section-title" id="experience-title">{t.section.experienceTitle}</h2></div><p>{t.section.experienceIntro}</p></div><div className="experience-list">{t.jobs.map((job, i) => <details className="experience-row" key={job.company} open={i === 0}><summary><span className="job-index micro">0{i + 1}</span><span className="job-main"><span className="job-company">{job.company}</span><span className="job-role">{job.role}</span></span><span className="job-meta"><span>{job.period}</span><small>{job.type}</small></span><span className="expand-button"><ChevronDown size={18}/></span></summary><div className="job-details"><p>{job.summary}</p><ul>{job.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></div></details>)}</div></div></section>

      <section id="projects" className="section-shell projects-section" aria-labelledby="projects-title"><div className="container"><div className="section-header"><div><p className="eyebrow"><span>03 /</span>{t.section.projectsLabel}</p><h2 className="section-title" id="projects-title">{t.section.projectsTitle}</h2></div><p>{t.section.projectsIntro}</p></div><article className="project-card glass"><div className="project-copy"><span className="project-badge"><Sparkles size={14}/>{t.project.category}</span><h3>{t.project.name}</h3><p className="project-title">{t.project.title}</p><p className="body-muted">{t.project.description}</p><div className="project-stack"><span>AI / ML</span><span>Predictive analytics</span><span>IoT</span></div><a className="button button-outline" href={PROTOTYPE} target="_blank" rel="noopener noreferrer">{t.project.prototypeLabel}<ArrowUpRight size={17}/></a></div><div className="project-outcomes"><div className="outcomes-heading"><span className="micro">GASIGHT / {t.section.projectsLabel}</span><AudioLines size={20}/></div><div className="project-results">{t.project.results.map((result, i) => <div className={i === 0 ? "result result-featured" : "result"} key={result.label}><strong>{result.value}</strong><span>{result.label}</span></div>)}</div><div className="project-award"><Trophy size={18}/><span>{lang === "ru" ? "3-е место · отраслевой проект" : lang === "es" ? "3.er lugar · proyecto de colaboración" : "3rd place · industry collaboration"}</span></div><p className="project-note">{t.project.note}</p></div></article><a className="text-link portfolio-link" href={PORTFOLIO} target="_blank" rel="noopener noreferrer">{lang === "ru" ? "Посмотреть портфолио" : lang === "es" ? "Ver portafolio" : "View portfolio"}<ExternalLink size={15}/></a></div></section>

      <section id="expertise" className="section-shell" aria-labelledby="expertise-title"><div className="container"><p className="eyebrow"><span>04 /</span>{t.section.expertiseLabel}</p><h2 className="section-title" id="expertise-title">{t.section.expertiseTitle}</h2><div className="expertise-grid">{t.expertise.map((item, i) => { const Icon = skillIcons[i % skillIcons.length]; return <article className="expertise-card glass" key={item.title}><div className="expertise-top"><span className="expertise-icon"><Icon size={23}/></span><span className="micro">0{i + 1}</span></div><h3>{item.title}</h3><p>{item.description}</p><div className="skill-tags">{item.skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>; })}</div></div></section>

      <section id="education" className="section-shell education-section" aria-labelledby="education-title"><div className="container"><p className="eyebrow"><span>05 /</span>{t.section.educationLabel}</p><h2 className="section-title" id="education-title">{t.section.educationTitle}</h2><div className="education-grid"><div className="degrees">{t.education.map(degree => <article className="degree-card" key={degree.degree}><span className="degree-icon"><GraduationCap size={25}/></span><div><p className="micro">{degree.period}</p><h3>{degree.degree}</h3><p>{degree.school}</p></div></article>)}</div><div className="certifications"><h3><span className="status-dot"/>{t.certificatesLabel}<span className="certificate-count">07</span></h3><ul>{t.certificates.map(certificate => <li key={certificate.name}><span>{certificate.name}</span><time>{certificate.year}</time></li>)}</ul></div></div></div></section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title"><div className="contact-glow" aria-hidden="true"/><div className="container contact-inner"><p className="eyebrow"><span>06 /</span>{t.section.contactLabel}</p><h2 id="contact-title">{t.section.contactTitle}</h2><p className="contact-description">{t.section.contactText}</p><div className="contact-email-row"><a className="contact-email" href={`mailto:${EMAIL}`}>{EMAIL}<ArrowUpRight size={27}/></a><button className="copy-email" onClick={copyEmail} aria-label={copyStatus === "copied" ? t.contact.copied : t.contact.copyEmail}>{copyStatus === "copied" ? <Check size={18}/> : <Copy size={18}/>}</button></div><span className="copy-status" role="status">{copyStatus === "copied" ? t.contact.copied : copyStatus === "failed" ? t.contact.copyFailed : ""}</span><div className="contact-links"><a href={`tel:${PHONE}`}><Phone size={17}/><span>+506 8647-7992</span><ArrowUpRight size={15}/></a><a href={LINKEDIN} target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor"><path d="M6.5 8.5h-3V21h3V8.5ZM5 3a1.8 1.8 0 1 0 0 3.6A1.8 1.8 0 0 0 5 3ZM21 13.5c0-3.3-1.7-5.3-4.5-5.3-1.5 0-2.5.6-3.1 1.5V8.5h-3V21h3v-7c0-1.9.7-3 2.2-3 1.5 0 2.2 1 2.2 3v7H21v-7.5Z"/></svg><span>{t.contact.linkedinLabel}</span><ArrowUpRight size={15}/></a><a href={assetPath("/assets/Marilaura_Alvarado_Navarro_CV.pdf")} download><ArrowDownToLine size={17}/><span>{t.ui.downloadCv}</span><ArrowUpRight size={15}/></a></div></div></section>
    </main>

    <footer className="site-footer"><div className="container footer-inner"><a className="footer-brand" href="#home"><Mark/><span>Marilaura Alvarado Navarro</span></a><p>© 2026 <span>{t.ui.footer}</span></p><a className="back-top" href="#home">{t.ui.backTop}<ArrowUpRight size={16}/></a></div></footer>
  </>;
}


