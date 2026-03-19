import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiFirebase,
  SiGooglecloud,
  SiDocker,
  SiVite,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiExpress,
  SiMongodb,
  SiPython,
  SiStreamlit,
  SiOpencv,
  SiTensorflow,
  SiKeras,
  SiJavascript,
  SiVercel,
  SiHtml5,
  SiCss3,
  SiFlask,
} from "react-icons/si";

import { TbVector, TbMath } from "react-icons/tb";
import { FaBrain } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
// import { useState } from "react";

export default function Projects() {
  const projects = [
    {
      title: "Growgle – AI Geopolitical Career Intelligence Platform",
      year: 2025,
      image: "/projects/growgle.png",
      liveUrl: "https://growgle.vercel.app/",
      githubUrl: "https://github.com/Growgle",
      tech: [
        { id: 1, name: "Next.js", icon: <SiNextdotjs /> },
        { id: 2, name: "Node.js", icon: <SiNodedotjs /> },
        { id: 3, name: "Firebase", icon: <SiFirebase /> },
        { id: 4, name: "GCP", icon: <SiGooglecloud /> },
        { id: 5, name: "Docker", icon: <SiDocker /> },
        { id: 6, name: "Generative AI", icon: <GiArtificialIntelligence /> },
        { id: 7, name: "Playwright", icon: <TbVector /> },
      ],
      description:
        "A distributed AI-driven career intelligence ecosystem integrating embeddings, live news ingestion, sentiment analysis, and browser automation agents to deliver geopolitical career insights.",
    },

    {
      title: "Soil2Sale",
      year: 2026,
      image: "/projects/soil2sale.png",
      liveUrl: "https://se-frontend-sage.vercel.app/",
      githubUrl: "https://github.com/Soil2Sale",
      tech: [
        { id: 1, name: "TypeScript", icon: <SiTypescript /> },
        { id: 2, name: "React", icon: <SiReact /> },
        { id: 3, name: "Node.js", icon: <SiNodedotjs /> },
        { id: 4, name: "Express.js", icon: <SiExpress /> },
        { id: 5, name: "MongoDB", icon: <SiMongodb /> },
      ],
      description:
        "A scalable full-stack agricultural marketplace connecting farmers and buyers through real-time dashboards, transaction workflows, and backend-driven listing management.",
    },

    {
      title: "Post-Accident Alert System (Startup Idea)",
      year: 2024,
      image: "/projects/paas.png",
      liveUrl: "https://paas-sos.vercel.app/",
      githubUrl:
        "https://github.com/Raamprathap/Post-Accident-Alert-System-Backend",
      tech: [
        { id: 1, name: "Node.js", icon: <SiNodedotjs /> },
        { id: 2, name: "Express.js", icon: <SiExpress /> },
        { id: 3, name: "WebSockets", icon: <TbVector /> },
        { id: 4, name: "React", icon: <SiReact /> },
      ],
      description:
        "A startup-oriented real-time accident detection and emergency broadcast system leveraging WebSockets and REST APIs to notify nearby hospitals instantly.",
    },

    {
      title: "MedConnect",
      year: 2026,
      image: "/projects/medconnect.png",
      liveUrl: "https://medconnectlive.vercel.app/",
      githubUrl: "https://github.com/Syntax-Errors-Medconnect",
      tech: [
        { id: 1, name: "React", icon: <SiReact /> },
        { id: 2, name: "TypeScript", icon: <SiTypescript /> },
        { id: 3, name: "Node.js", icon: <SiNodedotjs /> },
        { id: 4, name: "Express.js", icon: <SiExpress /> },
      ],
      description:
        "A healthcare coordination platform enabling patient-doctor communication, documentation workflows, and appointment management via secure full-stack architecture.",
    },
    {
      title: "Lab Components Tracker",
      year: 2025,
      image: "/projects/labcomponents.png",
      liveUrl: "https://amuda-lab.vercel.app/",
      githubUrl: "https://github.com/knightempire",
      tech: [
        { id: 1, name: "React", icon: <SiReact /> },
        { id: 2, name: "Node.js", icon: <SiNodedotjs /> },
        { id: 3, name: "JavaScript", icon: <SiJavascript /> },
      ],
      description:
        "A laboratory inventory management system designed to track electronic components and optimize internal asset management workflows.",
    },
    {
      title: "Sociogram v1",
      year: 2025,
      image: "",
      liveUrl: "https://sociogram-v1.onrender.com/",
      githubUrl: "https://github.com/Raamprathap/Sociogram-v1",
      tech: [
        { id: 1, name: "React", icon: <SiReact /> },
        { id: 2, name: "Firebase", icon: <SiFirebase /> },
        { id: 3, name: "JavaScript", icon: <SiJavascript /> },
      ],
      description:
        "The first version of Sociogram, a real-time social media chat platform built with React and Firebase. Implemented authentication, Firestore-based live messaging, and user-based message synchronization.",
    },

    {
      title: "Sociogram v2",
      year: 2025,
      image: "",
      liveUrl: "https://sociogram-v2.onrender.com/",
      githubUrl: "https://github.com/Raamprathap/Sociogram-v2",
      tech: [
        { id: 1, name: "React", icon: <SiReact /> },
        { id: 2, name: "Vite", icon: <SiVite /> },
        { id: 3, name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { id: 4, name: "Node.js", icon: <SiNodedotjs /> },
        { id: 5, name: "Express.js", icon: <SiExpress /> },
        { id: 6, name: "MongoDB", icon: <SiMongodb /> },
        { id: 7, name: "TypeScript", icon: <SiTypescript /> },
      ],
      description:
        "The second-generation full-stack version of Sociogram, rebuilt with a custom Node.js + Express backend and MongoDB database. Features real-time messaging via WebSockets, image uploads, secure authentication, and a scalable modular architecture.",
    },

    {
      title: "First Path PAAS – Official Startup Website",
      year: 2025,
      image: "/projects/first-path.png",
      liveUrl: "http://first-path.vercel.app/",
      githubUrl: "https://github.com/Raamprathap/First-Path-PAAS",
      tech: [
        { id: 1, name: "React", icon: <SiReact /> },
        { id: 2, name: "TypeScript", icon: <SiTypescript /> },
        { id: 3, name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
      description:
        "The official website of First Path Health Solutions, designed and developed to showcase startup vision, services, and product offerings through a modern, responsive, and performance-optimized frontend architecture.",
    },

    // ===================== AI & ML PROJECTS =====================

    {
      title: "DeepSeek PDF Assistant",
      year: 2025,
      image: "",
      liveUrl: "",
      githubUrl: "https://github.com/Raamprathap/DeepSeek-PDF-Assistant",
      tech: [
        { id: 1, name: "Python", icon: <SiPython /> },
        { id: 2, name: "LangChain", icon: <TbVector /> },
        { id: 3, name: "FAISS", icon: <TbVector /> },
        { id: 4, name: "Streamlit", icon: <SiStreamlit /> },
      ],
      description:
        "An AI-powered semantic document assistant that converts PDFs into embeddings and enables contextual question-answering using vector similarity search.",
    },

    {
      title: "UAV Face Recognition",
      year: 2025,
      image: "",
      liveUrl: "",
      githubUrl: "https://github.com/Raamprathap/UAV-Face_Recognition",
      tech: [
        { id: 1, name: "Python", icon: <SiPython /> },
        { id: 2, name: "OpenCV", icon: <SiOpencv /> },
        { id: 3, name: "Deep Learning", icon: <FaBrain /> },
      ],
      description:
        "A drone-integrated face recognition system combining computer vision pipelines with deep neural networks for aerial identity detection.",
    },

    {
      title: "Bird Species Classifier",
      year: 2024,
      image: "",
      liveUrl: "",
      githubUrl: "https://github.com/Raamprathap/Birds-Species-Classifier",
      tech: [
        { id: 1, name: "TensorFlow", icon: <SiTensorflow /> },
        { id: 2, name: "Keras", icon: <SiKeras /> },
        { id: 3, name: "Flask", icon: <SiFlask /> },
      ],
      description:
        "A CNN-based image classifier trained on bird datasets and deployed via Flask to deliver real-time species predictions.",
    },

    {
      title: "HairFastGAN (Research Implementation)",
      year: 2025,
      image: "",
      liveUrl: "",
      githubUrl: "https://github.com/Raamprathap/HairFastGAN",
      tech: [
        { id: 1, name: "GANs", icon: <FaBrain /> },
        { id: 2, name: "Deep Learning", icon: <FaBrain /> },
      ],
      description:
        "Implementation study of HairFastGAN for virtual hairstyle fitting, exploring generative adversarial networks for image transformation tasks.",
    },

    // ===================== PRODUCT & WEB PROJECTS =====================
    {
      title: "Learn and Exchange Platform",
      year: 2025,
      image: "",
      liveUrl: "",
      githubUrl:
        "https://github.com/Adithya-Monish-Kumar-K/Learn-and-Exchange-Platform",
      tech: [{ id: 1, name: "TypeScript", icon: <SiTypescript /> }],
      description:
        "A collaborative skill-exchange ecosystem enabling users to teach, learn, and connect through structured knowledge-sharing workflows.",
    },
    {
      title: "Ria Photography",
      year: 2024,
      image: "",
      liveUrl: "",
      githubUrl: "https://github.com/Raamprathap/Ria-Photography",
      tech: [
        { id: 1, name: "HTML", icon: <SiHtml5 /> },
        { id: 2, name: "CSS", icon: <SiCss3 /> },
        { id: 3, name: "JavaScript", icon: <SiJavascript /> },
        { id: 4, name: "Flask", icon: <SiFlask /> },
      ],
      description:
        "A studio showcase website with integrated booking workflows storing appointment data via Google Sheets.",
    },
    {
      title: "KitchenGPT",
      year: 2025,
      image: "",
      liveUrl: "",
      githubUrl: "https://github.com/Raamprathap/KitchenGPT",
      tech: [
        { id: 1, name: "JavaScript", icon: <SiJavascript /> },
        { id: 2, name: "Node.js", icon: <SiNodedotjs /> },
      ],
      description:
        "An AI-powered culinary assistant generating intelligent recipe suggestions and ingredient optimizations using prompt-based logic.",
    },
    {
      title: "Music Bridge",
      year: 2025,
      image: "",
      liveUrl: "",
      githubUrl: "https://github.com/Raamprathap/Music-Bridge",
      tech: [
        { id: 1, name: "React", icon: <SiReact /> },
        { id: 2, name: "TypeScript", icon: <SiTypescript /> },
        { id: 3, name: "Vercel", icon: <SiVercel /> },
      ],
      description:
        "An interactive web platform designed to help children develop habits through music-based learning experiences.",
    },
    {
      title: "Scientific Calculator",
      year: 2024,
      image: "/projects/calc.png",
      liveUrl: "https://scientific-calculator-nine-blush.vercel.app/",
      githubUrl: "https://github.com/Raamprathap/Scientific-Calculator",
      tech: [
        { id: 1, name: "HTML", icon: <SiHtml5 /> },
        { id: 2, name: "CSS", icon: <SiCss3 /> },
        { id: 3, name: "JavaScript", icon: <SiJavascript /> },
        { id: 4, name: "Mathematical Logic", icon: <TbMath /> },
      ],
      description:
        "A fully functional scientific calculator built using JavaScript, supporting advanced mathematical operations, real-time expression evaluation, and responsive UI interactions.",
    },
  ];
  // const [updating, setUpdating] = useState(true);

  return (
    <>
      {/* {updating && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 backdrop-blur-lg bg-[var(--bg-secondary)]/40"></div>
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <CardContainer className="inter-var w-full max-w-lg">
              <CardBody className="bg-[var(--bg-card)] relative group/card border border-[var(--border-secondary)] rounded-2xl p-8 text-center shadow-xl">
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-[var(--text-primary)] mb-3"
                >
                  Projects Page Is Being Updated
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="40"
                  className="text-[var(--text-secondary)]"
                >
                  I am reconstructing this page with the latest work. Please
                  check back soon, or explore more on GitHub.
                </CardItem>
                <div className="mt-6">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href="https://github.com/Raamprathap?tab=repositories"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white font-semibold transition-transform duration-200 hover:scale-105"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    View GitHub
                  </CardItem>
                </div>

                <div className="mt-4">
                  <button
                    onClick={() => setUpdating(false)}
                    className="text-sm text-[var(--text-secondary)] underline hover:text-[var(--text-primary)] cursor-pointer"
                  >
                    Still wanna Check it out?
                  </button>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      )} */}

      <div className="text-center mt-8 mb-4">
        <h1 className="text-5xl text-[var(--text-primary)] kaushan-script-regular">
          Projects
        </h1>
      </div>
      <div className="flex flex-wrap md:gap-4 justify-center">
        {projects.map((project, idx) => (
          <CardContainer className="inter-var" key={idx}>
            <CardBody className="bg-[var(--bg-card)] relative group/card  border-[var(--border-secondary)] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              {" "}
              {/*dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2]*/}
              <div className="flex justify-between items-center mb-2">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-[var(--text-primary)]" /*dark:text-white*/
                >
                  {project.title}
                </CardItem>
                <span className="text-sm text-[var(--text-tertiary)]">
                  {project.year}
                </span>{" "}
                {/*dark:text-gray-400*/}
              </div>
              <CardItem translateZ="100" className="w-full mt-2">
                <img
                  src={project.image}
                  height="240"
                  width="400"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={project.title}
                />
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-[var(--text-secondary)] text-sm max-w-sm mt-4" /*dark:text-neutral-300*/
              >
                {project.description}
              </CardItem>
              <div className="flex flex-row items-center justify-end mb-10 w-full mt-15">
                <AnimatedTooltip items={project.tech} />
              </div>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="a"
                  href={project.liveUrl}
                  target="_blank"
                  className="px-4 py-2 rounded-xl text-xs text-[var(--text-primary)] font-normal underline" /*dark:text-white*/
                >
                  Live Demo →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="a"
                  href={project.githubUrl}
                  target="_blank"
                  className="px-4 py-2 rounded-xl bg-[var(--button-primary-bg)] text-[var(--button-primary-text-hover)] text-xs font-bold" /*dark:bg-white dark:text-black*/
                >
                  GitHub
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  );
}
