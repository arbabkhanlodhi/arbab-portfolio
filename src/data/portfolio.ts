/**
 * Central portfolio data — customized for Arbab Khan Lodhi.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Arbab Khan Lodhi',
  displayName: 'Arbab Khan Lodhi',
  firstName: 'ARBAB',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'AN ARBAB ORIGINAL',
  role: 'Mechatronics Engineering Student',
  tagline: ['Mechatronics Engineering Student', 'Embedded Systems & Robotics'],
  intro:
    'A Mechatronics Engineering undergraduate (3rd semester) at NUST College of Electrical & Mechanical Engineering, building embedded systems and robotics projects — an ESP8266-based smart home automation system, a rectifier-RLC filter circuit, and a gear-driven robot gripper mechanism — with C++, SolidWorks and AutoCAD.',
  location: 'Islamabad, Pakistan',
  email: 'arbab.lodhi134@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/arbabkhanlodhi/',
    github: '',
  },
  resumePdf: '/assets/Arbab_Khan_Lodhi_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Arbab Khan Lodhi',
  },
  interests: ['Embedded Systems', 'Robotics', 'CAD Modeling'],
};

export const education = [
  {
    school: 'NUST College of Electrical & Mechanical Engineering',
    place: 'Islamabad',
    degree: 'B.E. Mechatronics Engineering',
    period: '2025 – Present',
    score: '3rd Semester',
  },
  {
    school: 'Higher Secondary School Certificate',
    place: 'Pakistan',
    degree: 'Intermediate',
    period: '2025',
    score: 'Merit basis for PEEF COE Scholarship',
  },
];

export const experience = [
  {
    company: 'Self-directed learning',
    role: 'CAD & Embedded Practice',
    place: 'Islamabad',
    period: '2025 – Present',
    points: [
      'Working through a structured SolidWorks practice plan — sketching, parts and assemblies.',
      'Building embedded projects with ESP8266/ESP32 and Arduino, including sensor and actuator interfacing.',
      'Applying version control and documentation practices across personal engineering projects.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  /** Path to the project report PDF under /assets — a "View Report" button appears in the modal. */
  report?: string;
  /** Photos shown in the project modal, paths under /assets. */
  images?: string[];
  /** Optional demo video (mp4) shown in the project modal, path under /assets. */
  video?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'smart-home-automation',
    title: 'Smart Home Automation System',
    year: '2026',
    genre: 'IoT • Embedded • ESP8266',
    logline: 'Wi-Fi based home appliance control with an ESP8266, relays and sensors.',
    stack: ['ESP8266', 'Arduino', 'Relays', 'Sensors'],
    build: [
      'Built an IoT system on the ESP8266 (NodeMCU) platform to switch and monitor home appliances remotely over Wi-Fi, with relay interfacing and sensor integration, as part of a team project.',
    ],
    features: [
      'Wi-Fi based appliance control',
      'Relay interfacing',
      'Sensor integration',
      'Remote monitoring',
      'Team project',
    ],
    metrics: [],
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'robot-gripper',
    title: 'Robot Gripper Mechanism',
    year: '2025',
    genre: 'CAD • Mechanical Design • AutoCAD',
    logline: 'Gear-driven robot gripper mechanism modeled in AutoCAD with 3D modeling and orthographic projection.',
    stack: ['AutoCAD', '3D Modeling', 'Orthographic Projection'],
    build: [
      'Developed a robot gripper mechanism in AutoCAD as a 1st-semester Engineering Drawing team project — a central base gear drives two gear links to open and close the jaws — with 3D modeling, orthographic projection and motion simulation.',
    ],
    features: [
      'Gear-driven jaw mechanism',
      'Central base gear with two gear links',
      '3D modeling',
      'Orthographic projection',
      'Motion simulation',
    ],
    metrics: [
      { value: '8', label: 'Parts modeled' },
      { value: '227.8 mm', label: 'Gripper total length' },
      { value: '279 mm', label: 'Base plate length' },
      { value: '223.5 mm', label: 'Gear link total length' },
    ],
    report: '/assets/robot-gripper-report.pdf',
    images: ['/assets/robot-gripper.png'],
    palette: { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'rectifier-rlc-filter',
    title: 'Rectifier-RLC Filter',
    year: '2026',
    genre: 'Circuits • Power Electronics • Filters',
    logline: 'Three-stage rectifier and RLC filter circuit built on veroboard and tested with lab equipment.',
    stack: ['Veroboard', 'Diodes', 'Inductor', 'Capacitor'],
    build: [
      'Designed and analyzed a three-stage RLC filter circuit as a 2nd-semester team project: a bridge rectifier (four diodes) converting AC to pulsating DC, an LC filter, and a series RLC band-pass filter to select a frequency from the input signal — built on veroboard and tested using standard laboratory equipment.',
    ],
    features: [
      'Bridge rectifier (AC to pulsating DC)',
      'LC filter stage',
      'Series RLC band-pass filter',
      'Built on veroboard',
      'Tested with lab equipment',
    ],
    metrics: [
      { value: '5.03 kHz', label: 'Resonant frequency' },
      { value: '0.15 V', label: 'Ripple voltage' },
      { value: '20 V', label: 'Measured DC output' },
      { value: '3', label: 'Filter stages' },
    ],
    report: '/assets/rlc-filter-report.pdf',
    images: ['/assets/rlc-veroboard.jpg'],
    video: '/assets/rlc-demo.mp4',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'peef-coe',
    title: 'PEEF Centre of Excellence Scholarship',
    org: 'Punjab Educational Endowment Fund',
    detail: 'Merit-based scholarship awarded for the Bachelor\u2019s Degree Program 2025\u20132029, in recognition of Intermediate Examination 2025 results.',
    laurel: 'Merit Scholarship',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Microsoft & LinkedIn', name: 'Career Essentials in Generative AI', link: '/assets/cert-microsoft-genai.pdf' },
  { issuer: 'Kaggle', name: 'Intro to Machine Learning', link: '/assets/cert-kaggle-ml.pdf' },
  { issuer: 'Anthropic', name: 'Claude 101', link: '/assets/cert-anthropic-claude-101.pdf' },
  { issuer: 'Anthropic', name: 'Claude Code 101', link: '/assets/cert-anthropic-claude-code-101.pdf' },
  { issuer: 'Anthropic', name: 'AI Fluency: Framework & Foundations', link: '/assets/cert-anthropic-ai-fluency.pdf' },
  { issuer: 'NASA', name: 'Open Science 101', link: '/assets/cert-nasa-open-science-101.pdf' },
  { issuer: 'NASA', name: 'Open Science Essentials', link: '/assets/cert-nasa-open-science-essentials.pdf' },
  { issuer: 'Forage', name: 'Project Manager Job Simulation – Siemens', link: '/assets/cert-forage-siemens-pm.pdf' },
  { issuer: 'Forage', name: 'Technology Job Simulation – Deloitte', link: '/assets/cert-forage-deloitte-tech.pdf' },
  { issuer: 'Forage', name: 'Cyber Job Simulation – Deloitte', link: '/assets/cert-forage-deloitte-cyber.pdf' },
  { issuer: 'Forage', name: 'Data Analytics Job Simulation – Deloitte', link: '/assets/cert-forage-deloitte-data.pdf' },
  { issuer: 'Allah Wale Foundation', name: 'Summer Internship Program 2026', link: '/assets/cert-awf-internship.pdf' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'C++ is the primary language',
    skills: [
      { name: 'C++', mono: 'C+', note: 'Primary' },
      { name: 'Python', mono: 'Py' },
      { name: 'Arduino', mono: 'Ar' },
    ],
  },
  {
    id: 'embedded',
    title: 'Embedded & IoT',
    subtitle: 'Boards & interfacing',
    skills: [
      { name: 'ESP8266', mono: 'E6' },
      { name: 'ESP32', mono: 'E3' },
      { name: 'Sensors', mono: 'Sn' },
      { name: 'Actuators', mono: 'At' },
    ],
  },
  {
    id: 'cad',
    title: 'CAD & Design',
    subtitle: 'Modeling & drafting',
    skills: [
      { name: 'SolidWorks', mono: 'Sw' },
      { name: 'AutoCAD', mono: 'Ad' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    subtitle: 'Workflow',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'VS Code', mono: 'Vs' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'Coursework',
    subtitle: 'The foundations',
    skills: [
      { name: 'OOP', mono: 'Oo' },
      { name: 'Data Structures', mono: 'Ds' },
      { name: 'Circuits', mono: 'Ci' },
      { name: 'Dynamics', mono: 'Dy' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Coming soon to the series',
    skills: [
      { name: 'Embedded Systems', mono: 'Es' },
      { name: 'Robotics', mono: 'Ro' },
      { name: 'Machine Learning', mono: 'Ml' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  'C++': ['Data Structures & OOP coursework', 'Smart Home Automation System'],
  Python: ['Kaggle Intro to Machine Learning'],
  Arduino: ['Smart Home Automation System', 'Sensor & actuator interfacing'],
  ESP8266: ['Smart Home Automation System'],
  ESP32: ['Embedded projects'],
  SolidWorks: ['Solid modeling coursework'],
  AutoCAD: ['Robot Gripper Mechanism'],
  Git: ['Version control'],
  'VS Code': ['Development workflow'],
  OOP: ['DSOOP coursework (C++)'],
  'Data Structures': ['DSOOP coursework (C++)'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
  projectId?: string;
  scrollTo?: string;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2025 – 2026',
    synopsis: 'Started B.E. Mechatronics at NUST College of Electrical & Mechanical Engineering, Islamabad — the first semester of the degree.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Fresher',
        description: 'Began B.E. Mechatronics Engineering at NUST EME, Islamabad — degree 2025–2029, PEEF Centre of Excellence scholar.',
        tags: ['NUST', 'Mechatronics', 'EME'],
        runtime: 'Semester 1',
        palette: amber,
        scrollTo: 'about',
      },
      {
        code: 'S01 E02',
        title: 'The Gripper',
        description: 'Modeled a gear-driven robot gripper mechanism in AutoCAD — a central base gear driving two gear links to open and close the jaws — as an Engineering Drawing team project, with 3D modeling and orthographic projection.',
        tags: ['AutoCAD', 'Robot Gripper', 'Team Project'],
        runtime: 'Semester 1',
        palette: crimson,
        projectId: 'robot-gripper',
      },
    ],
  },
  {
    number: 2,
    title: 'Building Things',
    period: '2026',
    synopsis: 'Second semester — circuits on the bench and IoT in the air.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Circuit Builder',
        description: 'Built a three-stage rectifier-RLC filter circuit on veroboard — bridge rectifier, LC filter and series RLC band-pass filter — and tested it with standard laboratory equipment, as a team project.',
        tags: ['RLC Filter', 'Veroboard', 'Team Project'],
        runtime: 'Semester 2',
        palette: ocean,
        projectId: 'rectifier-rlc-filter',
      },
      {
        code: 'S02 E02',
        title: 'The Automator',
        description: 'Built an ESP8266-based smart home automation system — Wi-Fi appliance control with relays and sensors — as a team project.',
        tags: ['ESP8266', 'IoT', 'Team Project'],
        runtime: 'Semester 2',
        palette: jade,
        projectId: 'smart-home-automation',
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'C++', detail: 'OOP & data structures coursework', palette: amber },
  { label: 'The IoT Original', title: 'Smart Home Automation', detail: 'ESP8266 • Wi-Fi control', palette: crimson },
  { label: 'The CAD Original', title: 'Robot Gripper', detail: 'AutoCAD • gear-driven', palette: ocean },
  { label: 'The circuits Original', title: 'Rectifier-RLC Filter', detail: 'Veroboard • lab tested', palette: violet },
  { label: 'Merit award', title: 'PEEF COE Scholarship', detail: 'Punjab Educational Endowment Fund', palette: jade },
  { label: 'AI credential', title: 'Generative AI', detail: 'Microsoft & LinkedIn', palette: amber },
  { label: 'ML credential', title: 'Intro to ML', detail: 'Kaggle', palette: crimson },
  { label: 'Current semester', title: '3rd Semester', detail: 'B.E. Mechatronics, NUST EME', palette: ocean },
  { label: 'Design skill', title: 'SolidWorks', detail: 'Parts • sketching', palette: jade },
  { label: 'Current focus', title: 'Embedded Systems', detail: 'with Robotics & CAD modeling', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.E. · Mechatronics',
    lines: ['NUST College of Electrical & Mechanical Engineering, Islamabad', '2025 – 2029 · 3rd semester'],
    chips: ['PEEF COE Scholar'],
  },
  {
    kicker: 'Skills',
    title: 'C++ first.',
    lines: ['C++, Python, Arduino · ESP8266, ESP32', 'SolidWorks, AutoCAD · Git, VS Code'],
    chips: ['C++', 'ESP8266', 'SolidWorks', 'AutoCAD', 'Git'],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: ['Smart Home Automation — ESP8266, Wi-Fi control', 'Robot Gripper — AutoCAD, gear-driven mechanism', 'Rectifier-RLC Filter — veroboard, lab tested'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['PEEF Centre of Excellence Scholarship — Punjab Educational Endowment Fund', 'Merit-based award for the Bachelor\u2019s program 2025–2029'],
  },
  {
    kicker: 'Certified',
    title: '5 Certifications',
    lines: ['Microsoft & LinkedIn · Kaggle · NASA', 'Siemens Mobility · Deloitte Australia'],
    chips: ['Jul – Aug 2026'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['Embedded Systems · Robotics · CAD Modeling'],
  },
];

export type ProfileId = 'sushmita' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sushmita',
    name: 'Arbab',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & hardware first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
