import React from 'react';
import StripeCheckout from 'react-stripe-checkout'



const StripeCheckoutButton = ({price}) => {
    const stripePrice = price * 100;
    
    const key = 'pk_test_51HRZF2IKDm6rOUVZWuZEMo5PBvcPulTbCaVqwM4TD06PmCTCF29q1E6wBum8CREWaluzmPawVkozEjQzuhKzOEGp005TNBfmKX';
    
    const onToken = token => {
        console.log(token);
        alert('payment successful')
    }

    return (
        <StripeCheckout
          label='Pay Now'
          name='CRWN Clothing Ltd.'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your total is $${price}`}
          amount={stripePrice}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={key}
        />
    )
}


export default StripeCheckoutButton;