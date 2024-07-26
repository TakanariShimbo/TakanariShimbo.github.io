import { Fragment } from "react";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
} from "@headlessui/react";
import { Icon } from "@iconify/react";
import { ProjectType } from "@/i18n/config";
import Slider from "react-slick";

interface Props {
  open: boolean;
  onClose: () => void;
  project?: ProjectType;
}

const sliderSettings = {
  dots: true,
  speed: 500,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ProjectDialog = ({ open, onClose, project }: Props) => {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="relative transform overflow-hidden rounded-sm bg-white text-left shadow-xl transition-all sm:my-8 md:w-[800px] dark:bg-[#919191] dark:text-white">
                <div className="flex justify-end">
                  <div className="bg-red-100 mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                    <Icon
                      icon="material-symbols:close"
                      className="cursor-pointer text-2xl"
                      onClick={onClose}
                    />
                  </div>
                </div>

                <div className="mt-2 p-5">
                  <div className="rounded-sm border border-[rgba(0,0,0,.125)]">
                    <div className="flex items-center gap-3 border-b border-[rgba(0,0,0,.125)] bg-[rgba(0,0,0,0.03)] px-3 py-2">
                      <Icon icon="emojione:red-circle" width={10} />
                      <Icon icon="twemoji:yellow-circle" width={10} />
                      <Icon icon="twemoji:green-circle" width={10} />
                    </div>
                    <div className="text-justify">
                      <Slider
                        {...sliderSettings}
                        className="aspect-[3/2] w-full"
                      >
                        {project?.images?.map((image) => (
                          <div key={image}>
                            <img src={image} alt="" />
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>

                  <h2 className="mt-10 text-lg font-medium">
                    {project?.title}
                  </h2>
                  <p className="text-sm font-medium">{project?.description}</p>

                  <div className="mt-3 flex justify-center gap-5">
                    {project?.technologies?.map((tech) => (
                      <div className="flex flex-col items-center text-black dark:text-white">
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
                      className="flex flex-col items-center text-black dark:text-white"
                    >
                      <Icon icon="mdi:web" fontSize="40px" />
                    </a>
                    <a
                      href={project?.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center text-black dark:text-white"
                    >
                      <Icon icon="mdi:github" fontSize="40px" />
                    </a>
                  </div>
                </div>

                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"></div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProjectDialog;
