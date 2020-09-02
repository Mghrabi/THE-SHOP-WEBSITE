import React from 'react';
import './directory.scss';
import MenuItem from '../menu_item/menuItem.js';


class Directory extends React.Component {
    constructor(){
        super()

        this.state = {
            sections:[
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl:'hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id:2,
                  linkUrl:''
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl:''
                },
                {
                  title: 'womens',
                  imageUrl: 'https://d5qmjlya0ygtg.cloudfront.net/aff/94b1a/e63c/48b8/8edc/ae6a6d1fb986/large/462481.jpg',
                  size: 'large',
                  id: 4,
                  linkUrl:''
                  // https://d5qmjlya0ygtg.cloudfront.net/aff/94b1a/e63c/48b8/8edc/ae6a6d1fb986/large/462481.jpg
                  
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl:''
                }
              ]
        }
    }


    render(){
        return(
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherSectionProps }) => {
                  return <MenuItem key={id} {...otherSectionProps} />
                })}

            </div>
        )
    }
}


export default Directory;