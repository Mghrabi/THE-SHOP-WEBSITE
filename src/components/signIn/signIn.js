import React from 'react';
import './signIn.scss';
import FormInput from '../FormInput/FormInput.js';
import CustomButton from '../customButton/customButton.js';

class SignIn extends React.Component {
    constructor(){
        super();
        this.state = {
            email:'',
            password:''
        }
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;
        console.log(event.target, name, value);
        this.setState({[name]:value}, () => {
            console.log(this.state);
        });
    }

    handleInputSubmit = (event) => {
        event.preventDefault();

        this.setState({email:'',password:''})
    }

    render(){
        return(
            <div className='signin'>
                <h1 style={{letterSpacing:'5px'}}>I already have an account..</h1>
                <span>sign in with your email and password</span>
                <form  onSubmit={this.handleInputSubmit}>

                    <FormInput
                        onChange={this.handleInputChange} 
                        label='email'
                        name='email' type='email' 
                        value={this.state.email} 
                        required 
                    />

                    <FormInput 
                        onChange={this.handleInputChange} 
                        label='password'
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        required/>

                    <CustomButton type='submit'>SIGN IN</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;
