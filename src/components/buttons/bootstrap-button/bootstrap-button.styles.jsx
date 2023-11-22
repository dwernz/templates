import styled from 'styled-components';

export const Button = styled.button`
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border: 1px solid transparent;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    padding: .375rem 0.75rem;
    cursor: pointer;
    margin: 0;

    ${'' /*********************************************
        Colors
    **********************************************/}
    &.primary {
        background: #0d6efd;
        color: white;

        &:hover {
            background: #0b5ed7;
        }
    }

    &.secondary {
        background: #6c757d;
        color: white;

        &:hover {
            background: #5c6369;
        }
    }

    &.success {
        background: #198754;
        color: white;

        &:hover {
            background: #157347;
        }
    }

    &.danger {
        background: #dc3545;
        color: white;

        &:hover {
            background: #bb2d3b;
        }
    }

    &.warning {
        background: #ffca2c;
        color: black;

        &:hover {
            background: #ffc107;
        }
    }

    &.info {
        background: #0dcaf0;
        color: black;

        &:hover {
            background: #31d2f2;
        }
    }

    &.light {
        background: #f8f9fa;
        color: black;

        &:hover {
            background: #d3d4d5;
        }
    }

    &.dark {
        background: #212529;
        color: white;

        &:hover {
            background: #424649;
        }
    }

    ${'' /*********************************************
        Sizes
    **********************************************/}
    &.extra-small {
        font-size: .75rem;
        padding: .125rem .25rem;
    }
    
    &.small {
        font-size: .875rem;
        padding: 0.25 0.5rem;
    }

    &.large {
        font-size: 1.25rem;
        padding: 0.5rem 1.25rem;
        border-radius: .3rem;
    }

    &.extra-large {
        font-size: 1.5rem;
        padding: .875rem 1.75rem;
        border-radius: .5rem;
    }
`;