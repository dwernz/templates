import styled from 'styled-components';

export const GlobalStyle = styled.body`
    body {
       background-color: red; 
    }
`;

export const Navbar = styled.nav`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 64px;
    background: #19191c;
    color: #f9f9f9;
    font-family: "Poppins", sans-serif;
    box-sizing: border-box;
    
    & * {
        box-sizing: border-box;
    }

    button {
        border: 0;
        padding: 0;
        font-family: inherit;
        background: transparent;
        color: inherit;
        cursor: pointer;
    }

    @media (min-width: 600px) {
        justify-content: space-between;
        padding: 0 0 0 16px;
    }
`;

export const NavbarOverlay = styled.div`
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    visibility: hidden;
    opacity: 0;
    transition: 0.3s;

    &.open {
        visibility: visible;
        opacity: 1;
    }

    @media (min-width: 600px) {
        display: none;
    }
`;

export const NavbarBurger = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    place-items: center;
    width: 64px;
    height: 64px;
    padding: 0;

    @media (min-width: 600px) {
        display: none;
    }
`;

export const NavbarTitle = styled.h1`
    margin: 0;
    font-size: 16px;
`;

export const NavbarMenu = styled.nav`
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    translate: -100% 0;
    width: 270px;
    height: 100%;
    padding: 20px;
    display: flex;
    gap: 8px;
    flex-direction: column;
    background: #000000;
    visibility: hidden;
    transition: translate 0.3s;

    .open {
        translate: 0 0;
        visibility: visible;
    }

    @media (min-width: 600px) {
        position: static;
        translate: 0 0;
        width: auto;
        background: transparent;
        flex-direction: row;
        visibility: visible;
    }

    button {
        color: rgba(255, 255, 255, 0.5);
        background: transparent;
        padding: 0 8px;

        &.active {
            color: inherit;
        }
    }
`;