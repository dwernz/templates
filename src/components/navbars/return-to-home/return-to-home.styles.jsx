import styled from 'styled-components';

export const ReturnToHomeContainer = styled.div`
    position: fixed;
    top: 95%;
    right: 0;
    opacity: 0.5;
    margin-bottom: 15px;
    margin-right: 15px;
    z-index: 100000;

    &:hover {
        opacity: 1;
    }
`;

export const Link = styled.a`
    font-size: 1.25rem;
    text-decoration: none;
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