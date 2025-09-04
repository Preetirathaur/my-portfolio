// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import mcLogo from './assets/tech_logo/mc.png';


// Experience Section Logo's
import DevsecOps from './assets/company_logo/DevsecOps.jpeg';
import ProdigiInfotech from './assets/company_logo/ProdigiInfotech.jpeg';


// Education Section Logo's
import InvertisLogo from './assets/education_logo/Invertislogo.jpeg';
import GtiLogo from './assets/education_logo/GtiLogo.jpeg';
import svmiLogo from './assets/education_logo/svmiLogo.jpeg';
import JICLogo from './assets/education_logo/JICLogo.jpeg';

// Project Section Logo's

import drserenaBlake from './assets/work_logo/Dr.serena-Blake.jpeg';
import VoiceNote from './assets/work_logo/Voice-note.jpeg';
import JsonSchemaBuilder from './assets/work_logo/Json-schema-builder.jpeg';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
     
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
     { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Compass', logo: mcLogo },
      
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: DevsecOps,
      role: "Frontend Developer",
      company: "DevSecOps Softwares Pvt Ltd",
      date: "july 2024 - jan 2025",
      desc: "Built a responsive user interface using React and Tailwind CSS, increasing engagement by 35%, Designed key pages like Homepage, Courses, Profile, and Blog, improving navigation by 40%, Developed a real-time progress tracker, leading to a 45% boost in course completions.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Tailwind CSS",
        "MongoDb"
        ],
    },
    {
      id: 1,
      img: ProdigiInfotech,
      role: "Web developer",
      company: "Prodigy InfoTech",
      date: "Oct 2024 - Nov 2024",
      desc: "Implemented a referral system and enhanced UI components using React.js, resulting in a 30% increase in user referrals , Participated in sprint planning and conducted paired programming, reducing delivery time by 20% and improving code quality",
      skills: [
        "ReactJS",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
       
      ],
    },
    
  ];
  
  export const education = [
    {
      id: 0,
      img: InvertisLogo,
      school: "Invertis University, Bareilly",
      date: "2021 - 2024",
      grade: "8 CGPA",
      desc: "I have completed my Graduation's degree (BTECH) in Computer Scince and engineering from Invertis University, Bareilly. During my time at Invertis University, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Invertis University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Graduation of Computer Science and Engineering - BTECH",
    },
    {
      id: 1,
      img: GtiLogo,
      school: "Government Polytechnic, Shahjahanpur",
      date: "2018 -2021",
      grade: "84%",
      desc: "I completed my Diploma in Electronics Engineering from Government Polytechnic, Shahjahanpur, where I gained a solid foundation in electronics and technology. During my time there, I explored various technical subjects that enhanced my understanding of computing systems and electronic components. I also had the opportunity to work on hands-on projects that applied theoretical knowledge to real-world scenarios, helping me develop practical problem-solving skills and a deeper interest in engineering and innovation.",
      degree: "Diploma- ECE (Electronics Engineering)",
    },
    {
      id: 2,
      img: svmiLogo,
      school: "S.V.M.I. College Gola Gokarannath Kheri, UP",
      date: "2017 - 2018",
      grade: "74.4%",
      desc: "I completed my Class 12 education from S.V.M.I. College, under the U.P. Board, with a focus on Physics, Chemistry, and Mathematics (PCM). This academic background strengthened my analytical and problem-solving skills, laying a strong foundation for my further studies in engineering and technical fields..",
      degree: "UP Board(XII) - PCM",
    },
    {
      id: 3,
      img: JICLogo,
      school: "Janta Inter College Aliganj Kheri, UP",
      date: "2015 - 2016",
      grade: "88.5%",
      desc: "I completed my Class 10 education from Janta Inter College, located in Aliganj, Kheri, Uttar Pradesh, under the U.P. Board. During this time, I pursued Science as my main stream and developed a strong foundation in core subjects. One of my most significant achievements was securing the top position in my college in the Class 10 board exams. Being the college topper was a proud and memorable moment for me, as it reflected my hard work, dedication, and consistency. This accomplishment continues to inspire me to aim higher and stay focused on my academic and professional goals.. ",
      degree: "UP Board(X), Science",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Voice Note",
      description:
        "Developed a web app using HTML, CSS, and JavaScript to convert voice input into text with 95% accuracy, Integrated the Microwave Speech API for real-time speech recognition Added export functionality for transcripts in PNG and PDF formats, improving usability and flexibility for end users.",
      image:VoiceNote,
      tags: ["HTML", "CSS", "JavaScript", " Microwave speech API"],
      github: "https://github.com/Preetirathaur/Voice-note",
      webapp: "",
    },
    {
      id: 1,
      title: "Dr.Serena-Blake's website",
      description:
        "Designed and developed a fully responsive website using Next.js and Tailwind CSS for a fictional medical professional,Implemented features like FAQ section, contact form with validation, and SEO-friendly page structure Focused on clean UI, fast performance, and accessibility to ensure a seamless user experience across all devices ,Deployed on Vercel for reliable and scalable hosting",
      image:drserenaBlake,
      tags: ["React JS", "Next.js", "HTML", " Tailwind CSS", "javaScript"],
      github: "https://github.com/Preetirathaur/Dr.-Serena-Blake-Website",
      webapp: "https://dr-serena-blake-website-8z7a.vercel.app/",
    },
    {
      id: 2,
      title: "Json Schema builder",
      description:
        "A JSON Schema Builder lets users visually create, edit, and manage JSON schema structures with fields, types, nesting, and validation.",
      image: JsonSchemaBuilder,
      tags: ["React JS", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Preetirathaur/Json-schema-builder",
      webapp: "https://json-schema-builder-mu.vercel.app/",
    },   
   
    
  ];  