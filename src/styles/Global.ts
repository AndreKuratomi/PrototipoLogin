import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --black: #000;
        --externalDashboardGreen: #06A460;
        --hoverGreen: #178F51;
        --lightGreen: #EBF5ED;
        --white: #fff;
    }

    *{
        box-sizing: border-box;
    }

    figcaption {
        display: none;
    }


`;
