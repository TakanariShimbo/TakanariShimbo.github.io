import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center bg-gray-950 p-5 pb-20 text-white"
    >
      <h2 className="py-10 text-center text-xl font-medium uppercase tracking-widest">
        {t("skills.title")}
      </h2>

      <ul className="flex max-w-xl flex-wrap justify-center gap-5 laptop:max-w-full">
        {t("skills.icons", { returnObjects: true }).map((skill) => (
          <li
            key={skill.name}
            className="flex h-20 w-36 flex-col items-center justify-center rounded-lg bg-gray-900 p-2"
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
