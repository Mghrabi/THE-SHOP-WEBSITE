import React from 'react';
import './windowItem.scss';


const WindowItem = ({item}) => {
    const {imageUrl, price, name, quantity } = item;
    return (
        <div className='window-item'>
            <div className='window-item-image'>
                <img src={imageUrl}/>
            </div>
            <div className='window-item-text'>
                <div className='window-item-textname'>{name}</div>
                <div style={{color:'red'}}>price: {price}$ <span style={{color:'black'}}>x {quantity}</span></div>
            </div>
        </div>
    )
}

export default WindowItem;