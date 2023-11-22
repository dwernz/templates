import styled from 'styled-components';

export const ReturnToHomeContainer = styled.div`
    background: whitesmoke;
    border: 1px solid black;
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: end;
`;

export const Link = styled.a`
    font-size: 1.25rem;
    text-decoration: none;
    margin: 15px;
    color: white;
    padding: .375rem 0.75rem;
    font-weight: 400;
    line-height: 1.5;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #0d6efd;

    &:hover {
        background-color: #0b5ed7;
    }
`;