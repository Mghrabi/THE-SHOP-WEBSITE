import React from 'react';
import CheckOut from '../../components/checkout/checkout';
import Checkout from '../../components/checkout/checkout.js';
import CustomButton from '../../components/customButton/customButton.js';
import { selectCartTotal } from '../../redux/cart/cart-selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './checkoutPage.scss';

const CheckoutPage = ({total}) => {
    return (
       <div className='checkout-page'>
           <Checkout />
           <CustomButton id='pay-button'>
               pay: {total} $
           </CustomButton>
       </div>
    )
}

const mapStateToProps = createStructuredSelector({
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);