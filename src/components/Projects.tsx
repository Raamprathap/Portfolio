import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSocketdotio,
  SiPython,
  SiFlask,
  SiTensorflow,
  SiKeras,
} from "react-icons/si";

export default function Projects() {
    const projects = [
      {
        title: "Sociogram‑v2",
        year: 2025,
        image: "assets/proj1.jpg",
        liveUrl: "https://sociogram-v2.onrender.com/",
        githubUrl: "https://github.com/Raamprathap/Sociogram-v2",
        tech: [
          { id: 1, name: "React",       icon: <SiReact /> },
          { id: 2, name: "Vite",        icon: <SiVite /> },
          { id: 3, name: "Tailwind",    icon: <SiTailwindcss /> },
          { id: 4, name: "Node.js",     icon: <SiNodedotjs /> },
          { id: 5, name: "Express.js",  icon: <SiExpress /> },
        ],
        description:
          "Sociogram v2 is a modern chat application that allows users to send text messages and images to registered users via email authentication. Built with React, Node.js, and MongoDB, it offers real‑time messaging, secure authentication, and cloud‑based image storage for a seamless communication experience.",
      },
      {
        title: "Sociogram‑v1",
        year: 2025,
        image: "assets/proj2.jpg",
        liveUrl: "https://sociogram-v1.onrender.com/",
        githubUrl: "https://github.com/Raamprathap/Sociogram-v1",
        tech: [
          { id: 1, name: "React",    icon: <SiReact /> },
          { id: 2, name: "Firebase", icon: <SiFirebase /> },
        ],
        description:
          "Sociogram is a social‑media style chat platform with secure sign‑in and real‑time messaging. Built with React and Firebase for auth and data, it offers a smooth interface and responsive performance.",
      },
      {
        title: "PAAS",
        year: 2024,
        image: "assets/proj3.jpg",
        liveUrl: "https://post-accident-alert-system.onrender.com",
        githubUrl:
          "https://github.com/Raamprathap/Post-Accident-Alert-System-Frontend",
        tech: [
          { id: 1, name: "HTML",              icon: <SiHtml5 /> },
          { id: 2, name: "CSS",               icon: <SiCss3 /> },
          { id: 3, name: "JavaScript",        icon: <SiJavascript /> },
          { id: 4, name: "Node.js",           icon: <SiNodedotjs /> },
          { id: 5, name: "Express.js",        icon: <SiExpress /> },
          { id: 6, name: "WebSocket (Socket.IO)", icon: <SiSocketdotio /> },
        ],
        description:
          "Post Accident Alert System is a real‑time road‑safety platform for clients, drivers, and hospitals. It features live dashboards, automated alerts, and real‑time tracking to ensure faster emergency response.",
      },
      {
        title: "Ria Photography",
        year: 2024,
        image: "assets/proj4.jpg",
        liveUrl: "https://ria-photography.onrender.com",
        githubUrl: "https://github.com/Raamprathap/Ria-Photography",
        tech: [
          { id: 1, name: "HTML",      icon: <SiHtml5 /> },
          { id: 2, name: "CSS",       icon: <SiCss3 /> },
          { id: 3, name: "JavaScript",icon: <SiJavascript /> },
          { id: 4, name: "Python",    icon: <SiPython /> },
          { id: 5, name: "Flask",     icon: <SiFlask /> },
        ],
        description:
          "RIA Photography is a studio site with an interactive gallery and booking system. Built with HTML, CSS, JavaScript, and Flask, it stores bookings in Google Sheets for easy client management.",
      },
      {
        title: "Bird‑Species‑Classifier",
        year: 2024,
        image: "assets/proj5.jpg",
        liveUrl: "https://birds-species-classifier.onrender.com",
        githubUrl: "https://github.com/Raamprathap/Birds-Species-Classifier",
        tech: [
          { id: 1, name: "HTML",        icon: <SiHtml5 /> },
          { id: 2, name: "CSS",         icon: <SiCss3 /> },
          { id: 3, name: "JavaScript",  icon: <SiJavascript /> },
          { id: 4, name: "Python",      icon: <SiPython /> },
          { id: 5, name: "Flask",       icon: <SiFlask /> },
          { id: 6, name: "TensorFlow",  icon: <SiTensorflow /> },
          { id: 7, name: "Keras",       icon: <SiKeras /> },
        ],
        description:
          "A web app that classifies bird species from images using a deep‑learning model. Trained with TensorFlow/Keras and deployed via Flask, it lets users upload an image and returns the predicted species.",
      },
    ];
  return (
        <>
            <div className="text-center mt-8 mb-4">
                <h1 className="text-5xl text-gray-800 kaushan-script-regular">Projects</h1>
            </div>
            <div className="flex flex-wrap md:gap-4 justify-center">
                {projects.map((project, idx) => (
                    <CardContainer className="inter-var" key={idx}>
                        <CardBody className="bg-gradient-to-b from-yellow-50 to-yellow-200 relative group/card  border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"> {/*dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2]*/}
                            <div className="flex justify-between items-center mb-2">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600" /*dark:text-white*/
                                >
                                    {project.title}
                                </CardItem>
                                <span className="text-sm text-gray-500">{project.year}</span> {/*dark:text-gray-400*/}
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
                                className="text-neutral-500 text-sm max-w-sm mt-4" /*dark:text-neutral-300*/
                            >
                                {project.description}
                            </CardItem>

                            <div className="flex flex-row items-center justify-end mb-10 w-full mt-15">
                                <AnimatedTooltip items={project.tech}/>
                            </div>
                            
                            <div className="flex justify-between items-center mt-8">
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href={project.liveUrl}
                                    target="_blank"
                                    className="px-4 py-2 rounded-xl text-xs text-black font-normal underline" /*dark:text-white*/
                                >
                                    Live Demo →
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href={project.githubUrl}
                                    target="_blank"
                                    className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold" /*dark:bg-white dark:text-black*/
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