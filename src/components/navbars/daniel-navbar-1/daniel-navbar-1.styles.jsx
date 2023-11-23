import styled from "styled-components";

export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #f0f0f0;
    border-bottom: 1px solid #ccc;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const NavbarLink = styled.a`
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: #333;
    font-weight: 500;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #999;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const NavbarBurger = styled.button`
  display: none;
  padding: 0.5rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  border-radius: 5px;
  position: relative;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    background-color: #999;
  }
`;

export const NavbarMenu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    transform: translateX(-100%);
    transition: transform 0.2s ease-in-out;

    &.open {
      transform: translateX(0);
    }
  }
`;

export const NavbarMenuLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export const NavbarMenuLink = styled.a`
    z-index: 2;
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 3rem;
    color: white;

    &:nth-child(1) {
      background: rgba(217, 0, 0, 0.5);
    }

    &:nth-child(2) {
      background: rgba(217, 0, 217, 0.5);
    }

    &:nth-child(3) {
      background: rgba(0, 217, 0, 0.5);
    }

    &:nth-child(4) {
      background: rgba(0, 0, 217, 0.5);
    }

    &:hover {
      filter: brightness(0.8);
    }
`;

export const CloseBtn = styled.button`
    z-index: 5;
    position: fixed;
    top: 0;
    right: 0;
    border: none;
    cursor: pointer;
    background: rgba(255, 255, 255, 1);
    margin: 15px;
    font-size: 24px;
    border-radius: 5px;
    height: 50px;
    width: 50px;
`;