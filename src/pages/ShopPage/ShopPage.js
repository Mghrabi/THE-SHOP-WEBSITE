import React from 'react'; 
// import SHOP_DATA from '../../SHOP_DATA.js';
import CollectionPreview from '../../components/collectionPreview/collectionPreview.js';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectShopData } from '../../redux/shop/shop-selector';

const ShopPage = ({ shopData }) => {

    return (
            <div>
                {shopData.map( ({id,...otherProps}) => {
                  return <CollectionPreview key={id} {...otherProps} />;
                })}
            </div>
        )
}

const mapStateToProps = createStructuredSelector({
    shopData: selectShopData
})


export default connect(mapStateToProps)(ShopPage);
