import React from 'react';
import FormInput from '../FormInput/FormInput.js';
import CustomButton from '../customButton/customButton.js';
import { auth } from '../../firebase.js';
import { createUserProfileDoc } from '../../firebase.js';



class SignUp extends React.Component {
    constructor(){
        super()
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }


    handleInputChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    handleInputSubmit = async event => {
        event.preventDefault();
    
        const { displayName, email, password, confirmPassword } = this.state;
    
        if (password !== confirmPassword) {
          alert("passwords don't match");
          return;
        }
    
        try {
        
          console.log(email, password);
          const { user } = await auth.createUserWithEmailAndPassword(
            email,
            password
          );
          console.log(displayName);
          const currentUser = await createUserProfileDoc(user, { displayName });
          console.log(currentUser);
    
          this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
          });
        } catch (error) {
          console.error(error);
        }
      };





    render(){
        return(
            <form onSubmit={this.handleInputSubmit}>
                <h1 style={{letterSpacing:'5px'}} >i don’t have an account..</h1>
                <span>create your account NOW!</span>
                <FormInput
                    onChange={this.handleInputChange} 
                        label='name'
                        name='displayName' type='name' 
                        value={this.state.displayName} 
                        required 
                />
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
                        name='password' type='password' 
                        value={this.state.password} 
                        required 
                />
                <FormInput
                    onChange={this.handleInputChange} 
                        label='confirm password'
                        name='confirmPassword' type='password' 
                        value={this.state.confirmPassword} 
                        required 
                />
                <CustomButton  type='submit'>SIGN UP</CustomButton>
            </form>
        )
    }
}

export default SignUp;