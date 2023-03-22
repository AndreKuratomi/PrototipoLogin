import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --alphaBlack: #fff0;
        --alphaBlackModal: rgba(0, 0, 0, 0.5);
        --alphaGray: rgba(3,3,3,8%);
        --black: #000;
        --blue: #00f;
        --externalDashboardGreen: #06A460;
        --formDarkGreen: #009E4F;
        --formLightGreen:#22BA87;
        --gray: #808080;
        --hoverBlue: #3f51b5;
        --hoverGreen: #178F51;
        --lightGreen: #EBF5ED;
        --shadowBlack: rgba(63 81 181 0.04);
        --white: #fff;
        --yellow: #E9B907;
    }

    *{
        box-sizing: border-box;
    }

    figcaption {
        display: none;
    }


`;
