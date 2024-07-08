import Texts from "./Texts.js";

const sudokuImage = "/src/asserts/simple-sudoku-app.png";
const faceSimilarityImage = "/src/asserts/do-we-look-alike.png";
const openaiImage = "/src/asserts/openai-api-demo.png";

/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.category
 * @param {string} props.description
 * @param {string} props.siteLink
 * @param {string} props.repoLink
 * @param {string} props.imageSrc
 * @param {string} props.gotoSite
 * @returns {JSX.Element}
 */
const Panel = ({ title, category, description, siteLink, repoLink, imageSrc, gotoSite }) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={imageSrc} alt="blog" />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">{category}</h2>
          <h1 className="title-font text-lg font-medium text-gray-900 dark:text-white mb-3">{title}</h1>
          <p className="leading-relaxed mb-3">{description}</p>
          <div className="flex items-center flex-wrap">
            <a className="text-green-500 dark:text-green-400 inline-flex items-center md:mb-2 lg:mb-0 hover:underline" href={siteLink}>
              {gotoSite}
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <a
              class="mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 hover:text-green-500 dark:hover:text-green-400"
              href={repoLink}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-5 h-5"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * @param {Object} props
 * @param {Texts} props.texts
 * @returns {JSX.Element}
 */
const Panels = ({ texts }) => {
  return (
    <section className="body-font container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        <Panel
          title={texts.sudokuTitle}
          category={texts.sudokuCategory}
          description={texts.sudokuDescription}
          siteLink="https://simple-sudoku-app.onrender.com/"
          repoLink="https://github.com/TakanariShimbo/simple-sudoku-app"
          imageSrc={sudokuImage}
          gotoSite={texts.gotoSite}
        />
        <Panel
          title={texts.faceSimilarityTitle}
          category={texts.faceSimilarityCategory}
          description={texts.faceSimilarityDescription}
          siteLink="https://do-we-look-alike.streamlit.app/"
          repoLink="https://github.com/TakanariShimbo/do-we-look-alike"
          imageSrc={faceSimilarityImage}
          gotoSite={texts.gotoSite}
        />
        <Panel
          title={texts.openaiTitle}
          category={texts.openaiCategory}
          description={texts.openaiDescription}
          siteLink="https://openai-api-demo.streamlit.app/"
          repoLink="https://github.com/TakanariShimbo/openai-api-demo"
          imageSrc={openaiImage}
          gotoSite={texts.gotoSite}
        />
      </div>
    </section>
  );
};

export default Panels;
