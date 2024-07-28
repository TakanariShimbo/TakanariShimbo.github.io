import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

interface BadgeProps {
  text: string;
}

const Badge = ({ text }: BadgeProps) => (
  <span className="bg-ocher-200 dark:bg-gray-400 text-gray-900 rounded-xl px-[5px] py-[2px] text-sm dark:text-white">
    {text}
  </span>
);

const History = () => {
  const { t } = useTranslation();

  return (
    <section
      id="history"
      className="text-gray-900 bg-ocher-200 dark:bg-gray-400 flex flex-col items-center justify-center p-5 py-10 pb-20 dark:text-white"
    >
      <h2 className="py-10 text-center text-xl font-medium uppercase tracking-widest">
        {t("history.title")}
      </h2>

      <div className="desktop:max-w-full w-full max-w-xl">
        <VerticalTimeline>
          {t("history.experiences", { returnObjects: true }).map((exp) => (
            <VerticalTimelineElement
              key={exp.company}
              date={exp.years}
              dateClassName="text-black dark:desktop:text-white"
              iconClassName="bg-gold-500 text-white dark:bg-gray-600"
              icon={<Icon icon={exp.icon} />}
              className="dark:brightness-80 text-gray-900 dark:filter"

              // contentStyle={{ filter: "brightness(80%)" }}
            >
              <h3 className="text-gray-900 text-lg font-medium">
                {exp.company}
              </h3>
              <h4 className="text-md text-gray-900 font-medium">
                {exp.section}
              </h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} text={tech} />
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
          <VerticalTimelineElement
            iconClassName="bg-gold-500 text-white dark:bg-gray-600"
            icon={<Icon icon="eos-icons:hourglass" />}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default History;
