import { motion, AnimatePresence } from "framer-motion";
import { FloatingDock } from "./ui/floating-dock";
import { Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    "Full-Stack Developer",
    "Machine Learning Engineer",
    "UI/UX Enthusiast",
    "Problem Solver",
    "Tech Innovator",
    "Open Source Contributor",
  ];

  const links = [
    {
      title: "LinkedIn",
      icon: <Linkedin className="h-full w-full text-[var(--dock-icon)]" />,
      href: "https://www.linkedin.com/in/raamprathap-rajarathinam/",
    },
    {
      title: "GitHub",
      icon: <Github className="h-full w-full text-[var(--dock-icon)]" />,
      href: "https://github.com/Raamprathap",
    },
    {
      title: "Instagram",
      icon: <Instagram className="h-full w-full text-[var(--dock-icon)]" />,
      href: "https://www.instagram.com/_.raam._17",
    },
    {
      title: "Email",
      icon: <Mail className="h-full w-full text-[var(--dock-icon)]" />,
      href: "mailto:raamprathap17242@gmail.com",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full z-20 bg-[var(--bg-primary)] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[var(--bg-primary)] to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 -pt-4 pb-18 flex items-center justify-center min-h-screen">
        <motion.div
          className="w-full max-w-4xl shadow-[0_-10px_25px_-5px_rgba(255,255,255,0.1),_-10px_0_25px_-5px_rgba(255,255,255,0.1),_10px_0_25px_-5px_rgba(255,255,255,0.1)] rounded-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl shadow-white/10">
            <motion.div
              className="relative h-48 md:h-64 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src="/assets/banner.jpg"
                alt="Banner"
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{ zIndex: 0 }}
              />
            </motion.div>

            <div className="relative px-6 md:px-12 pb-8">
              <div className="flex justify-between items-start -mt-20 ">
                <motion.div
                  className="relative"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.3,
                  }}
                >
                  <div className="relative inline-block">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-gray-900 overflow-hidden bg-gradient-to-br from-gray-900 to-black shadow-2xl">
                      <img
                        src="/assets/profile.png"
                        alt="Profile"
                        className="w-full h-full object-cover object-[50%_25%]"
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-12"
                >
                  <FloatingDock items={links} desktopClassName="w-fit" />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-6"
              >
                <h1 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-2 tracking-tight">
                  Raam Prathap Rajarathinam
                </h1>

                <div className="flex items-center gap-2 mb-3">
                  <div className="h-8 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={roleIndex}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500 bg-clip-text text-transparent"
                      >
                        {roles[roleIndex]}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[var(--text-tertiary)] mb-4">
                  <MapPin className="w-4 h-4" />
                  <p className="text-sm md:text-base">
                    Student at Amrita Vishwa Vidyapeetham • Coimbatore, Tamil
                    Nadu, India
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-2 p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30"
              >
                <h3 className="text-lg font-semibold text-[var(--text-secondary)] mb-3">
                  About Me
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base">
                  Passionate computer science student with a strong foundation
                  in full-stack development and machine learning. I thrive on
                  building innovative solutions that bridge the gap between
                  complex technology and intuitive user experiences. With
                  expertise in modern web frameworks, AI integration, and a keen
                  eye for design, I'm dedicated to creating impactful digital
                  experiences that solve real-world problems.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <a
                  href="mailto:raamprathap17242@gmail.com"
                  className="flex-1 min-w-[150px] px-6 py-3 bg-[var(--button-primary-bg)] hover:bg-[var(--button-primary-hover)] text-[var(--text-primary)] font-semibold rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-blue-500/50"
                >
                  Get In Touch
                </a>
                <a
                  href="#projects"
                  className="flex-1 min-w-[150px] px-6 py-3 bg-[var(--bg-tertiary)] hover:bg-gray-700 text-[var(--text-primary)] font-semibold rounded-xl transition-all duration-300 text-center border border-[var(--border-primary)]"
                >
                  View Projects
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
