import React from 'react';
import './collectionPage.scss';
import CollectionItem from '../../components/collectionItem/collectionItem.js';

import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop-selector';



const CollectionPage = ({ collection, fetched }) => {
    if (fetched){
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
    else{
        return(
            <div style={{color:'orange',margin:'70px auto 0 auto',fontSize:'30px'}}>LOADING...</div>
        )
    }
    
    
}


const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
    fetched: state.shop.fetched
})

export default connect(mapStateToProps)(CollectionPage);