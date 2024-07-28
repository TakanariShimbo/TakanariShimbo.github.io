import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className="bg-gray-950 flex flex-col items-center justify-center p-5 pb-20 text-white"
    >
      <h2 className="py-10 text-center text-xl font-medium uppercase tracking-widest">
        {t("skills.title")}
      </h2>

      <ul className="flex flex-wrap justify-center gap-5 max-[900px]:max-w-xl">
        {t("skills.icons", { returnObjects: true }).map((skill) => (
          <li
            key={skill.name}
            className="bg-gray-900 flex h-20 w-36 flex-col items-center justify-center rounded-lg p-2"
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
