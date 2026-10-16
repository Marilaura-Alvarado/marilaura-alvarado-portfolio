import type { Language } from "./content";

export interface DesignCopy {
  nav: [string, string, string, string];
  badge: string;
  heroLine1: string;
  heroLine2: string;
  heroItalic: string;
  heroDescription: string;
  primary: string;
  secondary: string;
  marqueeLabel: string;
  delivery: {
    badge: string;
    title: string;
    description: string;
    action: string;
    previewLabel: string;
    chips: string[];
    prompt: string;
    note: string;
  };
  analytics: {
    badge: string;
    title: string;
    description: string;
    action: string;
    previewLabel: string;
    cardTitle: string;
    cardSubtitle: string;
    metrics: { value: string; label: string }[];
    note: string;
  };
  profileLabel: string;
  experienceTitle: string;
  educationTitle: string;
  projectTitle: string;
  faqTitle: string;
  faq: [
    { question: string; answer: string },
    { question: string; answer: string },
    { question: string; answer: string },
    { question: string; answer: string },
    { question: string; answer: string },
  ];
  footerTitle: string;
  footerItalic: string;
  footerDescription: string;
  footerGroups: [string, string, string];
  pause: string;
  resume: string;
  rights: string;
}

export const designCopy: Record<Language, DesignCopy> = {
  en: {
    nav: ["About", "Expertise", "FAQ", "Contact"],
    badge: "Project management · Data & AI",
    heroLine1: "The clarity behind",
    heroLine2: "complex",
    heroItalic: "projects.",
    heroDescription: "I’m Marilaura Alvarado Navarro. I connect people, data, and technology to guide software and AI projects from planning to delivery.",
    primary: "Let’s connect",
    secondary: "Explore my work",
    marqueeLabel: "Experience across technology, industry, and research",
    delivery: {
      badge: "Project delivery",
      title: "Where shared goals become clear next steps.",
      description: "I bring product, engineering, and analytics teams together around priorities, timelines, and measurable progress. Clear communication keeps the work moving from planning to implementation.",
      action: "Explore my experience",
      previewLabel: "FROM ALIGNMENT TO DELIVERY",
      chips: ["Define", "Prioritize", "Coordinate", "Deliver"],
      prompt: "A shared goal. A clear next step.",
      note: "An illustration of the project delivery process.",
    },
    analytics: {
      badge: "Data & decisions",
      title: "Make the signals matter.",
      description: "From SQL-backed prioritization to predictive maintenance, I bring data into project decisions. In GASIGHT, I combined project leadership, predictive models, and collaboration across five countries.",
      action: "Explore GASIGHT",
      previewLabel: "GASIGHT · PROJECT SNAPSHOT",
      cardTitle: "Predictive maintenance",
      cardSubtitle: "Industry collaboration · 2025",
      metrics: [
        { value: "−50%", label: "Unplanned downtime" },
        { value: "−20%", label: "Maintenance costs" },
        { value: "+35%", label: "Early failure detection accuracy" },
      ],
      note: "Project results reported in the résumé. Part-time industry collaboration with Gazprom; awarded third place.",
    },
    profileLabel: "THE PERSON BEHIND THE PROCESS",
    experienceTitle: "Experience that connects disciplines.",
    educationTitle: "A foundation in people and data.",
    projectTitle: "GASIGHT, in focus.",
    faqTitle: "A little more about my work.",
    faq: [
      {
        question: "What kinds of projects have you worked on?",
        answer: "My experience spans software delivery, AI-driven predictive maintenance, IT infrastructure, digital transformation, and interdisciplinary data and policy research.",
      },
      {
        question: "How do you use analytics in project management?",
        answer: "I have used SQL and product data to prioritize backlogs, KPIs to monitor delivery, and Power BI dashboards to make research data accessible. My GASIGHT work also included predictive models and sensor data.",
      },
      {
        question: "What methods support your work?",
        answer: "Agile and Scrum, cross-functional coordination, stakeholder communication, project documentation, and KPI tracking form part of my experience. I also work with risk assessment and process improvement.",
      },
      {
        question: "Which languages do you speak?",
        answer: "Spanish is my native language. My English level is C1 and my Russian level is B2.",
      },
      {
        question: "Where can I read your full résumé?",
        answer: "Use the Download résumé link to open the full English CV, with my experience, education, certifications, and skills.",
      },
    ],
    footerTitle: "Let’s build something",
    footerItalic: "meaningful.",
    footerDescription: "People, data, and technology. A clear path from an idea to an outcome.",
    footerGroups: ["Explore", "Background", "Connect"],
    pause: "Pause background videos and motion",
    resume: "Resume background videos and motion",
    rights: "All rights reserved.",
  },
  es: {
    nav: ["Sobre mí", "Especialidades", "Preguntas", "Contacto"],
    badge: "Gestión de proyectos · Datos e IA",
    heroLine1: "La claridad detrás de",
    heroLine2: "proyectos",
    heroItalic: "complejos.",
    heroDescription: "Soy Marilaura Alvarado Navarro. Conecto personas, datos y tecnología para llevar proyectos de software e inteligencia artificial de la planificación a la entrega.",
    primary: "Conversemos",
    secondary: "Explora mi trabajo",
    marqueeLabel: "Experiencia en tecnología, industria e investigación",
    delivery: {
      badge: "Entrega de proyectos",
      title: "Donde los objetivos se convierten en próximos pasos.",
      description: "Reúno a equipos de producto, ingeniería y analítica en torno a prioridades, plazos y avances medibles. La comunicación clara permite pasar de la planificación a la implementación.",
      action: "Explora mi experiencia",
      previewLabel: "DE LA COORDINACIÓN A LA ENTREGA",
      chips: ["Definir", "Priorizar", "Coordinar", "Entregar"],
      prompt: "Un objetivo compartido. Un próximo paso claro.",
      note: "Una ilustración del proceso de entrega de proyectos.",
    },
    analytics: {
      badge: "Datos y decisiones",
      title: "Dar sentido a las señales.",
      description: "Desde la priorización con SQL hasta el mantenimiento predictivo, incorporo los datos a las decisiones del proyecto. En GASIGHT combiné liderazgo, modelos predictivos y colaboración entre cinco países.",
      action: "Explorar GASIGHT",
      previewLabel: "GASIGHT · VISTA DEL PROYECTO",
      cardTitle: "Mantenimiento predictivo",
      cardSubtitle: "Colaboración con la industria · 2025",
      metrics: [
        { value: "−50%", label: "Tiempo de inactividad no planificado" },
        { value: "−20%", label: "Costos de mantenimiento" },
        { value: "+35%", label: "Precisión de detección temprana de fallas" },
      ],
      note: "Resultados del proyecto reportados en el currículum. Colaboración de tiempo parcial con Gazprom; tercer lugar.",
    },
    profileLabel: "LA PERSONA DETRÁS DEL PROCESO",
    experienceTitle: "Experiencia que conecta disciplinas.",
    educationTitle: "Una base en personas y datos.",
    projectTitle: "GASIGHT, en detalle.",
    faqTitle: "Un poco más sobre mi trabajo.",
    faq: [
      {
        question: "¿En qué tipos de proyectos has trabajado?",
        answer: "Mi experiencia abarca entrega de software, mantenimiento predictivo con IA, infraestructura de TI, transformación digital e investigación interdisciplinaria de datos y políticas.",
      },
      {
        question: "¿Cómo usas la analítica en la gestión de proyectos?",
        answer: "He utilizado SQL y datos de producto para priorizar backlogs, KPI para monitorear la entrega y dashboards de Power BI para hacer accesibles los datos de investigación. En GASIGHT también trabajé con modelos predictivos y datos de sensores.",
      },
      {
        question: "¿Qué métodos apoyan tu trabajo?",
        answer: "Mi experiencia incluye Agile y Scrum, coordinación multifuncional, comunicación con partes interesadas, documentación y seguimiento de KPI. También trabajo con evaluación de riesgos y mejora de procesos.",
      },
      {
        question: "¿Qué idiomas hablas?",
        answer: "El español es mi idioma nativo. Mi nivel de inglés es C1 y mi nivel de ruso es B2.",
      },
      {
        question: "¿Dónde puedo leer tu currículum completo?",
        answer: "Usa el enlace Descargar currículum para abrir el CV completo en inglés, con mi experiencia, formación, certificaciones y habilidades.",
      },
    ],
    footerTitle: "Construyamos algo",
    footerItalic: "con propósito.",
    footerDescription: "Personas, datos y tecnología. Un camino claro de la idea al resultado.",
    footerGroups: ["Explorar", "Trayectoria", "Conectar"],
    pause: "Pausar videos de fondo y movimiento",
    resume: "Reanudar videos de fondo y movimiento",
    rights: "Todos los derechos reservados.",
  },
  ru: {
    nav: ["Обо мне", "Компетенции", "Вопросы", "Контакты"],
    badge: "Управление проектами · Данные и ИИ",
    heroLine1: "Ясность в основе",
    heroLine2: "сложных",
    heroItalic: "проектов.",
    heroDescription: "Я Марилаура Альварадо Наварро. Объединяю людей, данные и технологии, чтобы вести проекты в разработке ПО и ИИ от планирования до результата.",
    primary: "Связаться со мной",
    secondary: "Посмотреть работу",
    marqueeLabel: "Опыт в технологиях, индустрии и исследованиях",
    delivery: {
      badge: "Реализация проектов",
      title: "От общей цели к понятным действиям.",
      description: "Объединяю команды продукта, разработки и аналитики вокруг приоритетов, сроков и измеримого прогресса. Понятная коммуникация помогает пройти путь от планирования до реализации.",
      action: "Посмотреть опыт",
      previewLabel: "ОТ ОБЩЕГО ПОНИМАНИЯ К РЕЗУЛЬТАТУ",
      chips: ["Определить", "Выбрать", "Согласовать", "Реализовать"],
      prompt: "Общая цель. Понятный следующий шаг.",
      note: "Иллюстрация процесса реализации проекта.",
    },
    analytics: {
      badge: "Данные и решения",
      title: "Находить смысл в сигналах.",
      description: "Использую данные для проектных решений: от приоритизации с помощью SQL до прогнозного обслуживания. В GASIGHT моя работа объединяла руководство проектом, прогнозные модели и команды из пяти стран.",
      action: "Подробнее о GASIGHT",
      previewLabel: "GASIGHT · ОБЗОР ПРОЕКТА",
      cardTitle: "Прогнозное обслуживание",
      cardSubtitle: "Сотрудничество с индустрией · 2025",
      metrics: [
        { value: "−50%", label: "Внеплановые простои" },
        { value: "−20%", label: "Расходы на обслуживание" },
        { value: "+35%", label: "Точность раннего обнаружения отказов" },
      ],
      note: "Результаты проекта по данным резюме. Сотрудничество с Газпромом при частичной занятости; третье место.",
    },
    profileLabel: "ЧЕЛОВЕК ЗА РАБОЧИМ ПРОЦЕССОМ",
    experienceTitle: "Опыт на пересечении дисциплин.",
    educationTitle: "В основе — люди и данные.",
    projectTitle: "GASIGHT в деталях.",
    faqTitle: "Чуть больше о моей работе.",
    faq: [
      {
        question: "Над какими проектами вы работали?",
        answer: "Мой опыт охватывает разработку ПО, прогнозное обслуживание на основе ИИ, ИТ-инфраструктуру, цифровую трансформацию и междисциплинарные исследования данных и политики.",
      },
      {
        question: "Как вы используете аналитику в управлении проектами?",
        answer: "Я использовала SQL и продуктовые данные для приоритизации бэклога, KPI для контроля реализации и дашборды Power BI для доступного представления исследовательских данных. Работа над GASIGHT также включала прогнозные модели и данные датчиков.",
      },
      {
        question: "Какие методы вы применяете?",
        answer: "Мой опыт включает Agile и Scrum, межфункциональную координацию, коммуникацию с заинтересованными сторонами, документацию и контроль KPI. Также работаю с оценкой рисков и улучшением процессов.",
      },
      {
        question: "На каких языках вы говорите?",
        answer: "Испанский — мой родной язык. Уровень английского — C1, русского — B2.",
      },
      {
        question: "Где можно прочитать полное резюме?",
        answer: "По ссылке «Скачать резюме» доступно полное CV на английском: опыт работы, образование, сертификаты и навыки.",
      },
    ],
    footerTitle: "Создадим что-то",
    footerItalic: "со смыслом.",
    footerDescription: "Люди, данные и технологии. Понятный путь от идеи к результату.",
    footerGroups: ["Навигация", "Опыт и знания", "На связи"],
    pause: "Приостановить фоновые видео и анимацию",
    resume: "Возобновить фоновые видео и анимацию",
    rights: "Все права защищены.",
  },
};
