import React from 'react';


class ErrorBoundry extends React.Component {
    constructor(){
        super();
        this.state = {
            hasError:false
        }
    }


    static getDerivedStateFromError(error){
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render(){
        return (
            this.state.hasError?
            <div>something went wrong</div>
            :
            this.props.children
        )
    }
}

export default ErrorBoundry;