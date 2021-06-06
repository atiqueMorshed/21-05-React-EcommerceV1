import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
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
`;