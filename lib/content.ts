export type Language = "en" | "es" | "ru";

export interface SiteContent {
  nav: [string, string, string, string, string, string];
  ui: {
    languageLabel: string;
    menuOpen: string;
    menuClose: string;
    skip: string;
    downloadCv: string;
    contactMe: string;
    viewExperience: string;
    backTop: string;
    footer: string;
    experienceMore: string;
    experienceLess: string;
    portraitLabel: string;
    portraitNote: string;
    galleryLabel: string;
    galleryNote: string;
  };
  hero: {
    eyebrow: string;
    headlineFirst: string;
    headlineAccent: string;
    description: string;
    role: string;
  };
  section: {
    aboutLabel: string;
    aboutTitle: string;
    aboutLead: string;
    aboutBody: string;
    experienceLabel: string;
    experienceTitle: string;
    experienceIntro: string;
    projectsLabel: string;
    projectsTitle: string;
    projectsIntro: string;
    expertiseLabel: string;
    expertiseTitle: string;
    educationLabel: string;
    educationTitle: string;
    contactLabel: string;
    contactTitle: string;
    contactText: string;
  };
  jobs: {
    company: string;
    role: string;
    period: string;
    type: string;
    summary: string;
    bullets: string[];
  }[];
  project: {
    name: string;
    category: string;
    title: string;
    description: string;
    results: { value: string; label: string }[];
    note: string;
    prototypeLabel: string;
  };
  expertise: { title: string; description: string; skills: string[] }[];
  education: { school: string; degree: string; period: string }[];
  certificatesLabel: string;
  certificates: { name: string; year: string }[];
  languageLabel: string;
  languages: { name: string; level: string }[];
  contact: {
    emailLabel: string;
    phoneLabel: string;
    linkedinLabel: string;
    copyEmail: string;
    copied: string;
    copyFailed: string;
  };
  metrics: { value: string; label: string; note: string }[];
}

const en: SiteContent = {
  nav: ["About", "Experience", "Selected project", "Expertise", "Education", "Contact"],
  ui: {
    languageLabel: "Language",
    menuOpen: "Open navigation",
    menuClose: "Close navigation",
    skip: "Skip to content",
    downloadCv: "Download résumé",
    contactMe: "Let’s connect",
    viewExperience: "Explore my experience",
    backTop: "Back to top",
    footer: "Clarity in the process. Purpose in the outcome.",
    experienceMore: "View contributions",
    experienceLess: "Show less",
    portraitLabel: "Marilaura, in focus",
    portraitNote: "Portrait coming soon",
    galleryLabel: "Beyond the résumé",
    galleryNote: "Photo coming soon",
  },
  hero: {
    eyebrow: "PROJECT MANAGEMENT · DATA & AI",
    headlineFirst: "Turning complexity",
    headlineAccent: "into progress.",
    description: "I’m Marilaura Alvarado Navarro. I connect people, data, and technology to move software and AI projects from planning to delivery.",
    role: "Project Manager · Business Analytics",
  },
  section: {
    aboutLabel: "ABOUT",
    aboutTitle: "A clear direction. A shared outcome.",
    aboutLead: "Good projects bring people and evidence together.",
    aboutBody: "My work sits between product, engineering, and analytics. I coordinate multidisciplinary teams, turn data into priorities, and keep delivery connected to business goals. With a background in political science and business analytics, I bring both a human perspective and an analytical approach to complex projects.",
    experienceLabel: "EXPERIENCE",
    experienceTitle: "From alignment to delivery.",
    experienceIntro: "Experience across software, AI, IT infrastructure, and research, with a focus on clear communication and measurable progress.",
    projectsLabel: "SELECTED PROJECT",
    projectsTitle: "Intelligence with a practical purpose.",
    projectsIntro: "Connecting predictive analytics, infrastructure monitoring, and international collaboration.",
    expertiseLabel: "EXPERTISE",
    expertiseTitle: "The structure behind the progress.",
    educationLabel: "EDUCATION",
    educationTitle: "An interdisciplinary foundation.",
    contactLabel: "CONTACT",
    contactTitle: "Let’s start a conversation.",
    contactText: "For conversations about project management, analytics, and meaningful technology, get in touch.",
  },
  jobs: [
    {
      company: "Maxim Technology",
      role: "Middle Project Manager",
      period: "Sep 2025 — Jul 2026",
      type: "Software & product delivery",
      summary: "Coordinated engineering, analytics, and product teams for a platform serving more than one million daily orders.",
      bullets: [
        "Coordinated large cross-functional teams across engineering, analytics, and product.",
        "Led engineering and analytics collaboration, with a reported 20% improvement in feature delivery velocity.",
        "Tracked project KPIs to monitor delivery progress and project health.",
        "Used SQL and product data to inform backlog priorities.",
        "Worked with engineers to reduce search-related inefficiencies by 15–20%.",
      ],
    },
    {
      company: "Gazprom · Industry Collaboration Project",
      role: "Project Manager",
      period: "Jun 2025 — Oct 2025",
      type: "Project-based · Part-time",
      summary: "Led GASIGHT, an AI-driven predictive-maintenance and infrastructure-monitoring project. The collaboration received third place.",
      bullets: [
        "Led the development of GASIGHT and coordinated multidisciplinary teams across five countries.",
        "Designed predictive models; reported project results included 50% less unplanned downtime and 20% lower maintenance costs.",
        "Used cost accounting to track budget variances and project-level financial impact.",
        "Integrated machine learning and sensor data, with a reported 35% improvement in early failure detection accuracy.",
        "Reported project outcomes included a 25% increase in operational efficiency and 20% faster project delivery.",
        "The project was awarded third place.",
      ],
    },
    {
      company: "Intelmecsa",
      role: "Junior Project Manager",
      period: "Nov 2024 — May 2025",
      type: "Internship",
      summary: "Supported project coordination, client operations, and communication between on-site, remote, and international teams.",
      bullets: [
        "Supported project coordination and client operations, improving communication flow across teams by 20%.",
        "Coordinated on-site and remote meetings, improving scheduling efficiency and reducing delays by 15%.",
        "Used CRM tools to help manage client relationships and improve response times by 25%.",
        "Contributed to project documentation and reporting, improving tracking accuracy by 30%.",
        "Managed Requests for Information (RFIs) with international teams, reducing inquiry resolution time by 25%.",
      ],
    },
    {
      company: "Tbank",
      role: "Junior Project Manager",
      period: "May 2024 — Nov 2024",
      type: "Internship",
      summary: "Coordinated IT infrastructure and digital transformation projects, aligning implementation with business priorities.",
      bullets: [
        "Coordinated IT infrastructure and digital transformation work around business priorities.",
        "Planned system upgrades, schedules, and resources, improving implementation efficiency by 20%.",
        "Connected developers, engineers, and stakeholders, reducing misalignment issues by 25%.",
        "Managed documentation, ticket tracking, and system testing, improving deployment accuracy by 30%.",
        "Contributed to Agile sprints and reporting to support on-time project milestones.",
        "Supported risk assessment and quality assurance, reducing post-deployment issues by 15%.",
      ],
    },
    {
      company: "Saint Petersburg State University",
      role: "Project Coordinator · Data & Policy Research Division",
      period: "Nov 2023 — May 2024",
      type: "Data & policy research",
      summary: "Coordinated interdisciplinary research projects combining data analytics and policy research.",
      bullets: [
        "Coordinated interdisciplinary teams, improving delivery efficiency by 25%.",
        "Managed data workflows and timelines, reducing project delays by 20%.",
        "Developed interactive Power BI dashboards, increasing data accessibility and stakeholder engagement by 30%.",
        "Introduced structured data validation, improving research transparency and data accuracy by approximately 35%.",
      ],
    },
  ],
  project: {
    name: "GASIGHT",
    category: "AI · PREDICTIVE MAINTENANCE",
    title: "Seeing the signals before the failure.",
    description: "An AI-driven platform for predictive maintenance and infrastructure monitoring, developed through a part-time industry collaboration project with Gazprom. My work combined project leadership, predictive models, sensor data, and coordination across five countries.",
    results: [
      { value: "−50%", label: "Unplanned downtime" },
      { value: "−20%", label: "Maintenance costs" },
      { value: "+35%", label: "Early failure detection accuracy" },
    ],
    note: "Reported project results from the industry collaboration. Awarded third place.",
    prototypeLabel: "Explore the prototype",
  },
  expertise: [
    {
      title: "Project delivery",
      description: "Turning shared goals into priorities, coordinated work, and visible progress.",
      skills: ["Agile & Scrum", "Project coordination", "Backlog prioritization", "KPI tracking", "Risk assessment"],
    },
    {
      title: "Data & decisions",
      description: "Bringing an analytical perspective to planning, performance, and business questions.",
      skills: ["SQL", "Python · Pandas, NumPy", "R", "Excel", "Predictive analytics"],
    },
    {
      title: "Insight & communication",
      description: "Making complex information accessible to the people who need to act on it.",
      skills: ["Power BI", "Tableau", "Data visualization", "Business storytelling", "Stakeholder communication"],
    },
    {
      title: "People & processes",
      description: "Connecting disciplines, improving workflows, and keeping the details in view.",
      skills: ["Cross-functional collaboration", "Process optimization", "CRM & RFIs", "Problem solving", "Attention to detail"],
    },
  ],
  education: [
    {
      school: "Graduate School of Management, Saint Petersburg State University",
      degree: "Master in Business Analytics & Big Data (MBA)",
      period: "Sep 2023 — Jul 2026",
    },
    {
      school: "Saint Petersburg State University",
      degree: "Bachelor’s Degree in Political Science and Government",
      period: "Sep 2020 — Jul 2024",
    },
  ],
  certificatesLabel: "CONTINUOUS LEARNING",
  certificates: [
    { name: "Agile & Scrum (Practical Application in Projects)", year: "2025" },
    { name: "Business Storytelling for Data-Driven Decision Making", year: "2025" },
    { name: "Power BI for Data Visualization & Reporting", year: "2025" },
    { name: "SQL for Data Analysis and Query Optimization", year: "2024" },
    { name: "R Programming for Statistical Data Analysis", year: "2023" },
    { name: "Tableau for Data Visualization", year: "2023" },
    { name: "Python for Data Analysis (Pandas, NumPy)", year: "2022" },
  ],
  languageLabel: "WORKING ACROSS LANGUAGES",
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "C1" },
    { name: "Russian", level: "B2" },
  ],
  contact: {
    emailLabel: "Email",
    phoneLabel: "Phone",
    linkedinLabel: "LinkedIn",
    copyEmail: "Copy email address",
    copied: "Email copied",
    copyFailed: "Copy unavailable. Please use the email link.",
  },
  metrics: [
    { value: "1M+", label: "Daily orders", note: "Scale of the platform supported at Maxim Technology" },
    { value: "+20%", label: "Feature delivery velocity", note: "Reported team improvement at Maxim Technology" },
    { value: "5", label: "Countries, one team", note: "Multidisciplinary collaboration on GASIGHT" },
  ],
};

const es: SiteContent = {
  nav: ["Sobre mí", "Experiencia", "Proyecto", "Especialidades", "Formación", "Contacto"],
  ui: {
    languageLabel: "Idioma",
    menuOpen: "Abrir navegación",
    menuClose: "Cerrar navegación",
    skip: "Ir al contenido",
    downloadCv: "Descargar currículum",
    contactMe: "Conversemos",
    viewExperience: "Explora mi experiencia",
    backTop: "Volver al inicio",
    footer: "Claridad en el proceso. Propósito en el resultado.",
    experienceMore: "Ver contribuciones",
    experienceLess: "Ver menos",
    portraitLabel: "Marilaura, en perspectiva",
    portraitNote: "Retrato próximamente",
    galleryLabel: "Más allá del currículum",
    galleryNote: "Foto próximamente",
  },
  hero: {
    eyebrow: "GESTIÓN DE PROYECTOS · DATOS E IA",
    headlineFirst: "Transformar la complejidad",
    headlineAccent: "en progreso.",
    description: "Soy Marilaura Alvarado Navarro. Conecto personas, datos y tecnología para llevar proyectos de software e inteligencia artificial de la planificación a la entrega.",
    role: "Project Manager · Analítica de negocios",
  },
  section: {
    aboutLabel: "SOBRE MÍ",
    aboutTitle: "Una dirección clara. Un resultado compartido.",
    aboutLead: "Los buenos proyectos reúnen a las personas y la evidencia.",
    aboutBody: "Mi trabajo conecta producto, ingeniería y analítica. Coordino equipos multidisciplinarios, convierto los datos en prioridades y mantengo la entrega alineada con los objetivos del negocio. Mi formación en ciencias políticas y analítica de negocios aporta una perspectiva humana y un enfoque analítico a proyectos complejos.",
    experienceLabel: "EXPERIENCIA",
    experienceTitle: "De la coordinación a la entrega.",
    experienceIntro: "Experiencia en software, inteligencia artificial, infraestructura de TI e investigación, con énfasis en la comunicación clara y el progreso medible.",
    projectsLabel: "PROYECTO DESTACADO",
    projectsTitle: "Inteligencia con un propósito práctico.",
    projectsIntro: "Conectar analítica predictiva, monitoreo de infraestructura y colaboración internacional.",
    expertiseLabel: "ESPECIALIDADES",
    expertiseTitle: "La estructura detrás del progreso.",
    educationLabel: "FORMACIÓN",
    educationTitle: "Una base interdisciplinaria.",
    contactLabel: "CONTACTO",
    contactTitle: "Comencemos una conversación.",
    contactText: "Para conversar sobre gestión de proyectos, analítica y tecnología con propósito, escríbeme.",
  },
  jobs: [
    {
      company: "Maxim Technology",
      role: "Project Manager de nivel intermedio",
      period: "Sept. 2025 — jul. 2026",
      type: "Entrega de software y producto",
      summary: "Coordiné equipos de ingeniería, analítica y producto para una plataforma con más de un millón de pedidos diarios.",
      bullets: [
        "Coordiné grandes equipos multifuncionales de ingeniería, analítica y producto.",
        "Lideré la colaboración entre ingeniería y analítica, con una mejora reportada del 20% en la velocidad de entrega de funcionalidades.",
        "Di seguimiento a los KPI del proyecto para monitorear el avance y el estado de la entrega.",
        "Utilicé SQL y datos de producto para priorizar el backlog.",
        "Colaboré con ingeniería para reducir las ineficiencias de búsqueda entre un 15% y un 20%.",
      ],
    },
    {
      company: "Gazprom · Proyecto de colaboración con la industria",
      role: "Project Manager",
      period: "Jun. 2025 — oct. 2025",
      type: "Por proyecto · Tiempo parcial",
      summary: "Lideré GASIGHT, un proyecto de mantenimiento predictivo y monitoreo de infraestructura con IA. La colaboración obtuvo el tercer lugar.",
      bullets: [
        "Lideré el desarrollo de GASIGHT y coordiné equipos multidisciplinarios en cinco países.",
        "Diseñé modelos predictivos; los resultados reportados del proyecto incluyeron un 50% menos de tiempo de inactividad no planificado y un 20% menos de costos de mantenimiento.",
        "Utilicé contabilidad de costos para monitorear desviaciones presupuestarias y el impacto financiero del proyecto.",
        "Integré aprendizaje automático y datos de sensores, con una mejora reportada del 35% en la precisión de detección temprana de fallas.",
        "Los resultados reportados incluyeron un aumento del 25% en la eficiencia operativa y una entrega del proyecto un 20% más rápida.",
        "El proyecto obtuvo el tercer lugar.",
      ],
    },
    {
      company: "Intelmecsa",
      role: "Junior Project Manager",
      period: "Nov. 2024 — may. 2025",
      type: "Práctica profesional",
      summary: "Apoyé la coordinación de proyectos, las operaciones con clientes y la comunicación entre equipos presenciales, remotos e internacionales.",
      bullets: [
        "Apoyé la coordinación de proyectos y las operaciones con clientes, mejorando el flujo de comunicación entre equipos en un 20%.",
        "Coordiné reuniones presenciales y remotas, mejorando la planificación y reduciendo los retrasos en un 15%.",
        "Utilicé herramientas CRM para apoyar las relaciones con clientes y mejorar los tiempos de respuesta en un 25%.",
        "Contribuí a la documentación y los informes del proyecto, mejorando la precisión del seguimiento en un 30%.",
        "Gestioné solicitudes de información (RFI) con equipos internacionales, reduciendo el tiempo de resolución de consultas en un 25%.",
      ],
    },
    {
      company: "Tbank",
      role: "Junior Project Manager",
      period: "May. 2024 — nov. 2024",
      type: "Práctica profesional",
      summary: "Coordiné proyectos de infraestructura de TI y transformación digital, alineando la implementación con las prioridades del negocio.",
      bullets: [
        "Coordiné iniciativas de infraestructura de TI y transformación digital según las prioridades del negocio.",
        "Planifiqué actualizaciones de sistemas, cronogramas y recursos, mejorando la eficiencia de implementación en un 20%.",
        "Conecté a desarrolladores, ingenieros y partes interesadas, reduciendo los problemas de desalineación en un 25%.",
        "Gestioné documentación, seguimiento de incidencias y pruebas de sistemas, mejorando la precisión de los despliegues en un 30%.",
        "Participé en sprints Agile e informes para apoyar la entrega puntual de los hitos del proyecto.",
        "Apoyé la evaluación de riesgos y el aseguramiento de la calidad, reduciendo los problemas posteriores al despliegue en un 15%.",
      ],
    },
    {
      company: "Universidad Estatal de San Petersburgo",
      role: "Coordinadora de proyectos · División de Investigación de Datos y Políticas",
      period: "Nov. 2023 — may. 2024",
      type: "Investigación de datos y políticas",
      summary: "Coordiné proyectos interdisciplinarios que combinaban analítica de datos e investigación de políticas.",
      bullets: [
        "Coordiné equipos interdisciplinarios, mejorando la eficiencia de entrega en un 25%.",
        "Gestioné flujos de datos y cronogramas, reduciendo los retrasos del proyecto en un 20%.",
        "Desarrollé dashboards interactivos en Power BI, aumentando la accesibilidad de los datos y la participación de las partes interesadas en un 30%.",
        "Implementé validación estructurada de datos, mejorando la transparencia de la investigación y la precisión de los datos en aproximadamente un 35%.",
      ],
    },
  ],
  project: {
    name: "GASIGHT",
    category: "IA · MANTENIMIENTO PREDICTIVO",
    title: "Ver las señales antes de la falla.",
    description: "Una plataforma de mantenimiento predictivo y monitoreo de infraestructura con IA, desarrollada mediante un proyecto de colaboración con la industria de tiempo parcial con Gazprom. Mi trabajo combinó liderazgo de proyecto, modelos predictivos, datos de sensores y coordinación entre cinco países.",
    results: [
      { value: "−50%", label: "Tiempo de inactividad no planificado" },
      { value: "−20%", label: "Costos de mantenimiento" },
      { value: "+35%", label: "Precisión de detección temprana de fallas" },
    ],
    note: "Resultados reportados del proyecto de colaboración con la industria. Tercer lugar.",
    prototypeLabel: "Explorar el prototipo",
  },
  expertise: [
    {
      title: "Entrega de proyectos",
      description: "Convertir objetivos compartidos en prioridades, trabajo coordinado y avances visibles.",
      skills: ["Agile y Scrum", "Coordinación de proyectos", "Priorización del backlog", "Seguimiento de KPI", "Evaluación de riesgos"],
    },
    {
      title: "Datos y decisiones",
      description: "Aportar una perspectiva analítica a la planificación, el desempeño y las preguntas de negocio.",
      skills: ["SQL", "Python · Pandas, NumPy", "R", "Excel", "Analítica predictiva"],
    },
    {
      title: "Análisis y comunicación",
      description: "Hacer accesible la información compleja para quienes necesitan actuar con ella.",
      skills: ["Power BI", "Tableau", "Visualización de datos", "Narrativa de negocios", "Comunicación con partes interesadas"],
    },
    {
      title: "Personas y procesos",
      description: "Conectar disciplinas, mejorar flujos de trabajo y prestar atención a los detalles.",
      skills: ["Colaboración multifuncional", "Optimización de procesos", "CRM y RFI", "Resolución de problemas", "Atención al detalle"],
    },
  ],
  education: [
    {
      school: "Graduate School of Management, Universidad Estatal de San Petersburgo",
      degree: "Master in Business Analytics & Big Data (MBA)",
      period: "Sept. 2023 — jul. 2026",
    },
    {
      school: "Universidad Estatal de San Petersburgo",
      degree: "Bachillerato en Ciencias Políticas y Gobierno",
      period: "Sept. 2020 — jul. 2024",
    },
  ],
  certificatesLabel: "APRENDIZAJE CONTINUO",
  certificates: [
    { name: "Agile y Scrum (aplicación práctica en proyectos)", year: "2025" },
    { name: "Narrativa de negocios para decisiones basadas en datos", year: "2025" },
    { name: "Power BI para visualización de datos e informes", year: "2025" },
    { name: "SQL para análisis de datos y optimización de consultas", year: "2024" },
    { name: "Programación en R para análisis estadístico de datos", year: "2023" },
    { name: "Tableau para visualización de datos", year: "2023" },
    { name: "Python para análisis de datos (Pandas, NumPy)", year: "2022" },
  ],
  languageLabel: "TRABAJO ENTRE IDIOMAS",
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "C1" },
    { name: "Ruso", level: "B2" },
  ],
  contact: {
    emailLabel: "Correo",
    phoneLabel: "Teléfono",
    linkedinLabel: "LinkedIn",
    copyEmail: "Copiar correo electrónico",
    copied: "Correo copiado",
    copyFailed: "No se pudo copiar. Usa el enlace de correo.",
  },
  metrics: [
    { value: "1M+", label: "Pedidos diarios", note: "Escala de la plataforma en Maxim Technology" },
    { value: "+20%", label: "Velocidad de entrega", note: "Mejora del equipo reportada en Maxim Technology" },
    { value: "5", label: "Países, un equipo", note: "Colaboración multidisciplinaria en GASIGHT" },
  ],
};

const ru: SiteContent = {
  nav: ["Обо мне", "Опыт", "Проект", "Компетенции", "Образование", "Контакты"],
  ui: {
    languageLabel: "Язык",
    menuOpen: "Открыть меню",
    menuClose: "Закрыть меню",
    skip: "Перейти к содержанию",
    downloadCv: "Скачать резюме",
    contactMe: "Связаться со мной",
    viewExperience: "Посмотреть опыт",
    backTop: "Наверх",
    footer: "Ясность в процессе. Смысл в результате.",
    experienceMore: "Подробнее о работе",
    experienceLess: "Свернуть",
    portraitLabel: "Марилаура в фокусе",
    portraitNote: "Портрет скоро появится",
    galleryLabel: "За рамками резюме",
    galleryNote: "Скоро фото",
  },
  hero: {
    eyebrow: "УПРАВЛЕНИЕ ПРОЕКТАМИ · ДАННЫЕ И ИИ",
    headlineFirst: "Превращаю сложность",
    headlineAccent: "в движение вперёд.",
    description: "Я Марилаура Альварадо Наварро. Объединяю людей, данные и технологии, чтобы вести проекты в разработке ПО и ИИ от планирования до результата.",
    role: "Менеджер проектов · Бизнес-аналитика",
  },
  section: {
    aboutLabel: "ОБО МНЕ",
    aboutTitle: "Ясное направление. Общий результат.",
    aboutLead: "В основе хорошего проекта — люди и обоснованные решения.",
    aboutBody: "Моя работа объединяет продукт, разработку и аналитику. Я координирую междисциплинарные команды, превращаю данные в приоритеты и связываю реализацию с целями бизнеса. Образование в области политологии и бизнес-аналитики помогает учитывать человеческую сторону задач и последовательно работать с данными.",
    experienceLabel: "ОПЫТ",
    experienceTitle: "От общего понимания к результату.",
    experienceIntro: "Опыт в разработке ПО, искусственном интеллекте, ИТ-инфраструктуре и исследованиях. В центре работы — понятная коммуникация и измеримый прогресс.",
    projectsLabel: "ИЗБРАННЫЙ ПРОЕКТ",
    projectsTitle: "Интеллект с практической целью.",
    projectsIntro: "Прогнозная аналитика, мониторинг инфраструктуры и международное сотрудничество в одном проекте.",
    expertiseLabel: "КОМПЕТЕНЦИИ",
    expertiseTitle: "Системный подход к движению вперёд.",
    educationLabel: "ОБРАЗОВАНИЕ",
    educationTitle: "Междисциплинарная основа.",
    contactLabel: "КОНТАКТЫ",
    contactTitle: "Давайте начнём разговор.",
    contactText: "Буду рада общению об управлении проектами, аналитике и технологиях с понятной целью.",
  },
  jobs: [
    {
      company: "Maxim Technology",
      role: "Менеджер проектов уровня Middle",
      period: "Сент. 2025 — июль 2026",
      type: "Разработка ПО и продукта",
      summary: "Координировала команды разработки, аналитики и продукта для платформы с более чем миллионом заказов в день.",
      bullets: [
        "Координировала крупные межфункциональные команды разработки, аналитики и продукта.",
        "Выстраивала взаимодействие разработки и аналитики; по данным резюме, скорость выпуска функций выросла на 20%.",
        "Отслеживала KPI проекта для контроля прогресса и состояния реализации.",
        "Использовала SQL и продуктовые данные для расстановки приоритетов в бэклоге.",
        "Совместно с разработчиками сокращала неэффективность поиска на 15–20%.",
      ],
    },
    {
      company: "Газпром · Проект в сотрудничестве с индустрией",
      role: "Менеджер проекта",
      period: "Июнь 2025 — окт. 2025",
      type: "Проектная работа · Частичная занятость",
      summary: "Руководила GASIGHT — проектом на основе ИИ для прогнозного обслуживания и мониторинга инфраструктуры. Проект занял третье место.",
      bullets: [
        "Руководила разработкой GASIGHT и координировала междисциплинарные команды из пяти стран.",
        "Разрабатывала прогнозные модели; заявленные результаты проекта включали сокращение внеплановых простоев на 50% и расходов на обслуживание на 20%.",
        "Применяла учёт затрат для контроля отклонений от бюджета и финансового эффекта проекта.",
        "Объединяла машинное обучение и данные датчиков; заявленный рост точности раннего обнаружения отказов составил 35%.",
        "Среди заявленных результатов проекта — рост операционной эффективности на 25% и ускорение реализации на 20%.",
        "Проект был отмечен третьим местом.",
      ],
    },
    {
      company: "Intelmecsa",
      role: "Младший менеджер проектов",
      period: "Нояб. 2024 — май 2025",
      type: "Стажировка",
      summary: "Помогала координировать проекты, работу с клиентами и коммуникацию между очными, удалёнными и международными командами.",
      bullets: [
        "Поддерживала координацию проектов и работу с клиентами, улучшив обмен информацией между командами на 20%.",
        "Организовывала очные и удалённые встречи, повысив эффективность планирования и сократив задержки на 15%.",
        "Использовала CRM для сопровождения клиентов и сократила время ответа на 25%.",
        "Участвовала в подготовке документации и отчётности, повысив точность отслеживания на 30%.",
        "Вела запросы на информацию (RFI) совместно с международными командами, сократив время обработки обращений на 25%.",
      ],
    },
    {
      company: "Tbank",
      role: "Младший менеджер проектов",
      period: "Май 2024 — нояб. 2024",
      type: "Стажировка",
      summary: "Координировала проекты ИТ-инфраструктуры и цифровой трансформации с учётом бизнес-приоритетов.",
      bullets: [
        "Координировала задачи ИТ-инфраструктуры и цифровой трансформации в соответствии с целями бизнеса.",
        "Планировала обновления систем, сроки и ресурсы, повысив эффективность внедрения на 20%.",
        "Связывала разработчиков, инженеров и заинтересованные стороны, сократив проблемы несогласованности на 25%.",
        "Вела документацию, задачи и тестирование систем, повысив точность развёртывания на 30%.",
        "Участвовала в Agile-спринтах и подготовке отчётности для своевременного достижения этапов проекта.",
        "Помогала оценивать риски и обеспечивать качество, сократив число проблем после развёртывания на 15%.",
      ],
    },
    {
      company: "Санкт-Петербургский государственный университет",
      role: "Координатор проектов · Исследования данных и политики",
      period: "Нояб. 2023 — май 2024",
      type: "Аналитика данных и исследования политики",
      summary: "Координировала междисциплинарные проекты на пересечении аналитики данных и исследований политики.",
      bullets: [
        "Координировала междисциплинарные команды, повысив эффективность выполнения проектов на 25%.",
        "Управляла потоками данных и сроками, сократив задержки на 20%.",
        "Создавала интерактивные дашборды Power BI, повысив доступность данных и вовлечённость заинтересованных сторон на 30%.",
        "Внедрила структурированную проверку данных, повысив прозрачность исследований и точность данных примерно на 35%.",
      ],
    },
  ],
  project: {
    name: "GASIGHT",
    category: "ИИ · ПРОГНОЗНОЕ ОБСЛУЖИВАНИЕ",
    title: "Замечать сигналы до отказа.",
    description: "Платформа на основе ИИ для прогнозного обслуживания и мониторинга инфраструктуры, созданная в рамках проекта сотрудничества с Газпромом при частичной занятости. Моя работа объединяла руководство проектом, прогнозные модели, данные датчиков и координацию команд из пяти стран.",
    results: [
      { value: "−50%", label: "Внеплановые простои" },
      { value: "−20%", label: "Расходы на обслуживание" },
      { value: "+35%", label: "Точность раннего обнаружения отказов" },
    ],
    note: "Заявленные результаты проекта сотрудничества с индустрией. Проект занял третье место.",
    prototypeLabel: "Посмотреть прототип",
  },
  expertise: [
    {
      title: "Реализация проектов",
      description: "Превращаю общие цели в приоритеты, согласованную работу и видимый прогресс.",
      skills: ["Agile и Scrum", "Координация проектов", "Приоритизация бэклога", "Контроль KPI", "Оценка рисков"],
    },
    {
      title: "Данные и решения",
      description: "Применяю аналитику в планировании, оценке результатов и решении бизнес-задач.",
      skills: ["SQL", "Python · Pandas, NumPy", "R", "Excel", "Прогнозная аналитика"],
    },
    {
      title: "Аналитика и коммуникация",
      description: "Делаю сложную информацию понятной для тех, кому предстоит принимать решения.",
      skills: ["Power BI", "Tableau", "Визуализация данных", "Бизнес-сторителлинг", "Работа с заинтересованными сторонами"],
    },
    {
      title: "Люди и процессы",
      description: "Объединяю специалистов, улучшаю рабочие процессы и сохраняю внимание к деталям.",
      skills: ["Межфункциональное взаимодействие", "Оптимизация процессов", "CRM и RFI", "Решение проблем", "Внимание к деталям"],
    },
  ],
  education: [
    {
      school: "Высшая школа менеджмента, Санкт-Петербургский государственный университет",
      degree: "Master in Business Analytics & Big Data (MBA)",
      period: "Сент. 2023 — июль 2026",
    },
    {
      school: "Санкт-Петербургский государственный университет",
      degree: "Бакалавриат: политология и государственное управление",
      period: "Сент. 2020 — июль 2024",
    },
  ],
  certificatesLabel: "НЕПРЕРЫВНОЕ ОБУЧЕНИЕ",
  certificates: [
    { name: "Agile и Scrum: практическое применение в проектах", year: "2025" },
    { name: "Бизнес-сторителлинг для принятия решений на основе данных", year: "2025" },
    { name: "Power BI: визуализация данных и отчётность", year: "2025" },
    { name: "SQL: анализ данных и оптимизация запросов", year: "2024" },
    { name: "Программирование на R для статистического анализа данных", year: "2023" },
    { name: "Tableau: визуализация данных", year: "2023" },
    { name: "Python для анализа данных: Pandas, NumPy", year: "2022" },
  ],
  languageLabel: "РАБОТА НА НЕСКОЛЬКИХ ЯЗЫКАХ",
  languages: [
    { name: "Испанский", level: "Родной" },
    { name: "Английский", level: "C1" },
    { name: "Русский", level: "B2" },
  ],
  contact: {
    emailLabel: "Почта",
    phoneLabel: "Телефон",
    linkedinLabel: "LinkedIn",
    copyEmail: "Скопировать адрес почты",
    copied: "Адрес скопирован",
    copyFailed: "Не удалось скопировать. Используйте ссылку на почту.",
  },
  metrics: [
    { value: "1M+", label: "Заказов в день", note: "Масштаб платформы в Maxim Technology" },
    { value: "+20%", label: "Скорость выпуска функций", note: "Улучшение работы команды в Maxim Technology по данным резюме" },
    { value: "5", label: "Стран, одна команда", note: "Междисциплинарная работа над GASIGHT" },
  ],
};

export const content: Record<Language, SiteContent> = { en, es, ru };
