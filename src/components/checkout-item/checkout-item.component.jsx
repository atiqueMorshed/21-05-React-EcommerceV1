import React, {useContext} from 'react';

import {CartContext} from '../../providers/cart/cart.provider';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem}) => {
    const {addItem, removeItem, removeWholeItem} = useContext(CartContext);
    const {name, imageUrl, price, quantity} = cartItem;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='Item Image'/>
            </div>
            <div className='name'>{name}</div>
            <div className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                <div className='value'>{quantity}</div>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </div>
            <div className='price'>{price}</div>
            <div className='remove-button' onClick={() => removeWholeItem(cartItem)}>&#10005;</div>
        </div>
    );
};

export default CheckoutItem;