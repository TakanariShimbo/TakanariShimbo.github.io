/**
 * @returns {JSX.Element}
 */
export const Header = ({ handleChangeTheme, theme }) => {
  const title = "My Apps Potal Site";
  const subTitle = "INTRODUCE MY APPS";
  const description =
    "Here are the AI web applications I have developed. These applications leverage mathematical optimization, machine learning techniques such as deep learning, and the recently popular generative AI.";

  const themeIcon =
    theme === "dark" ? (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" />
        <path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z" />
        <path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" />
        <path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" />
        <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" />
        <path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z" />
        <path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" />
        <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" />
        <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" />
      </svg>
    );

  return (
    <header className="pt-24">
      <div className=" body-font bg-gray-100 dark:bg-gray-800 dark:bg-opacity-75">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <button onClick={handleChangeTheme} className="hover:text-green-500 dark:hover:text-green-400">
              {themeIcon}
            </button>
            {/* <button onClick={handleChange} className="ml-3 hover:text-green-500 dark:hover:text-green-400">
              {themeIcon}
            </button> */}
          </span>
        </div>
        <div className="px-5 pb-12 flex flex-col text-center w-full">
          <h2 className="text-xs text-green-500 dark:text-green-400 tracking-widest font-medium title-font mb-1">{subTitle}</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">{title}</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{description}</p>
        </div>
      </div>
    </header>
  );
};
