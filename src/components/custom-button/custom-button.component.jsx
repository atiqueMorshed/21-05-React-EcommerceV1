import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, ...otherCustomButtonProps}) => (
    <button className='custom-button' {...otherCustomButtonProps} >
        {children}
    </button>
)

export default CustomButton;