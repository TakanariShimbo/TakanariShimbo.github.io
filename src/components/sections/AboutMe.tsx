import {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
  RefObject,
} from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useBoolean } from "@/hooks";
import CustomArrow from "../slider/CustomArrow";
import PhotoDialog from "../dialog/PhotoDialog";

type LazyLoadTypes = "ondemand" | "progressive" | "anticipated";

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
  sliderRef: RefObject<Slider>;
  images: string[];
  progress: number;
  resetProgress: () => void;
  onOpenDialog: () => void;
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
  hobbyContent: string;
  workContent: string;
};

const Main = ({
  sliderRef,
  images,
  progress,
  resetProgress,
  onOpenDialog,
  currentSlide,
  setCurrentSlide,
  hobbyContent,
  workContent,
}: MainProps) => {
  const sliderSettings = useMemo(
    () => ({
      lazyLoad: "progressive" as LazyLoadTypes,
      fade: true,
      waitForAnimate: false,
      swipe: false,
      dots: false,
      speed: 1500,
      initialSlide: 0,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (_: number, next: number) => setCurrentSlide(next),
      prevArrow: (
        <CustomArrow
          direction="left"
          beforeGradient={false}
          afterGradient={true}
          resetProgress={resetProgress}
        />
      ),
      nextArrow: (
        <CustomArrow
          direction="right"
          beforeGradient={false}
          afterGradient={true}
          resetProgress={resetProgress}
        />
      ),
    }),
    [],
  );

  return (
    <div className="flex max-w-full flex-col place-items-stretch gap-10 laptop:max-w-[1160px] laptop:flex-row laptop:gap-5 laptop:pb-0">
      <div className="flex w-full max-w-md flex-col justify-center laptop:w-1/3">
        <div className="p-4 text-center shadow-card">
          <div
            style={{ width: `${progress}%` }}
            className="left-0 mb-1 h-1 w-10 rounded bg-ocher-200 duration-200 dark:bg-gray-800"
          />
          <Slider
            ref={sliderRef}
            {...sliderSettings}
            className="aspect-[4/5] w-full"
          >
            {images.map((image, index) => (
              <div key={index} className="w-full">
                <img src={image} alt="Profile" />
                <p className="absolute bottom-4 right-3 rounded bg-gray-500 bg-opacity-25 p-1 text-xs tracking-wide text-white backdrop-blur-md">
                  {currentSlide + 1} / {images.length}
                </p>
              </div>
            ))}
          </Slider>
          <button
            className="rounded-3xl px-4 py-2 font-medium tracking-wide hover:bg-gray-100 active:bg-gray-100 dark:text-white dark:hover:bg-gray-500 dark:active:bg-gray-500"
            onClick={onOpenDialog}
          >
            <div className="flex flex-row items-center justify-center">
              <span className="px-1">Photo Gallery</span>
              <Icon icon="basil:arrow-right-outline" fontSize="24px" />
            </div>
          </button>
        </div>
      </div>
      <div className="flex max-w-md flex-col justify-center rounded-sm border border-[rgba(0,0,0,.125)] laptop:w-2/3 laptop:max-w-full">
        <div className="flex grow-0 items-center gap-3 border-b border-[rgba(0,0,0,.125)] bg-[rgba(0,0,0,0.03)] px-3 py-2">
          <Icon icon="emojione:red-circle" width={10} />
          <Icon icon="twemoji:yellow-circle" width={10} />
          <Icon icon="twemoji:green-circle" width={10} />
        </div>
        <div className="flex grow flex-col justify-center p-3 text-justify">
          <br />
          <p className="text-sm font-medium">{hobbyContent}</p>
          <br />
          <p className="text-sm font-medium">{workContent}</p>
          <br />
        </div>
      </div>
    </div>
  );
};

const AboutMe = () => {
  const { t } = useTranslation();
  const [isOpen, handleIsOpen] = useBoolean();
  const sliderRef = useRef<Slider>(null);
  const [progress, setProgress] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const resetProgress = useCallback(() => {
    setProgress(0);
  }, []);

  useEffect(() => {
    if (progress >= 100 && sliderRef.current) {
      sliderRef.current.slickNext();
      resetProgress();
    }
  }, [progress]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => Math.min(prev + 2, 100));
    }, 120);

    return () => clearInterval(timer);
  }, []);

  const onOpenDialog = () => {
    handleIsOpen.on();
    disableBodyScroll(document.body);
  };

  const onCloseDialog = () => {
    handleIsOpen.off();
    enableBodyScroll(document.body);
  };

  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center bg-white p-5 pb-20 text-gray-900 laptop:py-10 laptop:pb-20 dark:bg-gray-400 dark:text-white"
    >
      <Title title={t("about_me.title")} />
      <Main
        sliderRef={sliderRef}
        images={t("about_me.images", { returnObjects: true })}
        progress={progress}
        resetProgress={resetProgress}
        onOpenDialog={onOpenDialog}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        hobbyContent={t("about_me.hobby_content")}
        workContent={t("about_me.work_content")}
      />
      <PhotoDialog
        open={isOpen}
        onClose={onCloseDialog}
        images={t("about_me.images", { returnObjects: true })}
      />
    </section>
  );
};

export default AboutMe;
