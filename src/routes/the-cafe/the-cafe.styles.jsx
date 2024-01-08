import styled, { createGlobalStyle } from 'styled-components';

let coffeehouse = 'https://www.w3schools.com/w3images/coffeehouse.jpg';

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    main,
    menu,
    nav,
    section {
        display: block
    }

    a {
        background-color: transparent
    }

    a:active,
    a:hover {
        outline-width: 0
    }

    img {
        border-style: none
    }
    
    body, html {
        height: 100%;
        font-family: "Inconsolata", sans-serif;
    }
    
    .bgimg {
        background-position: center;
        background-size: cover;
        background-image: url(${coffeehouse});
        min-height: 75%;
        border: 1px solid red;
    }

    .menu {
        display: none;
    }
`;

export const W3Top = styled.div`
    position: fixed;
    width: 100%;
    z-index: 1;
    top: 0;
`;

export const W3Row = styled.div`
    &:after,
    &:before {
        content: "";
        display: table;
        clear: both;
    }

    .w3-padding {
        padding: 8px 16px;
        font-size: 100px;
    }

    .w3-black {
        color: #fff;
        background-color: #000;
    }
`;

export const Header = styled.header`
    
    .bgimg {
        background-position: center;
        background-size: cover;
        background-image: url(${coffeehouse});
        min-height: 75%;
        border: 1px solid red;
    }
`;