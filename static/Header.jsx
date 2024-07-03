/**
 * @returns {JSX.Element}
 */
export const Header = () => {
  const title = "My Apps Potal Site";
  const subTitle = "INTRODUCE MY APPS";
  const description =
    "Here are the AI web applications I have developed. These applications leverage mathematical optimization, machine learning techniques such as deep learning, and the recently popular generative AI.";
  return (
    <header className="pt-24">
      <div className=" body-font bg-gray-800 bg-opacity-75">
        <div className="px-5 py-6 flex flex-col text-center w-full">
          <h2 className="text-xs text-green-400 tracking-widest font-medium title-font mb-1">{subTitle}</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">{title}</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{description}</p>
        </div>
      </div>
    </header>
  );
};
