import React from 'react';
// import 'node-sass';
import HomePage from './pages/homepage/HomePage.js';
import {Route, Link, Switch, Redirect} from 'react-router-dom';
import ShopPage from './pages/ShopPage/ShopPage.js';
import Header from './components/header/header.js';
import { setCurrentUser } from './redux/user/user-action';
import CheckoutPage from './pages/checkoutPage/checkoutPage.js';


import SignInAndUp from './pages/sign_in_and_up/signInAndUp.js';
import { auth } from './firebase.js';
import { createUserProfileDoc } from './firebase';
import { connect } from 'react-redux';


import { selectCurrentUser } from './redux/user/user-selector';



const HatPage = () => {
  return (
    <div>
      <h1>here is a hat page</h1>
    </div>
  )
}

class App extends React.Component {
  
  unSubscribeFromAuth = null;

  componentDidMount() {
    console.log('didmount in app')
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

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



  }



  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
    console.log('app rendered')
    return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/> 
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/signin' render={() => {
          const { userExist } = this.props
          return(
            userExist?
            <Redirect to='/'/>
            :
            <SignInAndUp/>
          )
        }}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
      </Switch>
    </div>
  );

}
  
}

const mapStateToProps = (state) => ({
  userExist: selectCurrentUser(state),
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);