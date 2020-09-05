import React from 'react';
// import 'node-sass';
import HomePage from './pages/homepage/HomePage.js';
import {Route, Link, Switch} from 'react-router-dom';
import ShopPage from './pages/ShopPage/ShopPage.js';
import Header from './components/header/header.js';
import SignInAndUp from './pages/sign_in_and_up/signInAndUp.js';
import { auth } from './firebase.js';

const HatPage = () => {
  return (
    <div>
      <h1>here is a hat page</h1>
    </div>
  )
}

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser:''
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({currentUser: user});
      console.log(this.state.currentUser);
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
    return (
    <div>
      <Header  currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage}/> 
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInAndUp}/>
      </Switch>
    </div>
  );

}
  
}

export default App;
