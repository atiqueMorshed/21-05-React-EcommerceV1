import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IytWXEgVRAV5lBT3kmAmx8r8VHfW4kwyaFzXotdaGrX3ThjrWSkPziDSvkLPmyOPumENz5ljT8NdAPNGrakkVyq00QWhqBZ9V';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful!');
    };

    return (
        <StripeCheckout 
            name='React Ecommerce V1'
            label='Pay Now'
            shippingAddress
            billingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;