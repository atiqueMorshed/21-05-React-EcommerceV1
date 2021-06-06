import React from 'react';

import {GroupContainer, FormInputElement, FormInputLabelElement} from './form-input.styles';
// import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...otherFormInputProps}) => (
    <GroupContainer>
        <FormInputElement onChange={handleChange} {...otherFormInputProps} />
        { label ? (<FormInputLabelElement inputValue={otherFormInputProps.value}> {label} </FormInputLabelElement>) : null }
    </GroupContainer>
)

export default FormInput;