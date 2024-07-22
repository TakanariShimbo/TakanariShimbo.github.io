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
  <span className="rounded-xl bg-yellow px-[5px] py-[2px] text-sm dark:bg-[#919191] dark:text-white">
    {text}
  </span>
);

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section
      id="history"
      className="flex flex-col items-center justify-center bg-yellow p-5 py-10 pb-20 dark:bg-[#7f7f7f]"
    >
      <h2 className="py-10 text-center text-xl font-medium uppercase tracking-widest text-white">
        {t("experience.title")}
      </h2>

      <div className="w-full max-[1170px]:max-w-xl">
        <VerticalTimeline>
          {t("experience.experiences", { returnObjects: true }).map((exp) => (
            <VerticalTimelineElement
              key={exp.company}
              date={exp.years}
              dateClassName="text-black"
              iconClassName="bg-[#AE944F] text-white dark:bg-[#919191]"
              icon={<Icon icon={exp.icon} />}
              className="dark:brightness-80 dark:filter"

              // contentStyle={{ filter: "brightness(80%)" }}
            >
              <h3 className="text-lg font-bold">{exp.company}</h3>
              <h4 className="text-md font-bold">{exp.section}</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} text={tech} />
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
          <VerticalTimelineElement
            iconClassName="bg-[#AE944F] text-white dark:bg-[#919191]"
            icon={<Icon icon="eos-icons:hourglass" />}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
