import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CollectionPageTitles = styled.h2`
    font-size: 38px;
    margin: 0 auto 30px;
`;

export const CollectionPageItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
        gap: space-between;
        margin: auto;
    }

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
        gap: unset;
        margin: auto;
    }
`;