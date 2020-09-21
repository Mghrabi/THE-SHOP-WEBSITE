import React, { Component } from 'react'; 
import { Route } from 'react-router-dom';


import CollectionsOverview from '../../components/collectionsOverview/collectionsOverview.js'
import CollectionPage from '../../pages/collectionPage/collectionPage.js';

import { firestore, convertCollectionsToObj } from '../../firebase';
import collectionsOverview from '../../components/collectionsOverview/collectionsOverview.js';

import { connect } from 'react-redux';
import { addingDataAsync, checkFetched } from '../../redux/shop/shop-actions';

class ShopPage extends React.Component {

    componentDidMount(){
        console.log('componentDidMount')
       const { addingDataAsync, checkFetched } = this.props;
       const collectionsRef = firestore.collection('collections');
       collectionsRef.onSnapshot(async snapShot => {
            const data = await convertCollectionsToObj(snapShot);
            console.log(data);
            
            addingDataAsync(data);
            if (data.hats){
                checkFetched(true);
            }
       })
    }   

    render(){
        console.log('rendered')
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
    addingDataAsync:item => dispatch(addingDataAsync(item)),
    checkFetched: value => dispatch(checkFetched(value))
})




export default connect(null, mapDispatchToProps)(ShopPage);
