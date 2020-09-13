const initialState = {
    sections: [
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

const directoryReducer = (state=initialState, action) => {
    switch(action.type){
        default:
            return state
    }
}


export default directoryReducer;
