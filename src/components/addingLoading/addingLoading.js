import React from 'react';

const AddingLoading = (WrappedComponent) => {
    return (({fetched, ...otherProps}) => {
        return fetched?
        <WrappedComponent {...otherProps} />
        :
        <div style={{color:'orange',margin:'70px auto 0 auto',fontSize:'30px'}}>LOADING...</div>
    })
}

export default AddingLoading;