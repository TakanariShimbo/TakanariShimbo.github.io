import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center justify-center bg-[#1f1f1f] p-5 pb-20">
      <h2 className="py-10 text-center text-xl font-medium uppercase tracking-widest text-white">
        {t("skills.title")}
      </h2>

      <ul className="flex flex-wrap justify-center gap-5 max-[900px]:max-w-xl">
        {t("skills.icons", { returnObjects: true }).map((skill) => (
          <li
            key={skill.name}
            className="flex h-[84px] w-[150px] flex-col items-center justify-center rounded-lg bg-[#2A2929] p-[5x] text-white"
          >
            <Icon icon={skill.class} className="mx-auto h-10 w-10" />
            <p className="mt-3 text-center text-xs">{skill.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
