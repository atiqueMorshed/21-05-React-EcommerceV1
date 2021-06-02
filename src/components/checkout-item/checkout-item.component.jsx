import React from 'react';

import {connect} from 'react-redux';

import {addItem, removeItem, removeTheWholeItem} from '../../redux/cart/cart.action';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem, removeTheWholeItem, addItem, removeItem}) => {
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
            <div className='remove-button' onClick={() => removeTheWholeItem(cartItem)}>&#10005;</div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    removeTheWholeItem: item => dispatch(removeTheWholeItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});
export default connect(null, mapDispatchToProps)(CheckoutItem);