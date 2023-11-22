import styled from 'styled-components';

export const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
    min-width: 150px;
    background-color: #ffffff;
    border: 1px solid #cccccc;
    padding: 5px;
    border-radius: 5px;
`;

export const DropdownToggle = styled.div`
    padding: 5px 10px;
    margin: 0 5px;
    cursor: pointer;
    border: 1px solid #cccccc;
    background-color: #eeeeee;
`;

export const Dropdown = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    visibility: hidden;
    background-color: #ffffff;
    border: 1px solid #cccccc;
    padding: 5px;
    display: grid;

`;