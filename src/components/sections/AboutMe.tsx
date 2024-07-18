import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center justify-center p-5 pb-20 dark:bg-[#7f7f7f] md:py-10 md:pb-20">
      <h2 className="py-10 text-center text-xl font-medium uppercase tracking-widest">
        {t("about_me.title")}
      </h2>

      <div className="flex max-w-[1160px] flex-col items-center justify-center gap-10 md:flex-row md:gap-5 md:pb-0">
        <div className="w-full text-center md:w-1/3">
          <div className="inline-block w-full max-w-sm p-4 pb-10 shadow-card">
            <AutoplaySlider
              className="aspect-[4/5] w-full max-w-sm"
              play={true}
              cancelOnInteraction={false}
              interval={6000}
              bullets={false}
            >
              {t("about_me.images", { returnObjects: true }).map((image) => (
                <div data-src={image} key={image} />
              ))}
            </AutoplaySlider>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <div className="rounded-sm border border-[rgba(0,0,0,.125)]">
            <div className="flex items-center gap-3 border-b border-[rgba(0,0,0,.125)] bg-[rgba(0,0,0,0.03)] px-3 py-2">
              <Icon icon="emojione:red-circle" width={10} />
              <Icon icon="twemoji:yellow-circle" width={10} />
              <Icon icon="twemoji:green-circle" width={10} />
            </div>
            <div
              className="p-3 text-justify"
              style={{
                height: "auto",
                fontSize: "132%",
                lineHeight: "200%",
              }}
            >
              <br />
              <span className="text-xl font-medium dark:text-white">
                {t("about_me.greeting")}
              </span>
              <br />
              <br />
              <p className="text-sm font-medium dark:text-white">
                {t("about_me.content")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
