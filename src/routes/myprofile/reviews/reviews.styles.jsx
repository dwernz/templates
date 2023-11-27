import styled from "styled-components";

export const Review = styled.div`

`;

export const MediaLeft = styled.div`
    padding-right: 15px;

    img {
        width: 50px;
        border-radius: 3px;
    }
`;

export const UserName = styled.div`
    color: #444;
    font-weight: 500;
`;

export const ReviewText = styled.div`
    margin: 10px 0;
`;

export const Rating = styled.div`
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;

    &::after {
        content: attr(data-star_rating);
        padding: 3px 5px 0;
        color: #444;
        font-size: 16px;
        font-weight: 500;
        line-height: 21px;
        border-radius: 2px;
        margin-left: 5px;
    }
`;

export const RatingTotal = styled.div`
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    position: relative;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 80px;
    height: 16px;
    margin-top: -2px;
`;

export const RatingProgress = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    width: 120%;

    &::after,
    &::before {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-size: 80px 16px;
        background-repeat: no-repeat;
        content: "";
    }

    &::before {
        background-image: url('../assets/images/rating-background.svg');
    }

    &::after {
        background-image: url('../assets/images/rating-foreground.svg');
    }

    .rate-0::after {
        width: 0;
    }

    .rate-1::after {
        width: 20%;
    }

    .rate-2::after {
        width: 40%;
    }

    .rate-3::after {
        width: 60%;
    }

    .rate-4::after {
        width: 80%;
    }

    .rate-5::after {
        width: 100%;
    }
`;

export const Media = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`;

export const MediaBody = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`;