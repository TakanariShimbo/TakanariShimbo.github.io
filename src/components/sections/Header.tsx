import { useContext } from "react";
import Switch from "react-switch";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import { TypeAnimation } from "react-type-animation";
import { ThemeContext, ThemeContextInterface } from "@/contexts";

const Header = () => {
  const { darkTheme, toggleTheme } = useContext(
    ThemeContext,
  ) as ThemeContextInterface;

  const { t, i18n } = useTranslation();

  return (
    <header id="home">
      <div className="h-[80svh] min-h-[500px] w-full bg-ocher-200 pt-[10svh] text-gray-900 dark:bg-gray-800 dark:text-white">
        <div className="flex h-full flex-col items-center justify-center gap-5">
          <div>
            <Icon
              icon="la:laptop-code"
              style={{
                height: "100%",
                fontSize: 150,
              }}
            />
          </div>

          <h1 className="text-4xl font-bold">{t("basic_info.name")}</h1>

          <TypeAnimation
            sequence={t("basic_info.titles", { returnObjects: true }).flatMap(
              (title: string) => [title, 1000],
            )}
            wrapper="span"
            speed={50}
            className="text-regular text-2xl"
            repeat={Infinity}
          />

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
        </div>
      </div>
      <div className="flex min-h-[20svh] justify-center gap-5 bg-ocher-200 pb-2.5 pt-20 dark:bg-gray-800">
        <Icon
          className={clsx(
            "h-full cursor-pointer text-[50px]",
            i18n.language === "en" && "brightness-50",
          )}
          icon="twemoji:flag-united-states"
          onClick={() => i18n.changeLanguage("en")}
        />
        <Icon
          className={clsx(
            "h-full cursor-pointer text-[50px]",
            i18n.language === "ja" && "brightness-50",
          )}
          icon="twemoji:flag-japan"
          onClick={() => i18n.changeLanguage("ja")}
        />
      </div>
    </header>
  );
};

export default Header;
