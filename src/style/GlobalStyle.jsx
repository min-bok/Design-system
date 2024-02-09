import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    :root {
        --main-color: #ff7792;
        --light-color: #f2f2f2;
        --hover-color:#fc6684;
        --button-shadow: 2px 4px 5px #00000013;
    }

    ${reset}

    /* --- font --------------- */
    @font-face {
        font-family: 'Pretendard';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-style: normal;
    }


    * {
        box-sizing: border-box;
    }

    /* --- font --------------- */
    @font-face {
        font-family: 'Pretendard';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-style: normal;
    }


    * {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: "Pretendard";
        background-color: var(--light-color);
    }

    button {
        border: none;
        font-family: "Pretendard";
        cursor: pointer;
    }

`;

export default GlobalStyle;
