import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {auth} from './components/firebase/firebase.utils';

class App extends React.Component {

  constructor() {
    super();

    this.state= {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => { //open subscription
      this.setState({currentUser: user});
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth = null; // Close Subscription
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch> {/* Goes char by char and as soon as a match is found, breaks and loads that component */}
          <Route exact path='/' component={HomePage} /> {/* exact[true/false] if true, only renders component which strictly matches the path */}
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
