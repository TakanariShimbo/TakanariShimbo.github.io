import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useBoolean } from "@/hooks";
import { ProjectType } from "@/i18n/config";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import ProjectDialog from "../dialog/ProjectDialog";

type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  return (
    <h2 className="py-10 text-center text-xl font-medium uppercase tracking-widest">
      {title}
    </h2>
  );
};

type MainProps = {
  projects: ProjectType[];
  onOpenDialog: (project: ProjectType) => void;
};

const Main = ({ projects, onOpenDialog }: MainProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-10 laptop:gap-5">
      {projects.map((item) => (
        <div
          className="inline-block cursor-pointer bg-white p-4 text-center shadow-card transition duration-200 ease-linear hover:scale-105 hover:shadow-card-hover dark:bg-gray-500"
          onClick={() => onOpenDialog(item)}
          key={item.title}
        >
          <span className="mb-3 rounded-t-lg bg-gray-500 px-4 pb-1 pt-2 text-center text-sm font-medium uppercase text-white dark:bg-gray-800">
            {item.category}
          </span>
          <img
            className="relative aspect-[3/2] w-full max-w-md laptop:max-w-[345px]"
            src={item.images[1]}
            alt="Project"
          />
          <p className="font-xl mt-3 font-medium tracking-wide">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

const Projects = () => {
  const [isOpen, handleIsOpen] = useBoolean();
  const [selectedProject, setSelectedProject] = useState<
    ProjectType | undefined
  >();
  const { t } = useTranslation();

  const onOpenDialog = (project: ProjectType) => {
    setSelectedProject(project);
    handleIsOpen.on();
    disableBodyScroll(document.body);
  };

  const onCloseDialog = () => {
    handleIsOpen.off();
    enableBodyScroll(document.body);
  };

  return (
    <section
      id="my-apps"
      className="bg-ocher-200 px-5 py-10 pb-20 text-gray-900 dark:bg-gray-800 dark:text-white"
    >
      <Title title={t("projects.title")} />
      <Main
        projects={t("projects.projects", { returnObjects: true })}
        onOpenDialog={onOpenDialog}
      />
      <ProjectDialog
        open={isOpen}
        onClose={onCloseDialog}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;
