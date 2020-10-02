import React, {useEffect, useState, lazy, Suspense} from 'react';
// import 'node-sass';
// import HomePage from './pages/homepage/HomePage.js';
// import ShopPage from './pages/ShopPage/ShopPage.js';
import {Route, Link, Switch, Redirect} from 'react-router-dom';

import Header from './components/header/header.js';
import { setCurrentUser } from './redux/user/user-action';
// import CheckoutPage from './pages/checkoutPage/checkoutPage.js';


// import SignInAndUp from './pages/sign_in_and_up/signInAndUp.js';
import { auth } from './firebase.js';
import { createUserProfileDoc } from './firebase';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user-selector';
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry.js';


const HomePage = lazy(() => import('./pages/homepage/HomePage.js'));
const ShopPage = lazy(() => import('./pages/ShopPage/ShopPage.js'));
const CheckoutPage = lazy(() => import('./pages/checkoutPage/checkoutPage.js'));
const SignInAndUp = lazy(() => import('./pages/sign_in_and_up/signInAndUp.js'));



const App = ({setCurrentUser, userExist}) =>  {
  

  useEffect(() => {
      console.log('didmount in app')
      const unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot( snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
          // console.log(this.state); // 1
        });
      }
      else{
      setCurrentUser(userAuth);
      }
      // console.log(this.state); // 2
    });
    return () => {
      unSubscribeFromAuth();
    }
  },[])

    
    return (
    <div>
      <Header/>
      <Switch>
        <ErrorBoundry>
          <Suspense fallback={<div>...loading</div>}>
            <Route exact path='/' component={HomePage}/> 
            <Route path='/shop' render={() => {
              return !userExist?
              <Redirect to='/signin'/>
              :
              <ShopPage/>
            }}/>
            {/* <Route exact path='/checkout' component={CheckoutPage}/> */}
            <Route exact path='/checkout' render={() => {
                return(
                  !userExist?
                  <Redirect to='/signin'/>
                  :
                  <CheckoutPage/>
                )
            }}/>
            <Route exact path='/signin' render={() => {
                return(
                  userExist?
                  <Redirect to='/'/>
                  :
                  <SignInAndUp/>
                )
            }}/>
          </Suspense>
        </ErrorBoundry>
        
        
      </Switch>
    </div>
  );

}
  

const mapStateToProps = (state) => ({
  userExist: selectCurrentUser(state),
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);