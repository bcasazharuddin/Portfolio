export type WorkExperieceType = {
  company: string,
  position: string,
  duration: string,
  description: string[],
  website: string
}


export const techStack = [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "mySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Jenkins",
      icon: "https://cdn.jsdelivr.net/gh/jenkins-infra/jenkins.io@master/content/images/logos/jenkins/jenkins.svg",
    }
  ];


export const projectData = [
  {
    title: "TOURS BOOKING SYSTEM",
    desciption: "The project creates an intuitive full-stack platform for users to explore, review, and book tour packages online.",
    image: '/tour.png',
    tags: ['reactjs', 'nodejs', 'mongodb','reactstrap','express'],
    githubLink: "https://github.com/bcasazharuddin/tours_booking_frontend",
    liveLink: "https://tours-booking-frontend.vercel.app/"
  },
  {
    title: "AI Course Genrator ",
    desciption: "The Full Stack AI Course Generator allows users to create and explore AI courses with dynamic features.",
    image:'/ai_course.png',
    tags: ['nextjs', 'TailwindCss','Shadcn', 'Drizzle', 'Postgresql','Firebase'],
    githubLink: "https://github.com/bcasazharuddin/ai_course_generator",
    liveLink: "https://ai-course-generator-project.vercel.app/"
  },
 
]

export const WorkExperience = [
  {
    company: "Faircent (Fairassets technologies india pvt. ltd.)",
    position: "Software Developer",
    duration: "July 2023 - October 2024",
    description: [
      "Developed multiple APIs for payment details, EMI, foreclosure, SOA, communication logs, professional details, guarantor details, credit reports, and search functionality.",
      "Implemented Redis for data caching and developed an API overview page, resulting in a 40% improvement in overall application performance.",
      "Developed and integrated an address model, role access permission module, and a logout module.",
      "Integrate Aadhaar masking APIs using third-party vendors, DigitApp and IDC platforms, improving data security of user records.",
      "Enhanced the system by adding email and disbursement verification, creating an agreement PDF, developing a withdrawal welcome mailer API, implementing a loan eligibility function, and designing the Arthum lead tracker page.",
      "Built the backend for a career portal.",
      "Developed APIs for registering institutes, NRIs (Non-Resident Indians), and HUFs (Hindu Undivided Families).",
      "Implemented C-KYC process with search, download, and upload functionality. For entries not found via PAN, upload the data to C-KYC Portal.",
      "Developed a fraud detection system, capturing suspicious activity by identifying and flagging high-risk users and aid the RBI",
      "Integrated Cashfree and Karza APIs to verify 1,00,000+ user bank accounts, streamlining validation and enhancing data accuracy."
    ],
    website: "https://faircent.com"
  },
  {
    company: "Faircent  (Fairassets technologies india pvt. ltd.)",
    position: "Software Developer Intern",
    duration: "Jan 2023 - June 2023",
    description: [
      "Developed a user registration and validation portal to enhance the efficiency of loan disbursement procedures.",
      "Created and implemented Agreement and NOC PDF templates to streamline loan process documentation.",
      "Designed a Pool page to showcase the company’s wallet balance and transaction history.",
      "Established a comprehensive user notification system with email alerts to ensure transparency in the loan disbursement process.",
      "Developed a module to save and display admin activity and user journey logs for administrative oversight."
    ],
    website: "https://faircent.com"
  },
]