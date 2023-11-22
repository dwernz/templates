import styled from 'styled-components';

// Currently following the code on the repo does not yield the results I want.
// https://www.instagram.com/p/CzBkmagMXlX/

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    ${'' /* Changed to single column until it is fixed and having multiple makes sense. */}
    ${'' /* grid-template-columns: repeat(2, 1fr); */}
    grid-gap: 5px;
`;

export const Card = styled.div`
    position: relative;
    background-color: transparent;
    width: 300px;
    height: 300px;
    perspective: 1000px;
    transform: perspective(750px) translate3d(0px, 0px, -250px) rotateX(27deg) scale(0.9, 0.9);
    border-radius: 20px;
    border: 5px solid #e6e6e6;
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.3);
    transition: 0.4s ease-in-out transform, 0.4s ease-in-out box-shadow;

    &:hover {
        transform: translate3d(0px, 0px, -250px);
        box-shadow: 0 50px 80px -20px rgba(32, 195, 187, 0.5);
    }
`;

export const CardInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-styled: preserve-3d;

    ${Card}:hover & {
        transform: rotateY(180deg);
    }
`;

export const CardBase = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 16px;
    background: linear-gradient(to right, #1abc9c, #3498db);
`;

export const CardFront = styled(CardBase)`
    background: linear-gradient(to right, #1abc9c, #3498db);

    img {
        width: 200px;
        margin-top: 18px;
    }
`;

export const CardBack = styled(CardBase)`
    background: linear-gradient(to right, #1abc9c, #3498db);
    color: #ffffff;
    box-shadow: 0 5px 20px #3498db;
    transform: rotateY(180deg);

    img {
        width: 140px;
        margin-top: 1rem;
        transform: perspective(3000px) rotateY(5deg);
    }

    h3 {
        margin-bottom: 0.3rem;
        border: 1px solid red;
    }

    h1 {
        margin: 0;
    }
`;