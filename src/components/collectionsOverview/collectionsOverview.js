import React from 'react';
import CollectionPreview from '../collectionPreview/collectionPreview.js';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopDataForPreview } from '../../redux/shop/shop-selector';



const CollectionsOverview = ({ shopData }) => {
    console.log(shopData);
    return (
        <div>
            {shopData.map( ({id,...otherProps}) => {
                  return <CollectionPreview key={id} {...otherProps} />;
            })}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    shopData: selectShopDataForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);