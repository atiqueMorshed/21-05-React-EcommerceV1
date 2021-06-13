import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IytWXEgVRAV5lBT3kmAmx8r8VHfW4kwyaFzXotdaGrX3ThjrWSkPziDSvkLPmyOPumENz5ljT8NdAPNGrakkVyq00QWhqBZ9V';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response =>{
            alert("Payment Successful.");
        }).catch(error => {
            console.log('Payment Error: ', JSON.parse(error));
            alert("ERROR: PLEASE USE THE SPECIFIED CARD INFORMAITON!");
        });
    };

    return (
        <StripeCheckout 
            name='React Ecommerce V1'
            label='Pay Now'
            shippingAddress
            billingAddress
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;