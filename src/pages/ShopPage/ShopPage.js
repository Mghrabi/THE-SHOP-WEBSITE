import React from 'react'; 
import SHOP_DATA from '../../SHOP_DATA.js';
import CollectionPreview from '../../components/collectionPreview/collectionPreview.js';

class ShopPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
             SHOP_DATA
        }
    }


    render() {
        const {SHOP_DATA} = this.state;
        // console.log(SHOP_DATA)
        return (
            <div>
                {SHOP_DATA.map( ({id,...otherProps}) => {
                  return <CollectionPreview key={id} {...otherProps} />;
                })}
            </div>
        )
    }
}

export default ShopPage;