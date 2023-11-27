import styled from "styled-components";

export const ColMd4ColSm6 = styled.div`
    width: 30%;
    float: left;
    margin-left: 1%;
    margin-right: 1%;

    @media (max-width: 767px) {
        width: 48%;
        float: left;
        margin-left: .5%;
        margin-right: .5%;
    }
`;

export const PortfolioItem = styled.a`
    position: relative;
    display: block;
    margin-bottom: 30px;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        top: 100%;
        left: 0;
        right: 0;
        background: -webkit-linear-gradient(top, transparent 0%, #000 100%);
        transition: all .2s linear;
    }

    &:hover {
        &::after {
            top: 0;
        }
    }
`;

export const PortfolioThumb = styled.div`
    img {
        height: auto;
        display: block;
        width: 100%;
    }
`;

export const PortfolioInfo = styled.div`
    position: absolute;
    padding: 15px 15px 5px;
    
    bottom: 0;
    z-index: 1;
    background: -webkit-linear-gradient(top, transparent 0%, rgba(0, 0, 0, 0.5) 100%);

    h3 {
        margin: 0;
        line-height: 1;
        color: #fff;
        font-weight: 500;
        text-transform: uppercase;
        width: 100%;
    }

    small {
        color: rgba(255, 255, 255, 0.5);
    }
`;