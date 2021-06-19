import styled from 'styled-components';

export const SignInContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1000px) {
        align-items: center;
        margin: 50px 0;
        width: 500px;
    }
`;

export const SignInTitle = styled.h2`
    margin: 10px 0;
`;

export const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
        width: 100%;
    }
`;