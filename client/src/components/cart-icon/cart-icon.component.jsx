import React from 'react';

import {toggleCartHidden} from '../../redux/cart/cart.action';
import {selectCartItemCount} from '../../redux/cart/cart.selectors';

import {connect} from 'react-redux'; 
import {createStructuredSelector} from 'reselect';

import {CartIconContainer, ShoppingIcon, ItemCountContainer} from './cart-icon.styles';
// import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIcon />
        <ItemCountContainer>
            {itemCount}
        </ItemCountContainer>
    </CartIconContainer>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);