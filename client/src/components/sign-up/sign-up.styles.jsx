import styled from 'styled-components';

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    @media screen and (max-width: 1000px) {
        width: 500px;
        margin-top: 60px;
        margin-left: 0;
        margin-right: 0;
        align-items: center;
        padding: 0;
    }
`;

export const SignUpTitleElement = styled.h2`
    margin: 10px 0;
`;