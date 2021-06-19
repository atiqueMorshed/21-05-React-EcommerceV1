import styled from 'styled-components';

export const SignInAndSignOutContainer = styled.div`
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;