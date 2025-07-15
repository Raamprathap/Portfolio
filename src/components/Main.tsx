import { motion } from "framer-motion";
import { BackgroundBeams } from "./ui/background-beams";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail
} from "@tabler/icons-react";

export default function Main() {
    const links = [ 
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-yellow-500 " />//dark:text-neutral-300
      ),
      href: "https://www.linkedin.com/in/raamprathap-rajarathinam/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-yellow-500 " />//dark:text-neutral-300
      ),
      href: "https://github.com/Raamprathap",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-yellow-500 " />//dark:text-neutral-300
      ),
      href: "//https://www.instagram.com/_.raam._17",
    },
    {
      title: "Email",
      icon: (
        <IconMail className="h-full w-full text-yellow-500"/> //dark:text-neutral-300
      ),
      href: "mailto:raamprathap17242@gmail.com"
    }
  ];

    return (
        <>
            <main className="flex flex-col items-center justify-center z-10">
                <motion.h1 
                    className="text-gray-600 text-4xl md:text-9xl z-7 kaushan-script-regular"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        type: "spring",
                        damping: 25,
                        stiffness: 300,
                        delay: 0.2
                    }}
                >
                    &nbsp;&nbsp;Hey,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There
                </motion.h1>
                
                <motion.img 
                    src="/assets/avataaars.png" 
                    alt="" 
                    className="absolute top-35 h-50 w-50 rounded-full md:h-150 md:w-[unset] md:rounded-none md:top-25 border-4 border-black md:border-none z-1" 
                    initial={{ opacity: 0, y: 150 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        type: "spring",
                        damping: 15,
                        stiffness: 150,
                        delay: 0.5
                    }}
                />
                
                <motion.h1 
                    className="absolute bottom-9 left-5 z-3 text-gray-600 text-4xl md:text-8xl leading-snug font-bold boldonse-regular"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                        type: "spring",
                        damping: 20,
                        stiffness: 200,
                        delay: 0.8
                    }}
                >
                    I AM <br/> RAAM PRATHAP
                </motion.h1>
                
                <motion.div 
                    className="absolute bottom-9 right-5 md:right-15 z-10"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                        type: "spring",
                        damping: 20,
                        stiffness: 200,
                        delay: 1
                    }}
                >
                    <div>
                        <FloatingDock
                            items={links}
                            desktopClassName="w-fit"
                        />
                    </div>
                    
                    <motion.p 
                        className="z-5 mt-5 text-gray-600 text-md hidden md:block font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            type: "spring",
                            damping: 30,
                            stiffness: 400,
                            delay: 1.3
                        }}
                    >
                        Proficient in full-stack development,<br/> machine learning integration, and<br/> creating interactive user experiences.
                    </motion.p>
                </motion.div>
            </main>
            <BackgroundBeams />
        </>
    );
}