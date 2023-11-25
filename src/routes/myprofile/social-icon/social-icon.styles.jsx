import styled from "styled-components";

export const SocialIconContainer = styled.ul`
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