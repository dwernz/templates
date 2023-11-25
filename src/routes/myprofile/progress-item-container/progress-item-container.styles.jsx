import styled from "styled-components";

export const ProgressItem = styled.div`
    position: relative;
`;

export const ProgressTitle = styled.span`
    font-size: 12px;
    font-weight: 400;
    display: inline-block;
    margin-bottom: 5px;
`;

export const Progress = styled.div`
    height: 2px;
    box-shadow: none;
    border-radius: 0;
    background: transparent;
`;

export const ProgressBar = styled.div`
    background-color: #ff5722;
    box-shadow: none;
    text-align: right;
    height: 2px;
    margin-top: 5px;
`;

export const ProgressPercent = styled.span`
    font-size: 10px;
    background-color: #313131;
    position: absolute;
    top: 5px;
    padding: 0 8px;
    border-radius: 3px;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -4px;
        border-top: 6px solid #313131;
        border-right: 8px solid transparent;
    }
`;