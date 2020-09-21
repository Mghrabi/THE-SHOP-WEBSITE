import React from 'react';
import './collectionPage.scss';
import CollectionItem from '../../components/collectionItem/collectionItem.js';
import AddingLoading from '../../components/addingLoading/addingLoading.js';

import { connect } from 'react-redux';

import { selectCollection, selectFetched } from '../../redux/shop/shop-selector';



const CollectionPage = ({ collection }) => {
        console.log(collection);
        const { title, items } = collection;
        return (
            <div className='collection-page'>
                <h1  className='title'>{title}</h1>
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
    fetched: selectFetched(state)
})

export default connect(mapStateToProps)(AddingLoading(CollectionPage));