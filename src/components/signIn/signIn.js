import React, {useEffect, useState} from 'react';
import './signIn.scss';
import FormInput from '../FormInput/FormInput.js';
import CustomButton from '../customButton/customButton.js';
import { auth, signInWithGoogle } from '../../firebase.js';

const SignIn = () => {
    const [userCredentials, setCredentials] = useState({
        email:'',
        password:''
    })
    const {email, password} = userCredentials;



    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setCredentials({...userCredentials, [name]:value})
    }

    const handleInputSubmit = async (event) => {
        event.preventDefault();
        try{
            
            await auth.signInWithEmailAndPassword(email, password)
        }catch(error){
            alert(error.message);
        }
        
        setCredentials({...userCredentials, email:'',password:''})
    }

    
        return(
            <div className='signin'>
                <h1 style={{letterSpacing:'5px'}}>I already have an account..</h1>
                <span>sign in with your email and password</span>
                <form  onSubmit={handleInputSubmit}>

                    <FormInput
                        onChange={handleInputChange} 
                        label='email'
                        name='email' type='email' 
                        value={email} 
                        required 
                    />

                    <FormInput 
                        onChange={handleInputChange} 
                        label='password'
                        name='password' 
                        type='password' 
                        value={password} 
                        required/>
                    <div className='custom-buttons'>
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                        <CustomButton type='button' id='google' onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }


export default SignIn;
