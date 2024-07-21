import { useBoolean } from "@/hooks";
import ProjectDialog from "../dialog/ProjectDialog";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ProjectType } from "@/i18n/config";

const Projects = () => {
  const [isOpen, setIsOpen] = useBoolean();
  const [selectedProject, setSelectedProject] = useState<
    ProjectType | undefined
  >();
  const { t } = useTranslation();

  const handleProjectDetails = (project: ProjectType) => {
    setSelectedProject(project);
    setIsOpen.on();
  };

  return (
    <section className="bg-yellow p-5 pb-10 dark:bg-[#494949] max-[900px]:py-10 max-[900px]:pb-20">
      <h2 className="py-10 text-center text-xl font-medium uppercase tracking-widest text-black">
        {t("projects.title")}
      </h2>
      <div className="flex flex-wrap justify-center gap-5">
        {t("projects.projects", { returnObjects: true }).map((item) => (
          <div
            className="mb-[30px] inline-block cursor-pointer bg-white p-4 text-center shadow-card transition duration-[0.2] ease-linear hover:scale-[1.01] hover:shadow-card-hover dark:bg-[#6d6d6d]"
            onClick={() => handleProjectDetails(item)}
            key={item.title}
          >
            <span className="mb-3 rounded-t-lg bg-[#696969] px-4 pb-1 pt-2 text-center text-sm font-medium uppercase text-white">
              {item.category}
            </span>
            <img
              className="relative aspect-[3/2] max-w-[345px] max-[900px]:w-full max-[900px]:max-w-md"
              src={item.images[1]}
              alt="Profile"
            />
            <p className="font-xl mt-2 font-bold tracking-wide dark:text-white">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <ProjectDialog
        open={isOpen}
        onClose={setIsOpen.off}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;
