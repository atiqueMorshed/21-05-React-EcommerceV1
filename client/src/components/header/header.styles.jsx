import styled, {css} from 'styled-components';

import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg'

const optionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
`;

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width: 800px) {
        padding: 10px;
        height: 60px;
    }
    @media screen and (max-width: 500px) {
        height: 80px;
        padding: 0;
        flex-direction: column;
        align-items: center;
        margin: 25px 0;
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;

    @media screen and (max-width: 800px) {
        width: 50px;
        padding: 0;
    }
`;

export const LogoElement = styled(Logo)`

`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px) {
        width: 80%;
    }
    @media screen and (max-width: 500px) {
        justify-content: center;
        margin-top: 15px;
    }
`;

export const OptionLink = styled(Link)`
    ${optionContainerStyles};
`;

export const OptionDiv = styled.div`
    ${optionContainerStyles}
`;