import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Hind', sans-serif;
        font-size: 15px;
        line-height: 1.8em;
        color: #989898;
        font-weight: 300;
        background: #f8f8f8;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0 0 15px;
        color: #444444;
    }

    h1 {
        font-size: 36px;
        line-height: 1.8em;
        font-weight: 700;
    }

    h2 {
        font-size: 18px;
        line-height: 1.8em;
        font-weight: 700;
    }

    h3 {
        font-size: 13px;
        line-height: 1.8em;
        font-weight: 700;
    }

    h4 {
        font-size: 15px;
        line-height: 1.8em;
        font-weight: 500;
    }

    h5 {
        font-size: 15px;
        line-height: 1.5em;
        font-weight: 500;
    }

    h6 {
        font-size; 15px;
        line-height: 1.5em;
    }

    a {
        color: #ff5722;
        text-decoration: none;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
        transition: all 0.3s ease 0s;
    }

    a,
    a:active,
    a:focus,
    a:active {
        text-decoration: none;
        outline: none;
    }

    a:hover,
    a:focus {
        text-decoration: none;
        color: #ff5722;
    }

    p {
        margin-bottom: 20px;
    }

    strong {
        color: #444444;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
`;

export const MainWrapper = styled.div`
    overflow: hidden;
`;