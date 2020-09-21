import React, { Component } from 'react'; 
import { Route } from 'react-router-dom';


import CollectionsOverview from '../../components/collectionsOverview/collectionsOverview.js'
import CollectionPage from '../../pages/collectionPage/collectionPage.js';

import { firestore, convertCollectionsToObj } from '../../firebase';
import collectionsOverview from '../../components/collectionsOverview/collectionsOverview.js';

import { connect } from 'react-redux';
import { fetchingDataFromDatabase } from '../../redux/shop/shop-actions';

class ShopPage extends React.Component {

    componentDidMount(){
        console.log('componentDidMount')
        const { fetchingDataFromDatabase } = this.props;
        fetchingDataFromDatabase();
        
    }   

    render(){
        const {match} = this.props;
        return (
                <div className='shop-page'>
                    <Route exact path={`${match.path}`} component={CollectionsOverview} />
                    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
                </div>
            )
    }
    
}
    

const mapDispatchToProps = dispatch => ({
    fetchingDataFromDatabase: () => dispatch(fetchingDataFromDatabase())
})




export default connect(null, mapDispatchToProps)(ShopPage);
