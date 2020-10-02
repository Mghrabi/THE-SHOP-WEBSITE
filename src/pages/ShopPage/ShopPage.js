import React, { Component } from 'react'; 
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


import CollectionsOverview from '../../components/collectionsOverview/collectionsOverview.js'
import CollectionPage from '../../pages/collectionPage/collectionPage.js';
import { startFetching } from '../../redux/shop/shop-actions';


import { connect } from 'react-redux';

class ShopPage extends React.Component {

    componentDidMount(){
        console.log('componentDidMount')
        const { startFetching } = this.props;
        startFetching();
        
    }   

    render(){
        const {match} = this.props;
        console.log('shopPage is rendered');
        return (
                <div className='shop-page'>
                    <Route exact path={`${match.path}`} component={CollectionsOverview} />
                    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
                </div>
            )
    }
    
}
    

const mapDispatchToProps = dispatch => ({
    startFetching: () => dispatch(startFetching())
})




export default withRouter(connect(null, mapDispatchToProps)(ShopPage));
