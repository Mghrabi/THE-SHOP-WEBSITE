import React from 'react';
import './collectionItem.scss';
import CustomButton from '../customButton/customButton.js';
import { addItemToCart } from '../../redux/cart/cart-action';

import { connect } from 'react-redux';


const CollectionItem = ({item, addItemToCart}) => {
    const {name, price, imageUrl } = item;

    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{backgroundImage:`url(${imageUrl})`}}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}$</span>
            </div>

            <CustomButton onClick={() => addItemToCart(item)} type='button'>ADD TO CART</CustomButton>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItemToCart(item))
})


export default connect(null, mapDispatchToProps)(CollectionItem);

