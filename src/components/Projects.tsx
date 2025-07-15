import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { projects } from "./data/projects";

export default function Projects() {
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