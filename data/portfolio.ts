// data/portfolio.ts

// 1. Personal Information
export const personal = {
  name: "Shivam Suryawanshi",
  role: "Electrical Engineering Student",
  location: "Yavatmal, Maharashtra, India",
  profileImage: "/images/profile.jpg", // Replace with your image in public/images/
};

// 2. Hero Section
export const hero = {
  heading: "Electrical Engineering Student\nBuilding Practical Technology",
  subtitle: "Electrical Engineering | Embedded Systems | Automation | AI",
  description: "Exploring electrical engineering through practical projects in embedded systems, automation, renewable energy, robotics and AI.",
};

// 3. About Section
export const about = {
  description: "I am Shivam Suryawanshi, a B.Tech Electrical Engineering student at Government College of Engineering, Yavatmal. I am interested in electrical systems, power engineering, embedded systems, automation, renewable energy and the application of AI in electrical engineering.\n\nI enjoy converting theoretical concepts into practical projects using microcontrollers, sensors, electronics and electrical engineering principles.",
};

// 4. Education
export const education = [
  {
    degree: "B.Tech – Electrical Engineering",
    institution: "Government College of Engineering, Yavatmal",
  }
];

// 5. Skills
export const skills = [
  {
    category: "Electrical Engineering",
    icon: "Zap", // Lucide icon name
    items: [
      { name: "Electrical Machines", level: "Working Knowledge" },
      { name: "Power Systems", level: "Learning" },
      { name: "Power Electronics", level: "Familiar" },
      { name: "Electrical Measurements", level: "Working Knowledge" },
      { name: "Basic Electrical Design", level: "Working Knowledge" },
      { name: "Electrical Wiring", level: "Project Experience" }
    ]
  },
  {
    category: "Embedded & Electronics",
    icon: "Cpu",
    items: [
      { name: "ESP8266", level: "Project Experience" },
      { name: "Arduino", level: "Project Experience" },
      { name: "Microcontrollers", level: "Working Knowledge" },
      { name: "Sensors", level: "Working Knowledge" },
      { name: "I2C", level: "Working Knowledge" },
      { name: "LCD", level: "Working Knowledge" },
      { name: "Basic Electronics", level: "Working Knowledge" },
      { name: "IoT", level: "Project Experience" }
    ]
  },
  {
    category: "Software / Technical",
    icon: "Code2",
    items: [
      { name: "C", level: "Working Knowledge" },
      { name: "C++", level: "Working Knowledge" },
      { name: "Arduino IDE", level: "Working Knowledge" },
      { name: "MATLAB", level: "Familiar" },
      { name: "ETAP", level: "Learning" },
      { name: "SCADA", level: "Learning" },
      { name: "Git/GitHub", level: "Working Knowledge" }
    ]
  },
  {
    category: "AI / Machine Learning",
    icon: "BrainCircuit",
    items: [
      { name: "Machine Learning", level: "Familiar" },
      { name: "SVM", level: "Familiar" },
      { name: "LSTM", level: "Learning" },
      { name: "AI Applications in Electrical Engineering", level: "Familiar" }
    ]
  }
];

// 6. Projects
export const projects = [
  {
    title: "AI-Based Transformer Fault Prediction",
    shortDescription: "An academic concept focused on using machine learning techniques to identify and predict possible transformer faults from monitored electrical and operational parameters.",
    longDescription: "An academic concept focused on using machine learning techniques to identify and predict possible transformer faults from monitored electrical and operational parameters.",
    category: "Academic / Engineering Project",
    technologies: ["Machine Learning", "SVM", "LSTM", "Sensors", "Transformer Monitoring", "Fault Prediction"],
    hardware: [],
    concepts: [],
    status: "Concept",
    image: "/images/projects/project-1.jpg",
    gallery: [
      "/images/projects/project-1.jpg"
    ],
    github: "",
    demo: "",
    featured: true
  },
  {
    title: "Smart Lighting System",
    shortDescription: "An IoT-based smart lighting project using sensors and a microcontroller to monitor environmental conditions and control lighting.",
    longDescription: "An IoT-based smart lighting project using sensors and a microcontroller to monitor environmental conditions and control lighting.",
    category: "IoT",
    technologies: [],
    hardware: ["ESP8266", "DHT11", "LDR", "I2C LCD", "LED"],
    concepts: ["IoT", "Sensor Monitoring", "Automation", "Embedded Systems"],
    status: "Completed",
    image: "/images/projects/project-2.jpg",
    gallery: [
      "/images/projects/project-2.jpg"
    ],
    github: "",
    demo: "",
    featured: true
  },
  {
    title: "Autonomous Power-Line Inspection & Fault Detection Robot",
    shortDescription: "A robotics concept combining electrical engineering, sensors and automation for inspection of electrical power lines and identification of possible faults.",
    longDescription: "A robotics concept combining electrical engineering, sensors and automation for inspection of electrical power lines and identification of possible faults.",
    category: "Robotics",
    technologies: [],
    hardware: [],
    concepts: ["Robotics", "Sensors", "Fault Detection", "Automation", "Electrical Engineering", "AI"],
    status: "Concept",
    image: "/images/projects/project-3.jpg",
    gallery: [
      "/images/projects/project-3.jpg"
    ],
    github: "",
    demo: "",
    featured: true
  },
  {
    title: "ESP8266 Sensor Monitoring Projects",
    shortDescription: "A collection of practical embedded experiments using ESP8266, sensors and LCD displays for real-time monitoring.",
    longDescription: "A collection of practical embedded experiments using ESP8266, sensors and LCD displays for real-time monitoring.",
    category: "Embedded Systems",
    technologies: [],
    hardware: ["ESP8266", "LDR", "DHT11", "I2C LCD", "LED"],
    concepts: ["Embedded Systems", "Sensor Interfacing", "IoT", "Real-Time Monitoring"],
    status: "Completed",
    image: "/images/projects/project-4.jpg",
    gallery: [
      "/images/projects/project-4.jpg"
    ],
    github: "",
    demo: "",
    featured: true
  }
];

// 7. Certifications
export type CertificateType = {
  name: string;
  organization: string;
  date: string;
  category?: string;
  file?: string;
  image?: string;
  credentialUrl?: string;
  description?: string;
  skills?: string[];
};

export const certifications: CertificateType[] = [
  // Add your certificates here
  // {
  //   name: "Certificate Name",
  //   organization: "Organization",
  //   date: "Date",
  //   category: "Solar",
  //   file: "/certificates/certificate.pdf",
  //   image: "/certificates/certificate.jpg",
  //   credentialUrl: "",
  //   description: "",
  //   skills: ["Solar Installation", "Renewable Energy"]
  // }
];

// 8. Gallery
export type GalleryItemType = {
  image: string;
  title?: string;
  description?: string;
  category?: string;
};

export const gallery: GalleryItemType[] = [
  // {
  //   image: "/images/gallery/photo.jpg",
  //   title: "Project Demonstration",
  //   description: "Short description",
  //   category: "Projects"
  // }
];

// 9. Achievements
export const achievements = [
  {
    title: "Continuous Learning",
    description: "Academic projects, technical experimentation and continuous engineering skill development.",
    date: "",
    image: "",
    link: ""
  }
];

// 10. Technical Interests
export const interests = [
  "Electrical Power Systems",
  "Embedded Systems",
  "Automation",
  "Renewable Energy",
  "Solar Energy",
  "Robotics",
  "IoT",
  "Artificial Intelligence",
  "Electrical Machines",
  "Power Electronics"
];

// 11. Social Links
export const socialLinks = {
  email: "shivam@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  instagram: "https://instagram.com",
  youtube: "https://youtube.com"
};

// 12. Resume
export const resume = "/resume.pdf";
