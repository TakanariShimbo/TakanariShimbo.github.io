import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import CustomArrow from "../slider/CustomArrow";

const AboutMe = () => {
  const { t } = useTranslation();
  const sliderRef = useRef<Slider>(null);
  const [progress, setProgress] = useState(0);

  const resetProgress = useCallback(() => {
    setProgress(0);
  }, []);

  const sliderSettings = useMemo(
    () => ({
      fade: true,
      waitForAnimate: false,
      swipe: false,
      dots: false,
      speed: 1500,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
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

  return (
    <section
      id="about-me"
      className="text-gray-900 dark:bg-gray-400 laptop:py-10 laptop:pb-20 flex flex-col items-center justify-center p-5 pb-20 dark:text-white"
    >
      <h2 className="py-10 text-center text-xl font-medium uppercase tracking-widest">
        {t("about_me.title")}
      </h2>
      <div className="laptop:max-w-[1160px] laptop:flex-row laptop:gap-5 laptop:pb-0 flex max-w-full flex-col place-items-stretch gap-10">
        <div className="laptop:w-1/3 flex w-full max-w-md flex-col justify-center">
          <div className="p-4 text-center shadow-card">
            <Slider
              ref={sliderRef}
              {...sliderSettings}
              className="aspect-[4/5] w-full"
            >
              {t("about_me.images", { returnObjects: true }).map(
                (image, index) => (
                  <div key={index} className="w-full">
                    <div
                      style={{ width: `${progress}%` }}
                      className="bg-ocher-200 dark:bg-gray-800 absolute bottom-0 left-0 h-2 w-10 rounded-lg duration-200"
                    />
                    <img src={image} alt="" />
                  </div>
                ),
              )}
            </Slider>
            <p className="font-xl mt-2 font-medium tracking-wide dark:text-white">
              Photo Gallery
            </p>
          </div>
        </div>
        <div className="laptop:w-2/3 laptop:max-w-full flex max-w-md flex-col justify-center rounded-sm border border-[rgba(0,0,0,.125)]">
          <div className="flex grow-0 items-center gap-3 border-b border-[rgba(0,0,0,.125)] bg-[rgba(0,0,0,0.03)] px-3 py-2">
            <Icon icon="emojione:red-circle" width={10} />
            <Icon icon="twemoji:yellow-circle" width={10} />
            <Icon icon="twemoji:green-circle" width={10} />
          </div>
          <div className="flex grow flex-col justify-center p-3 text-justify">
            <p className="text-sm font-medium">{t("about_me.hobby_content")}</p>
            <br />
            <p className="text-sm font-medium">{t("about_me.work_content")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
