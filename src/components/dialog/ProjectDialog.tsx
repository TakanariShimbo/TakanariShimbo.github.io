import GenericDialog from "./GenericDialog";
import { Icon } from "@iconify/react";
import { ProjectType } from "@/i18n/config";
import Slider from "react-slick";
import CustomArrow from "../slider/CustomArrow";

type LazyLoadTypes = "ondemand" | "progressive" | "anticipated";

const sliderSettings = {
  lazyLoad: "progressive" as LazyLoadTypes,
  swipe: true,
  dots: true,
  speed: 500,
  initialSlide: 1,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: (
    <CustomArrow direction="left" beforeGradient={true} afterGradient={true} />
  ),
  nextArrow: (
    <CustomArrow direction="right" beforeGradient={true} afterGradient={true} />
  ),
};

type ContentsProps = {
  project?: ProjectType;
};

const Contents = ({ project }: ContentsProps) => {
  return (
    <>
      <div className="rounded-sm border border-[rgba(0,0,0,.125)]">
        <div className="flex items-center gap-3 border-b border-[rgba(0,0,0,.125)] bg-[rgba(0,0,0,0.03)] px-3 py-2">
          <Icon icon="emojione:red-circle" width={10} />
          <Icon icon="twemoji:yellow-circle" width={10} />
          <Icon icon="twemoji:green-circle" width={10} />
        </div>
        <div className="text-justify">
          <Slider {...sliderSettings} className="aspect-[3/2] w-full">
            {project?.images?.map((image) => (
              <div key={image}>
                <img src={image} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <h2 className="mt-10 text-lg font-medium">{project?.title}</h2>
      <p className="text-sm font-medium">{project?.description}</p>

      <div className="mt-3 flex justify-center gap-5">
        {project?.technologies?.map((tech) => (
          <div className="flex flex-col items-center">
            <Icon icon={tech.class} fontSize="50px" />
            <p className="mt-1 text-center text-xs">{tech.name}</p>
          </div>
        ))}
      </div>

      <div className="mt-7 flex justify-center gap-5">
        <a
          href={project?.appLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-500"
        >
          <Icon icon="mdi:web" fontSize="40px" />
        </a>
        <a
          href={project?.repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-500"
        >
          <Icon icon="mdi:github" fontSize="40px" />
        </a>
      </div>
    </>
  );
};

type ProjectDialogProps = {
  open: boolean;
  onClose: () => void;
  project?: ProjectType;
};

const ProjectDialog = ({ open, onClose, project }: ProjectDialogProps) => {
  return (
    <GenericDialog open={open} onClose={onClose}>
      <Contents project={project} />
    </GenericDialog>
  );
};

export default ProjectDialog;
