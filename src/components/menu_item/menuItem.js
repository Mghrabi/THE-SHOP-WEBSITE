import React from 'react';
import './menuItem.scss';
import {withRouter} from 'react-router-dom';

const MenuItem = ({imageUrl, title, size, history, match,linkUrl}) => {
    return(
        <div 
            className={`menu-item ${size}`}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            
        <div  
                className='background-image'
                style={{backgroundImage:`url(${imageUrl})`}} >
            </div>
            <div className='content'>
                <div className='title'>{title}</div>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);