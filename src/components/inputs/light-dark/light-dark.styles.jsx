import styled, { createGlobalStyle } from 'styled-components';

let mainColor = (props) => props.mainColor;
let textColor = (props) => props.textColor;

export const GlobalStyle = createGlobalStyle`
    body {
        background: ${mainColor};
        color: ${textColor};
    }
`;