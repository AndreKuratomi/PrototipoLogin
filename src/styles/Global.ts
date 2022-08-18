import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --black: #000;
        --externalDashboardGreen: #06A460;
        --gray: #808080;
        --hoverGreen: #178F51;
        --lightGreen: #EBF5ED;
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
