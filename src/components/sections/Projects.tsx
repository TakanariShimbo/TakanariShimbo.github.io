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
    <section
      id="my-apps"
      className="bg-ocher-200 px-5 py-10 pb-20 text-gray-900 laptop:py-5 laptop:pb-10 dark:bg-gray-800 dark:text-white"
    >
      <h2 className="py-10 text-center text-xl font-medium uppercase tracking-widest">
        {t("projects.title")}
      </h2>
      <div className="flex flex-wrap justify-center gap-5">
        {t("projects.projects", { returnObjects: true }).map((item) => (
          <div
            className="mb-[30px] inline-block cursor-pointer bg-white p-4 text-center shadow-card transition duration-[0.2] ease-linear hover:scale-[1.01] hover:shadow-card-hover dark:bg-gray-500"
            onClick={() => handleProjectDetails(item)}
            key={item.title}
          >
            <span className="mb-3 rounded-t-lg bg-gray-500 px-4 pb-1 pt-2 text-center text-sm font-medium uppercase text-white">
              {item.category}
            </span>
            <img
              className="relative aspect-[3/2] w-full max-w-md laptop:max-w-[345px]"
              src={item.images[1]}
              alt="Profile"
            />
            <p className="font-xl mt-2 font-medium tracking-wide">
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
