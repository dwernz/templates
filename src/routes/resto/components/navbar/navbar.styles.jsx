import styled from "styled-components";
import logo from '../../assets/img/logo.png';

export const ProbootstrapNavbar = styled.nav`
    border: 1px solid red;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-radius: 0px;
    margin-bottom: 0px;
    background: none;
    -webkit-transition: .3s all;
    transition: .3s all;

    .navbar-brand, .navbar-nav > li > a {
        padding-top: 54px;
        padding-bottom: 54px;
        padding-left: 0;
        padding-right: 0;
        margin-left: 15px;
        margin-right: 15px;

        @media (max-width: 768px) {
            padding-top: 15px;
            padding-bottom: 15px;
        }
    }

    .navbar-brand {
        padding-top: 0;
        padding-bottom: 0;
        font-size: 30px;
        text-transform: uppercase;
        background: url(${logo}) no-repeat left top;
        top: 40px;
        position: relative;
        width: 117px;
        height: 40px;
        text-indent: -999999px;
        -webkit-transition: .2s all;
        transition: .2s all;

        @media (max-width: 768px) {
            top: 5px;
            background-position: left 100%;
        }

        @media (max-width: 480px) {
            top: 6px;
        }
    }

    .navbar-nav > li > a {
        color: white;
        font-size: 15px;
        position: relative;
        text-transform: uppercase;

        @media (max-width: 768px) {
            padding-top: 8px;
            padding-bottom: 9px;
            color: rgba(0, 0, 0, 0.7);
        }
        
        &:hover, &:active, &:focus {
            color: rgba(255, 255, 255, 0.7);

            @media (max-width: 768px) {
                color: rgba(0, 0, 0, 0.7);
            }
        }
    }

    @media (max-width: 768px) {
        background: white;
        -webkit-box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
    }
`;

export const NavbarToggle = styled.button`
    border: none;

    &:focus, 
    &:hover {
        background-color: transparent;
        cursor: pointer;
    }

    span:nth-child(2) {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        -webkit-transform-origin: 10% 10%;
        transform-origin: 10% 10%;
    }

    span:nth-child(3) {
        opacity: 0;
    }

    span:nth-child(4) {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        -webkit-transform-origin: 10% 90%;
        transform-origin: 10% 90%;
    }

    .collapse {
        span:nth-child(2),
        span:nth-child(4) {
            -webkit-transform: rotate(0);
            transform: rotate(0);
        }

        span:nth-child(3) {
            opacity: 1;
        }
    }
`;

export const IconBar = styled.span`
    -webkit-transition: all 0.15s;
    transition: all 0.15s;
`;