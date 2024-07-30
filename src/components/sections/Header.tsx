import { useContext } from "react";
import Switch from "react-switch";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import { TypeAnimation } from "react-type-animation";
import { ThemeContext, ThemeContextInterface } from "@/contexts";

const DevIcon = () => {
  return (
    <div>
      <Icon
        icon="la:laptop-code"
        style={{
          height: "100%",
          fontSize: 150,
        }}
      />
    </div>
  );
};

interface NameProps {
  name: string;
}

const Name = ({ name }: NameProps) => {
  return <h1 className="text-4xl font-bold">{name}</h1>;
};

interface SkillsAnimationProps {
  skills: string[];
}

const SkillsAnimation = ({ skills }: SkillsAnimationProps) => {
  return (
    <TypeAnimation
      sequence={skills.flatMap((title: string) => [title, 1000])}
      wrapper="span"
      speed={50}
      className="text-regular text-2xl"
      repeat={Infinity}
    />
  );
};

interface ThemeSwitchProps {
  darkTheme: boolean;
  toggleTheme: () => void;
}

const ThemeSwitch = ({ darkTheme, toggleTheme }: ThemeSwitchProps) => {
  return (
    <Switch
      checked={darkTheme}
      onChange={toggleTheme}
      offColor="#baaa80"
      onColor="#353535"
      className="react-switch mx-auto"
      width={90}
      height={40}
      uncheckedIcon={
        <Icon
          className="ml-4 h-full text-end text-[25px]"
          icon="noto-v1:first-quarter-moon-with-face"
        />
      }
      checkedIcon={
        <Icon
          className="ml-4 h-full text-end text-[25px]"
          icon="noto-v1:sun-with-face"
        />
      }
    />
  );
};

interface FlagIconProps {
  lang: string;
  currentLang: string;
  icon: string;
  onClick: () => void;
}

const FlagIcon = ({ lang, currentLang, icon, onClick }: FlagIconProps) => (
  <Icon
    className={clsx(
      "h-full cursor-pointer text-[50px]",
      currentLang === lang && "brightness-50",
    )}
    icon={icon}
    onClick={onClick}
  />
);

const HeaderMain = () => {
  const { darkTheme, toggleTheme } = useContext(
    ThemeContext,
  ) as ThemeContextInterface;
  const { t } = useTranslation();

  return (
    <div className="flex h-[80svh] min-h-[500px] w-full flex-col items-center justify-center gap-5 bg-ocher-200 pt-[10svh] text-gray-900 dark:bg-gray-800 dark:text-white">
      <DevIcon />
      <Name name={t("basic_info.name")} />
      <SkillsAnimation
        skills={t("basic_info.titles", { returnObjects: true })}
      />
      <ThemeSwitch darkTheme={darkTheme} toggleTheme={toggleTheme} />
    </div>
  );
};

const HeaderBottom = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex min-h-[20svh] justify-center gap-5 bg-ocher-200 pb-2.5 pt-20 dark:bg-gray-800">
      <FlagIcon
        lang="en"
        currentLang={i18n.language}
        icon="twemoji:flag-united-states"
        onClick={() => i18n.changeLanguage("en")}
      />
      <FlagIcon
        lang="ja"
        currentLang={i18n.language}
        icon="twemoji:flag-japan"
        onClick={() => i18n.changeLanguage("ja")}
      />
    </div>
  );
};

const Header = () => {
  return (
    <header id="home">
      <HeaderMain />
      <HeaderBottom />
    </header>
  );
};

export default Header;
