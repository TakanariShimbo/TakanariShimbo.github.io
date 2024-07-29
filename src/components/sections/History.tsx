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
  <span className="rounded-xl bg-ocher-200 px-[5px] py-[2px] text-sm text-gray-900 dark:bg-gray-400 dark:text-white">
    {text}
  </span>
);

const History = () => {
  const { t } = useTranslation();

  return (
    <section
      id="history"
      className="flex flex-col items-center justify-center bg-ocher-200 p-5 py-10 pb-20 text-gray-900 dark:bg-gray-400 dark:text-white"
    >
      <h2 className="py-10 text-center text-xl font-medium uppercase tracking-widest">
        {t("history.title")}
      </h2>

      <div className="w-full max-w-xl desktop:max-w-full">
        <VerticalTimeline>
          {t("history.experiences", { returnObjects: true }).map((exp) => (
            <VerticalTimelineElement
              key={exp.company}
              date={exp.years}
              dateClassName="text-black dark:desktop:text-white"
              iconClassName="bg-gold-500 text-white dark:bg-gray-600"
              icon={<Icon icon={exp.icon} />}
              className="dark:brightness-80 text-gray-900 dark:filter"
              contentStyle={{
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
              }}

              // contentStyle={{ filter: "brightness(80%)" }}
            >
              <h3 className="text-lg font-medium text-gray-900">
                {exp.company}
              </h3>
              <h4 className="text-md font-medium text-gray-900">
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
