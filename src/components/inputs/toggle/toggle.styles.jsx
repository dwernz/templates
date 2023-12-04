import styled from "styled-components";

export const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`;

export const Switch = styled.div`
    position: relative;
    width: 60px;
    height: 32px;
    background: #b3b3b3;
    border-radius: 32px;
    padding: 4px;
    transition: .3s all;

    &:before {
        content: "";
        position: absolute;
        width: 28px;
        height: 28px;
        border-radius: 35px;
        top: 50%;
        left: 4px;
        background: white;
        transform: translate(0, -50%);
        transition: .3s all;
    }
`;

export const Input = styled.input`
    display: none;

    &:checked + ${Switch} {
        ${'' /* Default color, if not specified */}
        background: green; 
        ${'' /* Color if specified */}
        background: ${props => props.color};

        &:before {
            transform: translate(32px, -50%);
        }
    }
`;