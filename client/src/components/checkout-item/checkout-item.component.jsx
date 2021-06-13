import React from 'react';

import {connect} from 'react-redux';

import {addItem, removeItem, removeTheWholeItem} from '../../redux/cart/cart.action';

import {CheckoutItemContainer, ImageContainer, CheckoutItemImage, TextContainer, QuantityContainer, RemoveButtonContainer} from './checkout-item.styles';
// import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem, removeTheWholeItem, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;

    return (
        <CheckoutItemContainer>
            <ImageContainer className='image-container'>
                <CheckoutItemImage src={imageUrl} alt='Item Image'/>
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => addItem(cartItem)}>&#10095;</div>
            </QuantityContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButtonContainer onClick={() => removeTheWholeItem(cartItem)}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    removeTheWholeItem: item => dispatch(removeTheWholeItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});
export default connect(null, mapDispatchToProps)(CheckoutItem);