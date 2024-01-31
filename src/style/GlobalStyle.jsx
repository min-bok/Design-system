import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
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

    /* html {
        font-size: 62.5%;
    } */

    body {
        font-family: "Pretendard"
    }

    button {
        border: none;
        font-family: "Pretendard"
    }

`;

export default GlobalStyle;
