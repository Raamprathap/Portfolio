import { Timeline } from "./ui/timeline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
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
                <AnimatedTooltip
                  items={[
                    { id: 1, name: "HTML5", icon: <SiHtml5 /> },
                    { id: 2, name: "CSS3", icon: <SiCss3 /> },
                    { id: 3, name: "JavaScript", icon: <SiJavascript /> },
                    { id: 4, name: "React.js", icon: <SiReact /> },
                    { id: 5, name: "Tailwind CSS", icon: <SiTailwindcss /> },
                    { id: 6, name: "Vite", icon: <SiVite /> },
                    { id: 7, name: "Bootstrap", icon: <FaFileAlt /> },
                    { id: 8, name: "Framer Motion", icon: <FaFileAlt /> },
                  ]}
                />
              </div>
            </TabsContent>

            {/* ─ Backend ─ */}
            <TabsContent value="Backend">
              <div className="flex flex-row flex-wrap items-center justify-center mb-10 w-full mt-30 md:mt-15">
                <AnimatedTooltip
                  items={[
                    { id: 9, name: "Node.js", icon: <SiNodedotjs /> },
                    { id: 10, name: "Express.js", icon: <SiExpress /> },
                    { id: 11, name: "Python", icon: <SiPython /> },
                    { id: 12, name: "Flask", icon: <SiFlask /> },
                    { id: 13, name: "FastAPI", icon: <FaFileAlt /> },
                    { id: 14, name: "REST APIs", icon: <FaFileAlt /> },
                    { id: 15, name: "Socket.IO", icon: <SiSocketdotio /> },
                  ]}
                />
              </div>
            </TabsContent>

            {/* ─ Database ─ */}
            <TabsContent value="Database">
              <div className="flex flex-row flex-wrap items-center justify-center mb-10 w-full mt-30 md:mt-15">
                <AnimatedTooltip
                  items={[
                    { id: 16, name: "MongoDB", icon: <SiMongodb /> },
                    { id: 17, name: "Firebase", icon: <SiFirebase /> },
                    { id: 18, name: "MySQL", icon: <SiMysql /> },
                    { id: 19, name: "SQL", icon: <SiMysql /> },
                  ]}
                />
              </div>
            </TabsContent>

            {/* ─ ML / AI ─ */}
            <TabsContent value="Machine-Learning">
              <div className="flex flex-row flex-wrap items-center justify-center mb-10 w-full mt-30 md:mt-15">
                <AnimatedTooltip
                  items={[
                    { id: 20, name: "TensorFlow", icon: <SiTensorflow /> },
                    { id: 21, name: "Keras", icon: <SiKeras /> },
                    { id: 22, name: "PyTorch", icon: <SiPytorch /> },
                    { id: 23, name: "Scikit‑learn", icon: <SiScikitlearn /> },
                    { id: 24, name: "OpenCV", icon: <SiOpencv /> },
                    { id: 25, name: "GANs", icon: <FaRobot /> },
                    { id: 26, name: "Transformers", icon: <FaRobot /> },
                    { id: 27, name: "RAG", icon: <FaSearch /> },
                    { id: 28, name: "DeepSeek", icon: <FaSearchPlus /> },
                  ]}
                />
              </div>
            </TabsContent>

            {/* ─ Programming ─ */}
            <TabsContent value="Programming">
              <div className="flex flex-row flex-wrap items-center justify-center mb-10 w-full mt-30 md:mt-15">
                <AnimatedTooltip
                  items={[
                    { id: 29, name: "C", icon: <SiC /> },
                    { id: 30, name: "C++", icon: <SiCplusplus /> },
                    { id: 31, name: "Python", icon: <SiPython /> },
                    { id: 32, name: "Java", icon: <DiJava /> },
                    { id: 33, name: "JavaScript", icon: <SiJavascript /> },
                    { id: 34, name: "Haskell", icon: <SiHaskell /> },
                    { id: 35, name: "SQL", icon: <SiMysql /> },
                  ]}
                />
              </div>
            </TabsContent>

            {/* ─ DevTools ─ */}
            <TabsContent value="DevTools">
              <div className="flex flex-row flex-wrap items-center justify-center mb-10 w-full mt-30 md:mt-15">
                <AnimatedTooltip
                  items={[
                    { id: 36, name: "VS Code", icon: <DiVisualstudio /> },
                    { id: 37, name: "Git", icon: <SiGit /> },
                    { id: 38, name: "GitHub", icon: <SiGithub /> },
                    { id: 39, name: "Google Cloud", icon: <SiGooglecloud /> },
                    { id: 40, name: "Eclipse", icon: <SiEclipseide /> },
                    {
                      id: 41,
                      name: "Android Studio",
                      icon: <SiAndroidstudio />,
                    },
                    { id: 42, name: "Postman", icon: <FaFileAlt /> },
                  ]}
                />
              </div>
            </TabsContent>

            {/* ─ Embedded ─ */}
            <TabsContent value="Embedded">
              <div className="flex flex-row flex-wrap items-center justify-center mb-10 w-full mt-30 md:mt-15">
                <AnimatedTooltip
                  items={[
                    { id: 43, name: "Raspberry Pi", icon: <SiRaspberrypi /> },
                    { id: 44, name: "ESP32", icon: <FaMicrochip /> },
                    { id: 45, name: "Arduino", icon: <SiArduino /> },
                  ]}
                />
              </div>
            </TabsContent>

            {/* ─ Design / Analytics ─ */}
            <TabsContent value="Design">
              <div className="flex flex-row flex-wrap items-center justify-center mb-10 w-full mt-30 md:mt-15">
                <AnimatedTooltip
                  items={[
                    { id: 46, name: "Figma", icon: <SiFigma /> },
                    { id: 47, name: "Power BI", icon: <AiOutlineBarChart /> },
                    { id: 48, name: "Excel", icon: <FaFileExcel /> },
                  ]}
                />
              </div>
            </TabsContent>

            {/* ─ Spoken Languages ─ */}
            <TabsContent value="Languages">
              <div className="flex flex-row flex-wrap items-center justify-center mb-10 w-full mt-30 md:mt-15">
                <AnimatedTooltip
                  items={[
                    { id: 49, name: "English", icon: <FaGlobe /> },
                    { id: 50, name: "Tamil", icon: <FaLanguage /> },
                    { id: 51, name: "Hindi", icon: <FaLanguage /> },
                    { id: 52, name: "Japanese", icon: <FaLanguage /> },
                  ]}
                />
              </div>
            </TabsContent>

            {/* ─ Other ─ */}
            <TabsContent value="Other">
              <div className="flex flex-row flex-wrap items-center justify-center mb-10 w-full mt-30 md:mt-15">
                <AnimatedTooltip
                  items={[
                    { id: 53, name: "CI / CD", icon: <FaFileAlt /> },
                    { id: 54, name: "Linux", icon: <FaFileAlt /> },
                    { id: 55, name: "Windows", icon: <FaFileAlt /> },
                  ]}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      ),
    },
    {
      title: "Early 2025",
      content: (
        <div>
          <div className="mb-8 space-y-4 text-sm md:text-lg text-[var(--text-secondary)] leading-loose md:leading-relaxed">
            <p>
              My journey began with an internship at{" "}
              <strong className="mx-1 px-2 py-1 bg-[var(--accent-blue)] text-[var(--text-primary)] rounded-md shadow-sm">
                1000Lookz
              </strong>{" "}
              during my 2nd year of B.Tech CSE — my first real taste of product
              development. Over 4 months, I worked across UI/UX design, GANs, and
              RAG pipelines, learning what it means to ship things that actually work.
            </p>
            <p>
              Then came{" "}
              <strong className="text-[var(--text-primary)]">Vertex Innovate 2025</strong>
              {" "}— a 48-hour online hackathon by VIT Vellore. 250+ teams entered.
              26 made the finals. We won — not just the hardware track, but the
              overall title too. First hackathon win. It felt unreal.
            </p>
          </div>
          <div className="flex gap-4">
            <img
              src="/vertex/image.png"
              alt="Team at Vertex Innovate"
              width={500}
              height={500}
              className="h-24 md:h-44 lg:h-60 w-fit object-contain rounded-xl border border-[var(--border-secondary)] shadow-md"
            />
            <img
              src="/vertex/VIT Innovate.png"
              alt="Vertex Innovate Win"
              width={500}
              height={500}
              className="h-24 md:h-44 lg:h-60 w-fit object-contain rounded-xl border border-[var(--border-secondary)] shadow-md"
            />
            <img
              src="/vertex/1741889009270.jpeg"
              alt="Team at Vertex Innovate"
              width={500}
              height={500}
              className="h-24 md:h-44 lg:h-60 w-fit object-contain rounded-xl border border-[var(--border-secondary)] shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Mid 2025",
      content: (
        <div>
          <div className="mb-8 space-y-4 text-sm md:text-lg text-[var(--text-secondary)] leading-loose md:leading-relaxed">
            <p>
              I joined{" "}
              <strong className="mx-1 px-2 py-1 bg-[var(--accent-blue)] text-[var(--text-primary)] rounded-md shadow-sm">
                Sudha Software Solutions
              </strong>{" "}
              as a Full Stack Developer Intern (May–July 2025). Two months of
              building real, production-ready features — secure auth flows, CI/CD
              pipelines, Cloudinary media storage — across 6+ scalable modules.
            </p>
            <p>
              I walked out as{" "}
              <strong className="text-[var(--text-primary)]">Best Intern</strong> of
              the cohort, with a Certified Full Stack Developer credential to go
              with it. More importantly, I finally understood what it meant to build
              software that other people depend on.
            </p>
          </div>
          <div className="flex gap-4">
            <img
              src="/sudha/cert.png"
              alt="Sudha Software Internship"
              width={500}
              height={500}
              className="h-24 md:h-44 lg:h-60 w-fit object-contain rounded-xl border border-[var(--border-secondary)] shadow-md"
            />
            <img
              src="/sudha/lor.png"
              alt="Best Intern Award"
              width={500}
              height={500}
              className="h-24 md:h-44 lg:h-60 w-fit object-contain rounded-xl border border-[var(--border-secondary)] shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Late 2025",
      content: (
        <div>
          <div className="mb-8 space-y-4 text-sm md:text-lg text-[var(--text-secondary)] leading-loose md:leading-relaxed">
            <p>
              November 2025. I started as a{" "}
              <strong className="mx-1 px-2 py-1 bg-[var(--accent-blue)] text-[var(--text-primary)] rounded-md shadow-sm">
                Software Developer Intern at Telesto Energy
              </strong>{" "}
              — and this one was different. No tutorials could have prepared me for
              handling massive SEG-Y seismic files, building cloud pipelines, and
              rendering complex geoscientific data live in the browser.
            </p>
            <p>
              By the end, the client reviewed the solution and signed off on it as{" "}
              <strong className="text-[var(--text-primary)]">production-ready</strong>.
              That sign-off meant everything.
            </p>
          </div>
          <div className="flex gap-4">
            <img
              src="/telesto/visual.jpeg"
              alt="Seismic Data Visualization"
              width={500}
              height={500}
              className="h-24 md:h-44 lg:h-60 w-fit object-contain rounded-xl border border-[var(--border-secondary)] shadow-md"
            />
            <img
              src="/telesto/ui.jpeg"
              alt="UI"
              width={500}
              height={500}
              className="h-24 md:h-44 lg:h-60 w-fit object-contain rounded-xl border border-[var(--border-secondary)] shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "January 2026",
      content: (
        <div>
          <div className="mb-8 space-y-4 text-sm md:text-lg text-[var(--text-secondary)] leading-loose md:leading-relaxed">
            <p>
              January 7th. Anokha TechFair 2026 — Amrita's flagship national
              techfest. I stood at our stall all day presenting{" "}
              <strong className="text-[var(--text-primary)]">Growgle</strong> to
              CEOs, researchers, and industry leaders. Hours of conversations about
              impact, scalability, and the future of career intelligence. That
              evening, I handed the stall over to my teammates and stepped away —
              because the next morning, a different challenge was waiting.
            </p>
            <p>
              January 8th.{" "}
              <strong className="text-[var(--text-primary)]">Build2Break</strong> —
              a 24-hour hackathon running parallel to the fest. Different team,
              different problem, same intensity. We built through the night, broke
              other teams' products, defended ours. By noon we presented. By
              afternoon —{" "}
              <strong className="text-[var(--text-primary)]">1st Place. ₹25,000.</strong>
            </p>
            <p>
              Meanwhile, my Growgle teammates held the stall for all three days.
              January 9th evening — the TechFair prize announcement. We were named{" "}
              <strong className="text-[var(--text-primary)]">Runner-Up</strong> among
              200+ projects. Two teams. Two prizes. One unforgettable week.
            </p>
          </div>
          <div className="flex gap-4">
            <img
              src="/build2break/prize.jpg"
              alt="Build2Break Hackathon"
              width={500}
              height={500}
              className="h-24 md:h-44 lg:h-60 w-full object-cover rounded-xl border border-[var(--border-secondary)] shadow-md"
            />
            <img
              src="/build2break/prize-grp.jpg"
              alt="Build2Break Win"
              width={500}
              height={500}
              className="h-24 md:h-44 lg:h-60 w-full object-cover rounded-xl border border-[var(--border-secondary)] shadow-md"
            />
            <img
              src="/tech-fair/logo.jpeg"
              alt="Growgle Prize Ceremony"
              width={500}
              height={500}
              className="h-24 md:h-44 lg:h-60 w-full object-cover rounded-xl border border-[var(--border-secondary)] shadow-md"
            />
            <img
              src="/tech-fair/prize.jpg"
              alt="Growgle at Anokha TechFair"
              width={500}
              height={500}
              className="h-24 md:h-44 lg:h-60 w-fit object-contain rounded-xl border border-[var(--border-secondary)] shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2026",
      content: (
        <div>
          <div className="mb-8 space-y-4 text-sm md:text-lg text-[var(--text-secondary)] leading-loose md:leading-relaxed">
            <p>
              February 27th, 2026.{" "}
              <strong className="mx-1 px-2 py-1 bg-[var(--accent-blue)] text-[var(--text-primary)] rounded-md shadow-sm">
                Guidewire DEVTrails
              </strong>{" "}
              — a 45-day online hackathon — began. Thousands of teams. We built{" "}
              <strong className="text-[var(--text-primary)]">Continuum</strong>, an
              AI-powered parametric insurance platform for gig workers, guided by
              mentors from Guidewire and Ernst & Young. After 45 days, only 5 teams
              were selected as finalists.
            </p>
            <p>
              We were one of them. And then came the part nobody tells you about
              in hackathons — Guidewire flew us to{" "}
              <strong className="text-[var(--text-primary)]">Bangalore</strong>,
              put us up at the{" "}
              <strong className="text-[var(--text-primary)]">Sheraton Grand</strong>,
              took us to their offices and EY's offices for practice sessions, and
              gave us three days of experiences that no classroom ever could. The
              networking, the mentorship, the conversations — that was the real prize.
            </p>
            <p>
              Then we presented at{" "}
              <strong className="text-[var(--text-primary)]">DEVSummit</strong> —
              and won{" "}
              <strong className="text-[var(--text-primary)]">2nd Place. ₹1,50,000.</strong>{" "}
              Selected from 18,000+ students, 4,400+ teams, across 30 universities
              in India.
            </p>
            <p>
              But before all of that — April 25–26 — we had competed in the{" "}
              <strong className="mx-1 px-2 py-1 bg-[var(--accent-blue)] text-[var(--text-primary)] rounded-md shadow-sm">
                Meta PyTorch OpenEnv Hackathon
              </strong>{" "}
              — a 36-hour offline finale at Scaler School of Technology, Bangalore,
              shortlisted from 31,000+ teams. A completely new field for us. We
              didn't win, but we left with something harder to measure — a deeper understanding of reinforcement learning and
              what it feels like to compete at that level. Bangalore had given us a lot.
              And somehow, the city wasn't finished with me yet — different team,
              different problem, same city.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="grid flex-1 min-w-0 grid-cols-1 gap-4 sm:grid-cols-3">
              <img
                src="/openenv/finale.jpg"
                alt="Meta PyTorch OpenEnv Hackathon"
                width={500}
                height={500}
                className="h-24 md:h-44 lg:h-60 w-full object-contain rounded-xl border border-[var(--border-secondary)] shadow-md"
              />
              <img
                src="/devtrails/devsummit.jpg"
                alt="DEVSummit"
                width={500}
                height={500}
                className="h-24 md:h-44 lg:h-60 w-full object-contain rounded-xl border border-[var(--border-secondary)] shadow-md"
              />
              <img
                src="/devtrails/EY-visit.jpg"
                alt="DEVSummit Bangalore Experience"
                width={500}
                height={500}
                className="h-24 md:h-44 lg:h-60 w-full object-cover rounded-xl border border-[var(--border-secondary)] shadow-md"
              />
            </div>
            <img
              src="/devtrails/prize.jpg"
              alt="Guidewire DEVSummit 2nd Place"
              width={500}
              height={500}
              className="h-24 md:h-44 lg:h-60 w-full object-cover rounded-xl border border-[var(--border-secondary)] shadow-md lg:max-w-xs xl:max-w-sm"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full mx-auto my-8 px-8 py-0 text-[var(--text-primary)]">
      <div className="text-center mb-8 mx-15">
        <h1 className="text-5xl kaushan-script-regular">About Me</h1>
        <p className="text-lg mx-auto mt-4">
          I am a passionate full-stack developer and machine learning enthusiast
          with a strong foundation in modern web technologies. With experience
          in developing both frontend and backend solutions, I specialize in
          creating seamless, user-friendly applications that solve real-world
          problems.
        </p>
      </div>
      <div className="relative w-full overflow-clip">
        <Timeline data={experience} />
      </div>
    </div>
  );
}
