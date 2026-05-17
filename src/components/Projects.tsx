import { useEffect, useState, useCallback } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { PROJECT_IMAGE_MANIFESTS } from "../data/image-manifests";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiFirebase,
  SiGooglecloud,
  SiDocker,
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

function ProjectCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setIsTransitioning(false);
    }, 500);
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(goToNext, 2000);
    return () => clearInterval(interval);
  }, [goToNext, images.length]);

  if (images.length === 0) return null;

  const getSlideClass = (i: number) => {
    if (i === currentIndex) {
      return isTransitioning
        ? "opacity-0 -translate-x-[60px]"
        : "opacity-100 translate-x-0 pointer-events-auto";
    }
    if (i === (currentIndex + 1) % images.length && isTransitioning) {
      return "opacity-100 translate-x-0";
    }
    return "opacity-0 translate-x-[60px]";
  };

  return (
    <div className="relative w-full h-60 overflow-hidden rounded-xl bg-[var(--bg-secondary)]">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${alt} - ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out pointer-events-none ${getSlideClass(i)}`}
          loading="lazy"
        />
      ))}
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "Growgle – AI Geopolitical Career Intelligence Platform",
      year: 2025,
      images: "growgle",
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
      images: "soil2sale",
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
      images: "pass",
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
      images: "medconnect",
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
      images: "lab",
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
      title: "First Path PAAS – Official Startup Website",
      year: 2025,
      images: "first-path",
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
    {
      title: "Learn and Exchange Platform",
      year: 2025,
      images: "",
      liveUrl: "https://skill-exchange-platform-nu.vercel.app/",
      githubUrl:
        "https://github.com/Adithya-Monish-Kumar-K/Learn-and-Exchange-Platform",
      tech: [{ id: 1, name: "TypeScript", icon: <SiTypescript /> }],
      description:
        "A collaborative skill-exchange ecosystem enabling users to teach, learn, and connect through structured knowledge-sharing workflows.",
    },
    {
      title: "Sociogram v2",
      year: 2025,
      images: "sociogram-v2",
      liveUrl: "https://sociogram-v2.onrender.com/",
      githubUrl: "https://github.com/Raamprathap/Sociogram-v2",
      tech: [
        { id: 1, name: "React", icon: <SiReact /> },
        { id: 2, name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { id: 3, name: "Node.js", icon: <SiNodedotjs /> },
        { id: 4, name: "Express.js", icon: <SiExpress /> },
        { id: 5, name: "MongoDB", icon: <SiMongodb /> },
        { id: 6, name: "TypeScript", icon: <SiTypescript /> },
      ],
      description:
        "The second-generation full-stack version of Sociogram, rebuilt with a custom Node.js + Express backend and MongoDB database. Features real-time messaging via WebSockets, image uploads, secure authentication, and a scalable modular architecture.",
    },
    {
      title: "Sociogram v1",
      year: 2025,
      images: "sociogram-v1",
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
      title: "DeepSeek PDF Assistant",
      year: 2025,
      images: "",
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
      images: "",
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
      images: "bsi",
      liveUrl: "https://birds-species-classifier.onrender.com/",
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
      images: "",
      liveUrl: "",
      githubUrl: "https://github.com/Raamprathap/HairFastGAN",
      tech: [
        { id: 1, name: "GANs", icon: <FaBrain /> },
        { id: 2, name: "Deep Learning", icon: <FaBrain /> },
      ],
      description:
        "Implementation study of HairFastGAN for virtual hairstyle fitting, exploring generative adversarial networks for image transformation tasks.",
    },
    {
      title: "Ria Photography",
      year: 2024,
      images: "ria-photography",
      liveUrl: "https://ria-photography.onrender.com/",
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
      images: "kitchenGPT",
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
      images: "music-bridge",
      liveUrl: "https://music-bridge-three.vercel.app/",
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
      images: "calc",
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

  return (
    <>
      <div className="text-center mt-8 mb-4">
        <h1 className="text-5xl text-[var(--text-primary)] kaushan-script-regular">
          Projects
        </h1>
      </div>
      <div></div>
      <div className="flex flex-wrap md:gap-4 justify-center">
        {projects.map((project, idx) => {
          const slideImages = project.images
            ? PROJECT_IMAGE_MANIFESTS[project.images] ?? []
            : [];

          return (
            <CardContainer className="inter-var" key={idx}>
              <CardBody className="bg-[var(--bg-card)] relative group/card border-[var(--border-secondary)] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <div className="flex justify-between items-center mb-2">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-[var(--text-primary)]"
                  >
                    {project.title}
                  </CardItem>
                  <span className="text-sm text-[var(--text-tertiary)]">
                    {project.year}
                  </span>
                </div>
                <CardItem translateZ="100" className="w-full mt-2">
                  {slideImages.length > 1 ? (
                    <ProjectCarousel
                      images={slideImages}
                      alt={project.title}
                    />
                  ) : (
                    <img
                      src={
                        slideImages.length === 1
                          ? slideImages[0]
                          : ""
                      }
                      height="240"
                      width="400"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={project.title}
                    />
                  )}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-[var(--text-secondary)] text-sm max-w-sm mt-4"
                >
                  {project.description}
                </CardItem>
                <div className="flex flex-row items-center justify-end mb-10 w-full mt-15">
                  <AnimatedTooltip items={project.tech} />
                </div>
                <div className="flex justify-between items-center mt-8">
                  {project.liveUrl != "" && (
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={project.liveUrl}
                      target="_blank"
                      className="px-4 py-2 rounded-xl text-xs text-[var(--text-primary)] font-normal underline"
                    >
                      Live Demo →
                    </CardItem>
                  )}
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={project.githubUrl}
                    target="_blank"
                    className="px-4 py-2 rounded-xl bg-[var(--button-primary-bg)] text-[var(--button-primary-text-hover)] text-xs font-bold"
                  >
                    GitHub
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          );
        })}
      </div>
    </>
  );
}
