class Texts {
  /**
   * @param {"jp" | "en"} lang
   */
  constructor(lang) {
    if (lang !== "jp" && lang !== "en") {
      throw new Error("Language in Texts should be 'jp' or 'en'!");
    }
    this._lang = lang;
  }

  /**
   * @param {Texts} texts
   * @returns {Texts}
   */
  static getAnotherTexts(texts) {
    return new Texts(texts.anotherLang);
  }
  /**
   * @returns {boolean}
   */
  get isJp() {
    return this._lang === "jp";
  }

  /**
   * @returns {boolean}
   */
  get isEn() {
    return this._lang === "en";
  }

  /**
   * @returns {string}
   */
  get lang() {
    return this._lang;
  }

  /**
   * @returns {string}
   */
  get anotherLang() {
    if (this.isEn) {
      return "jp";
    } else {
      return "en";
    }
  }

  /**
   * @returns {string}
   */
  get title() {
    if (this.isJp) {
      return "AIアプリ ポータルサイト";
    } else {
      return "AI Apps Portal Site";
    }
  }

  /**
   * @returns {string}
   */
  get subTitle() {
    if (this.isJp) {
      return "作成したアプリの紹介";
    } else {
      return "INTRODUCE MY APPS";
    }
  }

  /**
   * @returns {string}
   */
  get description() {
    if (this.isJp) {
      return "ここでは私が作成したAIアプリを紹介します。数理最適化やディープラーニング等の機械学習、最近話題の生成AIを活用しました。";
    } else {
      return "Here are the AI applications I have developed. These applications leverage mathematical optimization, machine learning techniques such as deep learning, and the recently popular generative AI.";
    }
  }

  /**
   * @returns {string}
   */
  get gotoSite() {
    if (this.isJp) {
      return "サイトへ";
    } else {
      return "Goto Site";
    }
  }

  /**
   * @returns {string}
   */
  get sudokuTitle() {
    if (this.isJp) {
      return "シンプル数独アプリ";
    } else {
      return "Simple Sudoku App";
    }
  }

  /**
   * @returns {string}
   */
  get sudokuCategory() {
    if (this.isJp) {
      return "数理最適化";
    } else {
      return "OPTIMIZATION";
    }
  }

  /**
   * @returns {string}
   */
  get sudokuDescription() {
    if (this.isJp) {
      return "ロジック部に OR-Tools を用いた数独アプリです。Fast API, React で構築しました。";
    } else {
      return "A simple Sudoku app powered by OR-Tools, built with FastAPI and React.";
    }
  }

  /**
   * @returns {string}
   */
  get faceSimilarityTitle() {
    if (this.isJp) {
      return "私たちって似てる？";
    } else {
      return "Do We Look A Like?";
    }
  }

  /**
   * @returns {string}
   */
  get faceSimilarityCategory() {
    if (this.isJp) {
      return "深層学習";
    } else {
      return "DEEP LEARNING";
    }
  }

  /**
   * @returns {string}
   */
  get faceSimilarityDescription() {
    if (this.isJp) {
      return "Insight Face を活用した顔の類似度を判定するアプリです。Streamlit で構築しました。";
    } else {
      return "A facial similarity detection app powered by InsightFace, built with Streamlit.";
    }
  }

  /**
   * @returns {string}
   */
  get openaiTitle() {
    if (this.isJp) {
      return "OpenAI API デモ";
    } else {
      return "OpenAI API Demo";
    }
  }

  /**
   * @returns {string}
   */
  get openaiCategory() {
    if (this.isJp) {
      return "生成AI";
    } else {
      return "GENERATIVE AI";
    }
  }

  /**
   * @returns {string}
   */
  get openaiDescription() {
    if (this.isJp) {
      return "OpenAI API のデモアプリです。利用には API KEY が必要です。Streamlit で構築しました。";
    } else {
      return "A demo app for the OpenAI API, built with Streamlit (*API Key is required).";
    }
  }

  /**
   * @returns {string}
   */
  get creatorName() {
    if (this.isJp) {
      return "新保 貴也";
    } else {
      return "Takanari Shimbo";
    }
  }
}

export default Texts;
