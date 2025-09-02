import {
  open_sera,
  java,
  pythonchatBot,
  toyotaSQl,
  museum,
  seneca,
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  html,
  pmi,
  reactjs,
  tailwind,
  postgresql,
  gsha,
  aws,
  python,
  cplusplus,
  typescript,
  powershell,
  cisco,
  connectwise,
  virtualbox,
  kalilinux,
  photoshop,
  premiere,
  cinema4d,
  blender,
  pdflex,
  anss,
  mongodb,
  certificate_aws,
  certificate_docker,
  certificate_dotNet,
  certificate_projectManagment01,
  certificate_projectManagment02,
  docker,
  dotNet,
  rentalX,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "extracurricular",
    title: "Certifications",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: fullstack,
  },
  {
    title: "Systems Infrastructure",
    icon: backend,
  },
  {
    title: "Cloud Automation",
    icon: mobile,
  },
  {
    title: "Workflows",
    icon: web,
  },
];

const education = [
  {
    title: "Computer Programming & Analysis (Advanced Diploma)",
    company_name: "Seneca Polytechnic, Toronto, ON",
    icon: seneca,
    iconBg: "#fff",
    date: "2023 - Present",
    points: [
      "Dean's Honours List",
      "4.0/4.0 GPA" 
      // "Courses undertaken: Data Structures and Algorithms, OOP, REST API, Software Design, Python Data Analysis, Discrete Mathematics, Computer Architecture, Operating Systems, PostgreSQL.",
    ],
  },
  {
    title: "High School",
    company_name: "George S Henry Academy",
    icon: gsha,
    iconBg: "#fff",
    date: "2020-2023",
    points: [
      "Ontario Scholar",
      "12th Grade: High 90s",
      ,
    ],
  },
];

const technologies = [
  {
    name: "Java",
    icon: java
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
    {
    name: "Powershell",
    icon: powershell,
  },
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostGreSQL",
    icon: postgresql,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
    {
    name: "Tailwind CSS",
    icon: tailwind,
  }, 
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const itTools = [
  {
    name: "Powershell",
    icon: powershell,
  },
  {
    name: "Cisco",
    icon: cisco,
  },
  {
    name: "ConnectWise",
    icon: connectwise,
  },
  {
    name: "VirtualBox",
    icon: virtualbox,
  },
];

// const cybersecurityTools = [
//   {
//     name: "Kali Linux",
//     icon: kalilinux,
//   },
//   {
//     name: "Wireshark",
//     icon: wireshark,
//   },
//   {
//     name: "Nmap",
//     icon: nmap,
//   },
//   {
//     name: "Metasploit",
//     icon: metasploit,
//   },
//   {
//     name: "John the Ripper",
//     icon: johntheripper,
//   },
//   {
//     name: "Hydra",
//     icon: hydra,
//   },
//   {
//     name: "Aircrack-ng",
//     icon: aircrackng,
//   },
// ];

const designTools = [
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Premiere",
    icon: premiere,
  },
  {
    name: "Cinema 4D",
    icon: cinema4d,
  },
  {
    name: "Blender",
    icon: blender,
  },
];

const experiences = [
  {
    title: "Full-stack Developer - ANSS Foundation",
    company_name: "Afghan Network for Social Services",
    icon: anss,
    iconBg: "#fff",
    date: "Jun 2025 - Jul 2025",
    points: [
      "Frontend Enhancement: Improved the home page with modern UI design, achieving a 40% increase in user engagement and receiving overwhelmingly positive feedback from 95% of community stakeholders.",
      "Membership System: Developed comprehensive multi-tier membership functionality, streamlining application processes by 50% and reducing membership onboarding time from 5 days to 2 days.",
      "Database Architecture: Implemented MongoDB database schema with robust user management system and JWT authentication, improving data retrieval speed by 60% and reducing authentication errors by 85%.",
      "Performance Optimization: Enhanced website performance through advanced SEO techniques and GraphQL integration, resulting in 45% faster page load times and 35% improvement in search engine rankings.",
      "Technical Efficiency: Built using Gatsby.js with serverless backend architecture, reducing server costs by 30% while handling 3x more concurrent users than the previous system.",
      "User Experience: Optimized user workflows and interface design, leading to 25% reduction in user drop-off rates and 50% increase in successful membership applications.",
      "Recognition: Mentioned in project end report and analysis as a hard-working, hyperactive, and passionate individual who delivered results 20% ahead of project deadlines.",
      "Overall Impact: Delivered a scalable community platform that increased overall user satisfaction by 70% and improved technical efficiency, supporting 500+ active community members."
    ],
  },
];


const extracurricular = [
  {
    title: "AWS Certified Cloud Practitioner",
    type: "Proof of Completion",
    icon: aws,
    iconBg: "#000000",
    date: "Jun 2025",
    points: [
      "Cloud concepts and basic AWS services",
      "Understanding AWS global infrastructure",
      "Security and compliance in the cloud",
      "Billing, pricing models, and AWS support plans",
    ],
    credential: certificate_aws,
  },
  {
    title: "Learning Docker",
    type: "Professional Certificate",
    icon: docker,
    iconBg: "#000000",
    date: "July 2025",
    points: [
      "Containerization fundamentals and benefits",
      "Building, managing, and deploying Docker images",
      "Using Docker Compose for multi-container applications",
      "Working with container registries and volumes",
    ],
    credential: certificate_docker,
  },
  {
    title: "C# and .NET Essential Training",
    type: "Professional Certificate",
    icon: dotNet,
    iconBg: "#050C18",
    date: "Aug 2025",
    points: [
      "C# programming fundamentals (syntax, data types, control flow)",
      "Object-Oriented Programming with classes and inheritance",
      "Working with .NET libraries and frameworks",
      "Building simple desktop and console applications",
    ],
    credential: certificate_dotNet,
  },
  {
    title: "Project Management Foundations",
    type: "Professional Certificate",
    icon: pmi,
    iconBg: "#050C18",
    date: "Mar 2025",
    points: [
      "Core project management concepts and terminology",
      "Defining project scope, goals, and deliverables",
      "Stakeholder communication and risk management",
      "Introduction to project lifecycle and methodologies",
    ],
    credential: certificate_projectManagment01,
  },
  {
    title: "Advanced Microsoft Project",
    type: "Professional Certificate",
    icon: pmi,
    iconBg: "#050C18",
    date: "Apr 2025",
    points: [
      "Advanced scheduling techniques with MS Project",
      "Resource allocation and workload balancing",
      "Tracking project progress and creating custom reports",
      "Integrating MS Project with other productivity tools",
    ],
    credential: certificate_projectManagment02,
  },
];


const projects = [
  {
    name: "PDFlex",
    description:
      "An AI-powered PDF note-taking tool that extracts key information, generates summaries, and answers questions from PDF documents to enhance study and research workflows.",
    tags: [
      { name: "LangChain", color: "blue-text-gradient" },
      { name: "Javascript", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "Next.js", color: "blue-text-gradient" },
    ],
    image: pdflex,
    source_code_link: "https://github.com/IqbalMashal/PDFlex---AI-pdf-Note-Taker",
    live_project_link: "https://pdflex-ai-pdf-note-taker.vercel.app/",
  },
  {
    name: "RentalX",
    description:
      "A rental management platform that helps users browse, book, and manage rental properties with a modern interface and GraphQL-powered API integration.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Next.js", color: "pink-text-gradient" },
      { name: "GraphQL API", color: "blue-text-gradient" },
    ],
    image: rentalX,
    source_code_link: "https://rental-e9zp2lfn5-iqbalmashals-projects.vercel.app/",
    live_project_link: "https://rental-x-swart.vercel.app/",
  },
  {
    name: "Open Sera",
    description:
      "An AI assistant built with OpenAI integration, designed to provide intelligent responses, automate tasks, and enhance productivity within a clean Next.js interface.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "Next.js", color: "pink-text-gradient" },
      { name: "Open AI", color: "blue-text-gradient" },
    ],
    image: open_sera,
    source_code_link: "https://github.com/IqbalMashal/Open-Sera/tree/main/open-sera",
    live_project_link: "https://open-sera.vercel.app",
  },
  {
    name: "Python Chat Bot",
    description:
      "A conversational AI chatbot built with Python and OpenAI, using UV package manager for streamlined dependency management and deployment.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "UV Package Manager", color: "green-text-gradient" },
      { name: "Open AI", color: "pink-text-gradient" },
    ],
    image: pythonchatBot,
    source_code_link: "https://github.com/IqbalMashal/PythonAIProjects/tree/main/openAiwithPython",
    live_project_link: "https://github.com/IqbalMashal/PythonAIProjects/tree/main/openAiwithPython",
  },
  {
    name: "Metropolitan Museum",
    description:
      "A full-stack museum collection app that allows users to explore art pieces with authentication, secure JWT tokens, and a RESTful API backend.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "RESTful API", color: "green-text-gradient" },
      { name: "JWT Token", color: "pink-text-gradient" },
      { name: "Bootstrap", color: "green-text-gradient" },
      { name: "Express.js", color: "pink-text-gradient" },
      { name: "MongoDB", color: "blue-text-gradient" },
    ],
    image: museum,
    source_code_link: "https://web-422-ecru.vercel.app/",
    live_project_link: "https://web-422-ecru.vercel.app/",
  },
  {
    name: "Toyota Database",
    description:
      "A relational SQL database project designed for Toyota sales operations, showcasing structured queries, relationships, and data management for real-world business scenarios.",
    tags: [
      { name: "SQL", color: "blue-text-gradient" },
    ],
    image: toyotaSQl,
    source_code_link: "https://github.com/IqbalMashal/Toyota_Database_forSales",
    live_project_link: "https://github.com/IqbalMashal/Toyota_Database_forSales",
  },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Iqbal for his outstanding technical proficiency and professional approach as a System Support specialist at Mackenzie Hospital. His deep knowledge of iPad systems and troubleshooting abilities were instrumental in ensuring seamless operations and user satisfaction. Iqbal's proactive attitude and problem-solving skills made him a reliable asset to our team, and he consistently exceeded expectations in resolving complex issues. I have no hesitation in endorsing him for any tech-related position, as I am confident he will excel in any challenge he takes on.",
    name: "Feda Abukhadrah, BIT | SaaS | Health Tech | MDM | ABM | POS | ITIL®V4 | CompTIA A+",
    designation: "Senior Service Desk Specialist",
    company: "Px Solutions LTD.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

export {
  services,
  technologies,
  itTools,
  designTools,
  experiences,
  extracurricular,
  projects,
  education,
  testimonials
};
