import React from 'react';
import CollectionItem from '../collectionItem/collectionItem.js';
import './collectionPreview.scss';

import {withRouter} from 'react-router-dom';

const CollectionPreview = ({title, items, history, match}) => {
    console.log(match.url);
    return (
        <div className='collection-preview'>
            <h1 style={{cursor:'pointer'}} onClick={() => history.push(`${match.url}/${title}`) } className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items
                .filter((item, idx) => idx < 4)
                .map((item) => { 
                    return  <CollectionItem key={item.id} item={item}/>
                    })}
            </div>
        </div>
    )
}

export default withRouter(CollectionPreview);