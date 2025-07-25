import { Timeline } from "./ui/timeline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { AnimatedTooltip } from "./ui/animated-tooltip";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFlask,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiTensorflow,
  SiKeras,
  SiPytorch,
  SiScikitlearn,
  SiOpencv,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiEclipseide,
  SiAndroidstudio,
  SiRaspberrypi,
  SiArduino,
  SiFigma,
  SiC,
  SiCplusplus,
  SiHaskell,
  SiSocketdotio,
} from "react-icons/si";
import { DiJava, DiVisualstudio } from "react-icons/di";
import { AiOutlineBarChart } from "react-icons/ai";
import { FaFileExcel } from "react-icons/fa";

import {
  FaFileAlt,
  FaMicrochip,
  FaRobot,
  FaSearch,
  FaSearchPlus,
  FaGlobe,
  FaLanguage,
} from "react-icons/fa";

export default function About() {
    const experience = [
     {
  title: "Skills",
  content: (
    <div>
      <Tabs defaultValue="Frontend" className="w-full">
        <TabsList className="flex-row md:flex-col w-full flex-wrap p-2 my-2 z-10">
          <TabsTrigger value="Frontend">Frontend</TabsTrigger>
          <TabsTrigger value="Backend">Backend</TabsTrigger>
          <TabsTrigger value="Database">Database</TabsTrigger>
          <TabsTrigger value="Machine-Learning">ML / AI</TabsTrigger>
          <TabsTrigger value="Programming">Programming</TabsTrigger>
          <TabsTrigger value="DevTools">DevTools</TabsTrigger>
          <TabsTrigger value="Embedded">Embedded</TabsTrigger>
          <TabsTrigger value="Design">Design</TabsTrigger>
          <TabsTrigger value="Languages">Languages</TabsTrigger>
          <TabsTrigger value="Other">Other</TabsTrigger>
        </TabsList>

        {/* ─ Frontend ─ */}
        <TabsContent value="Frontend">
          <div className="flex flex-row flex-wrap items-center justify-center mb-10 w-full mt-30 md:mt-15">
              <AnimatedTooltip items={[
                { id: 1,  name: "HTML5",        icon: <SiHtml5 /> },
                { id: 2,  name: "CSS3",         icon: <SiCss3 /> },
                { id: 3,  name: "JavaScript",   icon: <SiJavascript /> },
                { id: 4,  name: "React.js",     icon: <SiReact /> },
                { id: 5,  name: "Tailwind CSS", icon: <SiTailwindcss /> },
                { id: 6,  name: "Vite",         icon: <SiVite /> },
                { id: 7,  name: "Bootstrap",    icon: <FaFileAlt /> },
                { id: 8,  name: "Framer Motion",icon: <FaFileAlt /> },
              ]}/>
          </div>
        </TabsContent>

        {/* ─ Backend ─ */}
        <TabsContent value="Backend">
          <div className="flex flex-row flex-wrap items-center justify-center mb-10 w-full mt-30 md:mt-15">
              <AnimatedTooltip items={[
                { id: 9,  name: "Node.js",     icon: <SiNodedotjs /> },
                { id: 10, name: "Express.js",  icon: <SiExpress /> },
                { id: 11, name: "Python",      icon: <SiPython /> },
                { id: 12, name: "Flask",       icon: <SiFlask /> },
                { id: 13, name: "FastAPI",     icon: <FaFileAlt /> },
                { id: 14, name: "REST APIs",   icon: <FaFileAlt /> },
                { id: 15, name: "Socket.IO",   icon: <SiSocketdotio /> },
              ]}/>
          </div>
        </TabsContent>

        {/* ─ Database ─ */}
        <TabsContent value="Database">
          <div className="flex flex-row flex-wrap items-center justify-center mb-10 w-full mt-30 md:mt-15">
              <AnimatedTooltip items={[
                { id: 16, name: "MongoDB",  icon: <SiMongodb /> },
                { id: 17, name: "Firebase", icon: <SiFirebase /> },
                { id: 18, name: "MySQL",    icon: <SiMysql /> },
                { id: 19, name: "SQL",      icon: <SiMysql /> },
              ]}/>
          </div>
        </TabsContent>

        {/* ─ ML / AI ─ */}
        <TabsContent value="Machine-Learning">
          <div className="flex flex-row flex-wrap items-center justify-center mb-10 w-full mt-30 md:mt-15">
              <AnimatedTooltip items={[
                { id: 20, name: "TensorFlow",  icon: <SiTensorflow /> },
                { id: 21, name: "Keras",       icon: <SiKeras /> },
                { id: 22, name: "PyTorch",     icon: <SiPytorch /> },
                { id: 23, name: "Scikit‑learn",icon: <SiScikitlearn /> },
                { id: 24, name: "OpenCV",      icon: <SiOpencv /> },
                { id: 25, name: "GANs",        icon: <FaRobot /> },
                { id: 26, name: "Transformers",icon: <FaRobot /> },
                { id: 27, name: "RAG",         icon: <FaSearch /> },
                { id: 28, name: "DeepSeek",    icon: <FaSearchPlus /> },
              ]}/>
          </div>
        </TabsContent>

        {/* ─ Programming ─ */}
        <TabsContent value="Programming">
          <div className="flex flex-row flex-wrap items-center justify-center mb-10 w-full mt-30 md:mt-15">
              <AnimatedTooltip items={[
                { id: 29, name: "C",          icon: <SiC /> },
                { id: 30, name: "C++",        icon: <SiCplusplus /> },
                { id: 31, name: "Python",     icon: <SiPython /> },
                { id: 32, name: "Java",       icon: <DiJava /> },
                { id: 33, name: "JavaScript", icon: <SiJavascript /> },
                { id: 34, name: "Haskell",    icon: <SiHaskell /> },
                { id: 35, name: "SQL",        icon: <SiMysql /> },
              ]}/>
          </div>
        </TabsContent>

        {/* ─ DevTools ─ */}
        <TabsContent value="DevTools">
          <div className="flex flex-row flex-wrap items-center justify-center mb-10 w-full mt-30 md:mt-15">
              <AnimatedTooltip items={[
                { id: 36, name: "VS Code",        icon: <DiVisualstudio /> },
                { id: 37, name: "Git",            icon: <SiGit /> },
                { id: 38, name: "GitHub",         icon: <SiGithub /> },
                { id: 39, name: "Google Cloud",   icon: <SiGooglecloud /> },
                { id: 40, name: "Eclipse",        icon: <SiEclipseide /> },
                { id: 41, name: "Android Studio", icon: <SiAndroidstudio /> },
                { id: 42, name: "Postman",        icon: <FaFileAlt /> },
              ]}/>
          </div>
        </TabsContent>

        {/* ─ Embedded ─ */}
        <TabsContent value="Embedded">
          <div className="flex flex-row flex-wrap items-center justify-center mb-10 w-full mt-30 md:mt-15">
              <AnimatedTooltip items={[
                { id: 43, name: "Raspberry Pi", icon: <SiRaspberrypi /> },
                { id: 44, name: "ESP32",        icon: <FaMicrochip /> },
                { id: 45, name: "Arduino",      icon: <SiArduino /> },
              ]}/>
          </div>
        </TabsContent>

        {/* ─ Design / Analytics ─ */}
        <TabsContent value="Design">
          <div className="flex flex-row flex-wrap items-center justify-center mb-10 w-full mt-30 md:mt-15">
              <AnimatedTooltip items={[
                { id: 46, name: "Figma",     icon: <SiFigma /> },
                { id: 47, name: "Power BI",  icon: <AiOutlineBarChart /> },
                { id: 48, name: "Excel",     icon: <FaFileExcel /> },
              ]}/>
          </div>
        </TabsContent>

        {/* ─ Spoken Languages ─ */}
        <TabsContent value="Languages">
          <div className="flex flex-row flex-wrap items-center justify-center mb-10 w-full mt-30 md:mt-15">
              <AnimatedTooltip items={[
                { id: 49, name: "English",  icon: <FaGlobe /> },
                { id: 50, name: "Tamil",    icon: <FaLanguage /> },
                { id: 51, name: "Hindi",    icon: <FaLanguage /> },
                { id: 52, name: "Japanese", icon: <FaLanguage /> },
              ]}/>
          </div>
        </TabsContent>

        {/* ─ Other ─ */}
        <TabsContent value="Other">
          <div className="flex flex-row flex-wrap items-center justify-center mb-10 w-full mt-30 md:mt-15">
              <AnimatedTooltip items={[
                { id: 53, name: "CI / CD", icon: <FaFileAlt /> },
                { id: 54, name: "Linux",   icon: <FaFileAlt /> },
                { id: 55, name: "Windows", icon: <FaFileAlt /> },
              ]}/>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  ),
},
        {
            title: "Late 2024",
            content: (
                <div>
                    <div className="mb-8 space-y-4 text-sm md:text-lg text-neutral-800 leading-loose md:leading-relaxed">
                        <p>
                            I began my internship at 
                            <strong className="mx-1 px-2 py-1 bg-yellow-500/80 text-white rounded-md shadow-sm">
                                1000Lookz
                            </strong>
                            during my 2ⁿᵈ year of B.Tech CSE at Amrita Vishwa Vidyapeetham. This 4-month journey (Dec 2024 – Mar 2025) marked my first deep dive into real-world product development.
                        </p>
                        <p>
                            I actively collaborated with the development team and contributed to multiple domains, including:
                            <ul className="list-disc ml-6 mt-2 space-y-1">
                                <li><strong className="text-black">UI/UX design</strong> – designing user-friendly interfaces</li>
                                <li><strong className="text-black">Generative Adversarial Networks (GANs)</strong> – working on advanced machine learning pipelines</li>
                                <li><strong className="text-black">Retrieval-Augmented Generation (RAG)</strong> – implementing modern AI retrieval techniques</li>
                            </ul>
                        </p>
                        <p>
                            Throughout the internship, I honed both technical and analytical skills while working in a collaborative and fast-paced environment. Delivering quality outcomes within timelines was a key part of my role — and a rewarding one.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/assets/ui-ux.jpg"
                            alt="UI/UX Design"
                            width={500}
                            height={500}
                            className="h-24 md:h-44 lg:h-60 w-full object-cover rounded-xl border border-neutral-200 shadow-md"
                        />
                        <img
                            src="/assets/gan.jpg"
                            alt="Working with GANs"
                            width={500}
                            height={500}
                            className="h-24 md:h-44 lg:h-60 w-full object-cover rounded-xl border border-neutral-200 shadow-md"
                        />
                        <img
                            src="/assets/ai.jpg"
                            alt="AI Projects"
                            width={500}
                            height={500}
                            className="h-24 md:h-44 lg:h-60 w-full object-cover rounded-xl border border-neutral-200 shadow-md"
                        />
                        <img
                            src="/assets/team_collab.jpg"
                            alt="Team Collaboration"
                            width={500}
                            height={500}
                            className="h-24 md:h-44 lg:h-60 w-full object-cover rounded-xl border border-neutral-200 shadow-md"
                        />
                    </div>
                </div>
            )
        },
        {
            title: "Mid 2025",
            content: (
                <div>
                    <div className="mb-8 space-y-4 text-sm md:text-lg text-neutral-800 leading-loose md:leading-relaxed">
                        <p>
                            I'm currently a&nbsp;
                            <strong className="inline-block px-2 py-1 rounded-md bg-amber-500/90 text-white shadow-sm">
                                Full‑Stack&nbsp;Developer&nbsp;Intern
                            </strong>
                            &nbsp;at&nbsp;
                            <strong className="inline-block px-2 py-1 rounded-md bg-amber-500/90 text-white shadow-sm">
                                Sudha&nbsp;Software&nbsp;Solutions
                            </strong>
                            , delivering production‑ready features from pixel‑perfect UIs to secure APIs.
                        </p>

                        <p>
                            <span className="font-semibold">Frontend toolkit</span>: Next.js, React, Tailwind CSS, Redux, Axios, Framer Motion<br />
                            <span className="font-semibold">Backend stack</span>: Node.js, Express, MongoDB, Zod, Cloudinary, Multer, Bcrypt, Passport, Resend
                        </p>

                        <p>
                            The role has shown me how real‑world products move from idea ➜ spec ➜ code ➜ deployment, deepening my skills in
                            versioned APIs, authentication flows, and CI/CD pipelines.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/assets/web.jpg"
                            alt="Building responsive UIs"
                            width={500}
                            height={500}
                            className="h-24 md:h-44 lg:h-60 w-full object-cover rounded-xl border border-neutral-200 shadow-md"
                        />
                        <img
                            src="/assets/api.jpg"
                            alt="API design in Postman"
                            width={500}
                            height={500}
                            className="h-24 md:h-44 lg:h-60 w-full object-cover rounded-xl border border-neutral-200 shadow-md"
                        />
                        <img
                            src="/assets/db.jpg"
                            alt="Database schema design"
                            width={500}
                            height={500}
                            className="h-24 md:h-44 lg:h-60 w-full object-cover rounded-xl border border-neutral-200 shadow-md"
                        />
                        <img
                            src="/assets/review.jpg"
                            alt="Team stand‑up & code review"
                            width={500}
                            height={500}
                            className="h-24 md:h-44 lg:h-60 w-full object-cover rounded-xl border border-neutral-200 shadow-md"
                        />
                    </div>
                </div>
            ),
        },
        // {
        //     title: "Achievements",
        //     content: (
        //         <div className="mb-8 space-y-4 text-sm md:text-lg text-neutral-800 leading-relaxed">
        //             <h3 className="text-lg font-bold text-yellow-800 mb-2 flex items-center gap-2">
        //                 Winner - Vertex Innovate '25
        //             </h3>
        //             <p className="text-sm md:text-base text-neutral-800 leading-relaxed">
        //                 Secured <span className="font-semibold text-yellow-700">first place</span> at Vertex Innovate '25, a premier innovation contest hosted at Amrita Vishwa Vidyapeetham. Competing against top-tier student talent, our solution stood out for its innovation, technical depth, and real-world applicability.
        //             </p>
        //             <h3 className="text-lg font-bold text-yellow-800 mb-2 flex items-center gap-2">
        //                 Shortlisted - Smart India Hackathon (SIH)
        //             </h3>
        //             <p className="text-sm md:text-base text-neutral-800 leading-relaxed">
        //                 Among thousands of nationwide applicants, our team got <span className="font-semibold text-yellow-700">shortlisted for the Smart India Hackathon 2025</span> — India's largest innovation-driven event organized by the Government of India.
        //             </p>
        //             <p className="text-sm md:text-base text-neutral-700 mt-2">
        //                 This milestone not only validated our problem-solving approach but also showcased our readiness to build high-impact, scalable solutions under pressure.
        //             </p>
        //         </div>
        //     ),
        // },
    ];

    return (
        <div className="w-full mx-auto my-8 px-8 py-0 text-gray-800">
            <div className="text-center mb-8 mx-15">
                <h1 
                    className="text-5xl kaushan-script-regular"
                >
                    About Me
                </h1>
                <p 
                    className="text-lg mx-auto mt-4"
                >
                    I am a passionate full-stack developer and machine learning
                    enthusiast with a strong foundation in modern web technologies.
                    With experience in developing both frontend and backend solutions,
                    I specialize in creating seamless, user-friendly applications that
                    solve real-world problems.
                </p>
            </div>
            <div 
                className="relative w-full overflow-clip"
            >
                <Timeline data={experience} />
            </div>
        </div>
    );
}