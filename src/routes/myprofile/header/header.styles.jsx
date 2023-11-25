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

export const SocialIcon = styled.ul`
    margin: 20px 0;
    padding: 0;
    display: block;

    li {
        display: inline-block;
        margin: 0 2px;

        a {
            display: block;
            font-size: 12px;
            color: #333333;
            width: 34px;
            height: 34px;
            line-height: 33px;
            text-align: center;
            border-radius: 2px;
            border: 2px solid #eeeeee;

            &:hover {
                border-color: #cccccc;
            }
        }
    }
`;

export const Language = styled.span`
    display: inline-block;

    strong {
        display: inline-block;
    }
`;