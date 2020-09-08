import React from 'react';
// import 'node-sass';
import HomePage from './pages/homepage/HomePage.js';
import {Route, Link, Switch} from 'react-router-dom';
import ShopPage from './pages/ShopPage/ShopPage.js';
import Header from './components/header/header.js';
import { setCurrentUser } from './redux/user/user-action';

import SignInAndUp from './pages/sign_in_and_up/signInAndUp.js';
import { auth } from './firebase.js';
import { createUserProfileDoc } from './firebase';
import { connect } from 'react-redux';


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
    return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/> 
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInAndUp}/>
      </Switch>
    </div>
  );

}
  
}


const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps )(App);
