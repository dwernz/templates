import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');
    
    html {
        overflow-x: hidden;
    }

    body {
        background: #e4e4e4;
        color: #8b8e94;
        line-height: 24px;
        font-size: 15px;
        font-family: "Open Sans", Arial, sans-serif;
    }

    h1, h2, h3, h4, h5, h6 {
        color: #000;
        line-height: 1.5;
        font-family: "Open Sans", Arial, sans-serif;
    }

    h1 {
        font-size: 46px;
    }

    h2 {
        font-size: 36px;
    }

    h3 {
        font-size: 28px;
    }

    h4 {
        font-size: 36px;
    }

    h5, h6 {
        font-size: 14px;
    }

    p, ul, ol {
        margin-bottom: 30px;
    }

    a {
        -webkit-transition: .3s all;
        transition: .3s all;
        color: #ffa33e;

        &:hover, &:focus, &:active {
            color: #ff9725;
            text-decoration: none;
        }
    }
`;