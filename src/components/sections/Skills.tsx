import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { SkillType } from "@/i18n/config";

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
  skills: SkillType[];
};

const Main = ({ skills }: MainProps) => {
  return (
    <ul className="flex max-w-xl flex-wrap justify-center gap-x-5 gap-y-10 laptop:max-w-full">
      {skills.map((skill) => (
        <li
          key={skill.name}
          className="flex h-20 w-36 flex-col items-center justify-center rounded-lg bg-gray-900 p-2"
        >
          <Icon icon={skill.class} className="mx-auto h-10 w-10" />
          <p className="mt-3 text-center text-xs">{skill.name}</p>
        </li>
      ))}
    </ul>
  );
};

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center bg-gray-950 px-5 py-10 pb-20 text-white"
    >
      <Title title={t("skills.title")} />
      <Main skills={t("skills.icons", { returnObjects: true })} />
    </section>
  );
};

export default Skills;
