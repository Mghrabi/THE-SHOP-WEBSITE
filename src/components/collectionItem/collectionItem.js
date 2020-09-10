import React from 'react';
import './collectionItem.scss';
import CustomButton from '../customButton/customButton.js';


const CollectionItem = ({name, price, imageUrl }) => {
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
            <CustomButton type='button'>ADD TO CART</CustomButton>
        </div>
    )
}

export default CollectionItem;