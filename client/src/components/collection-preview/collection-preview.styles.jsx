import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    @media screen and (max-width: 800px) {
        align-items: center;
    }
`;

export const CollectionPreviewTitle = styled.h1`
    font-size: 28px;
    width: fit-content;
    &:hover {
        color: #114e60;
        cursor: pointer;
    }
`;

export const PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
    }

    @media screen and (max-width: 500px) {
        display: grid;
        grid-template-columns: 1fr;
    }
`;