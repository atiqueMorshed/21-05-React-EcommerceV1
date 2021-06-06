import styled, {css} from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const ShriknLabelStyles = css`
    top: -14px;
    font-size: 12px;
    color: ${mainColor};
`;

const hasInputValue = props => {
    if(props.inputValue) {
        return ShriknLabelStyles;
    }
};

export const GroupContainer = styled.div`
    position: relative;
    margin: 45px 0;

    input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputLabelElement = styled.label`
    color: ${subColor};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
    ${hasInputValue};
`;

export const FormInputElement = styled.input`
    background: none;
    background-color: white;
    color: ${subColor};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${subColor};
    margin: 25px 0;

    &:focus {
      outline: none;
    }

    &:focus ~ ${FormInputLabelElement} {
      ${ShriknLabelStyles};
    }
`;


