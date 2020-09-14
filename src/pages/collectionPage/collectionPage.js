import React from 'react';
import './collectionPage.scss';
import CollectionItem from '../../components/collectionItem/collectionItem.js';

import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop-selector';



const CollectionPage = ({ collection, collectionId }) => {
    console.log('collectionId',collectionId);
    console.log('collection',collection)
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h1 className='title'>{title}</h1>
            <div className='preview'>
                {items.map(item => {
                return <CollectionItem key={item.id} item={item}/>
                })}
            </div>
        </div>
    )
}


const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
    collectionId: ownProps.match.params.collectionId
})

export default connect(mapStateToProps)(CollectionPage);