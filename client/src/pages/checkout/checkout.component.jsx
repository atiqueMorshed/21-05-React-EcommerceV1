import React from 'react';

import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {selectCartTotal, selectCartItems} from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlockContainer, TotalContainer, TestPaymentContainer} from './checkout.styles';
import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total}) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Name</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />))}
        <TotalContainer>
            <span>Total: ${total}</span>
        </TotalContainer>
        <StripeCheckoutButton price={total}/>
        <TestPaymentContainer>
            *Test Credit Cart Information*
            <br/>
            4242 4242 4242 4242 - exp 01/2069 - CVV 123
        </TestPaymentContainer>
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);