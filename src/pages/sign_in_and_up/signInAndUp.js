import React from 'react';
import './signInAndUp.scss';
import SignIn from '../../components/signIn/signIn.js';
import SignUp from '../../components/signUp/signUp.js';


const SignInAndUp = () => {
    return (
        <div className='signs'>
            <SignIn/>
            <SignUp/>
        </div>
       
    )
}

export default SignInAndUp;