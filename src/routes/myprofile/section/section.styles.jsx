import styled from "styled-components";

export const SectionWrapper = styled.section`
    padding: 50px 0;

    @media (max-width: 768px) {
        padding: 20px 0;
    }

    @media (max-width: 600px) {
        padding: 20px;
    }
`;

export const SectionTitle = styled.div`
    margin-right: 30px;
    text-align: right;

    h2 {
        font-size: 14px;
        margin-bottom: 5px;
        color: #bbbbbb;
        text-transform: uppercase;

        @media (max-width: 768px) {
            font-size: 18px;
            margin-bottom: 20px;
        }
    }

    @media (max-width: 768px) {
        text-align: left;
    }
`;

export const ItemStats = styled.div`
    @media (max-width: 768px) {
        margin-bottom: 30px;
    }
`;

export const ItemStatsValue = styled.div`
    font-size: 18px;
    color: #444;
    font-weight: 500;
`;

export const ItemStatsName = styled.div`
    font-size: 12px;
    text-transform: uppercase;
    line-height: 1;
`;