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

export const projects = [
  {
    title: "Sociogram-v2",
    year: 2025,
    image: "assets/proj1.jpg",
    liveUrl: "https://sociogram-v2.onrender.com/",
    githubUrl: "https://github.com/Raamprathap/Sociogram-v2",
    tech: [
      { id: 1, name: "React", icon: SiReact },
      { id: 2, name: "Vite", icon: SiVite },
      { id: 3, name: "Tailwind", icon: SiTailwindcss },
      { id: 4, name: "Node.js", icon: SiNodedotjs },
      { id: 5, name: "Express.js", icon: SiExpress },
    ],
    description:
      "Sociogram v2 is a modern chat application that allows users to send text messages and images to registered users via email authentication. Built with React, Node.js, and MongoDB, it offers real-time messaging, secure authentication, and cloud-based image storage for a seamless communication experience.",
  },
  {
    title: "Sociogram-v1",
    year: 2025,
    image: "assets/proj2.jpg",
    liveUrl: "https://sociogram-v1.onrender.com/",
    githubUrl: "https://github.com/Raamprathap/Sociogram-v1",
    tech: [
      { id: 1, name: "React", icon: SiReact },
      { id: 2, name: "Firebase", icon: SiFirebase },
    ],
    description:
      "Sociogram is a modern social media platform where users can sign in securely, and chat in real-time. Built with React for the frontend and Firebase for backend services like authentication and data storage, Sociogram offers a user-friendly interface and seamless performance. Whether connecting with friends or sharing moments, Sociogram provides a robust platform for social interaction.",
  },
  {
    title: "PAAS",
    year: 2024,
    image: "assets/proj3.jpg",
    liveUrl: "https://post-accident-alert-system.onrender.com",
    githubUrl:
      "https://github.com/Raamprathap/Post-Accident-Alert-System-Frontend",
    tech: [
      { id: 1, name: "HTML", icon: SiHtml5 },
      { id: 2, name: "CSS", icon: SiCss3 },
      { id: 3, name: "JavaScript", icon: SiJavascript },
      { id: 4, name: "Node.js", icon: SiNodedotjs },
      { id: 5, name: "Express.js", icon: SiExpress },
      { id: 6, name: "WebSocket (Socket.IO)", icon: SiSocketdotio },
    ],
    description:
      "Post Accident Alert System is a real-time road safety and emergency response platform for clients, drivers, and hospitals to manage accident alerts efficiently. It features interactive dashboards, automated alerts, and real-time tracking for quick emergency handling, ensuring faster response and improved road safety.",
  },
  {
    title: "Ria Photography",
    year: 2024,
    image: "assets/proj4.jpg",
    liveUrl: "https://ria-photography.onrender.com",
    githubUrl: "https://github.com/Raamprathap/Ria-Photography",
    tech: [
      { id: 1, name: "HTML", icon: SiHtml5 },
      { id: 2, name: "CSS", icon: SiCss3 },
      { id: 3, name: "JavaScript", icon: SiJavascript },
      { id: 4, name: "Python", icon: SiPython },
      { id: 5, name: "Flask", icon: SiFlask },
    ],
    description:
      "RIA Photography is a studio website showcasing stunning photography with a seamless booking system that stores user details in a Google Sheet. Built with HTML, CSS, JavaScript, and Flask, it offers a smooth user experience with an interactive gallery and a cinematic films section.",
  },
  {
    title: "Bird-Species-Classifier",
    year: 2024,
    image: "assets/proj5.jpg",
    liveUrl: "https://birds-species-classifier.onrender.com",
    githubUrl: "https://github.com/Raamprathap/Birds-Species-Classifier",
    tech: [
      { id: 1, name: "HTML", icon: SiHtml5 },
      { id: 2, name: "CSS", icon: SiCss3 },
      { id: 3, name: "JavaScript", icon: SiJavascript },
      { id: 4, name: "Python", icon: SiPython },
      { id: 5, name: "Flask", icon: SiFlask },
      { id: 6, name: "TensorFlow", icon: SiTensorflow },
      { id: 7, name: "Keras", icon: SiKeras },
    ],
    description:
      "This project is a Bird Species Classifier that uses a deep learning model to identify bird species from images. It is trained on a dataset of categorized bird images and deployed as a web application. Users can upload an image, and the model predicts the bird species. The system is built using TensorFlow/Keras for training and Flask for deployment, with the model hosted separately for efficient inference.",
  },
];
