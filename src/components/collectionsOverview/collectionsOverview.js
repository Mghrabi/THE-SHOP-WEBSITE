import React from 'react';
import CollectionPreview from '../collectionPreview/collectionPreview.js';
import AddingLoading from '../addingLoading/addingLoading.js';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopDataForPreview, selectFetched } from '../../redux/shop/shop-selector';



const CollectionsOverview = ({ shopData }) => {
        if(shopData){
            console.log('returned')
            return(
                <div>
                {shopData.map( ({id,...otherProps}) => {
                    return <CollectionPreview key={id} {...otherProps} />;
                })}
            </div>
            )
        }
            else{
                return(
                    <div style={{color:'orange',margin:'70px auto 0 auto',fontSize:'30px'}}>LOADING...</div>
                )
            }
}

const mapStateToProps = createStructuredSelector({
    shopData: selectShopDataForPreview,
    fetched: selectFetched
})



export default connect(mapStateToProps)(AddingLoading(CollectionsOverview));