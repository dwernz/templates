import styled from "styled-components";

const orange = "#ff5722";

export const HeaderContainer = styled.header`
    padding: 50px 0;
    margin: 0;
    position: relative;
    border-top: 5px solid ${orange};

    @media(max-width: 768px) {
        padding: 20px 0;
    }

    @media(max-width: 600px) {
        padding: 20px;
    }
`;

export const ProfileImg = styled.div`
    margin-right: 30px;

    @media(max-width: 768px) {
        margin: 0 0 30px;   
    }
`;

export const NameWrapper = styled.div`
    margin-bottom: 30px;
`;

export const Name = styled.h1`
    text-transform: uppercase;
    line-height: 1;
    margin: 0 0 5px;
`;

export const NameSpan = styled.span`
    font-size: 24px;
    color: ${orange};
`;

export const PersonalDetails = styled.div`
    margin: 10px 0;
    text-transform: uppercase;

    strong {
        font-size: 13px;
        color: #444444;
        display: block;
        line-height: 1;
    }

    small {
        font-size: 12px;
    }

    span {
        color: #989898;
    }
`;

export const Language = styled.span`
    display: inline-block;

    strong {
        display: inline;
    }

    span {
        display: inline;
    }
`;

export const ColMd9 = styled.div`
    flex: 0 0 75%;
    max-width: 75%;

    @media (min-width: 992px) {
        flex: 0 0 60%;
        max-width: 60%;
    }
`;

export const ColMd6 = styled.div`
    flex: 0 0 50%;
    max-width: 50%;s
`;

export const ImgResponsive = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 8px;
`;