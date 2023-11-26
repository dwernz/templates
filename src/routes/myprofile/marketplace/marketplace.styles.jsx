import styled from 'styled-components';

export const ProfileItem = styled.div`
    margin-bottom: 30px;

    a {
        color: #444;

        &:hover {
            color: #ff5722;
        }
    }
`;

export const MediaObject = styled.img`
    width: 30px;
`;

export const Media = styled.div`
    overflow: hidden;
    zoom: 1;

    &:first-child {
        margin-top: 0;
    }
`;

export const MediaLeft = styled.div`
    display: table-cell;
    vertical-align: top;
    padding-right: 10px;
`;

export const MediaBody = styled.div`
    display: table-cell;
`;

export const MediaHeading = styled.h3`
    margin-top: 0;
    margin-bottom: 5px;
    color: #989898;

    a {
        display: block;
        text-transform: uppercase;
    }
`;