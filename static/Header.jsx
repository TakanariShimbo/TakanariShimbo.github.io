/**
 * @returns {JSX.Element}
 */
export const Header = () => {
  const title = "My Apps Potal Site";
  const subTitle = "INTRODUCE MY SITES";
  const description =
    "Here are the AI web applications I have developed. These applications leverage mathematical optimization, machine learning techniques such as deep learning, and the recently popular generative AI.";
  return (
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-green-400 tracking-widest font-medium title-font mb-1">{subTitle}</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">{title}</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{description}</p>
    </div>
  );
};
