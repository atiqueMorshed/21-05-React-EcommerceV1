import './App.css';
import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import CurrentUserContext from './contexts/current-user/current-user.context';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { //open subscription
      if(userAuth) {
        try {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            });
          });
        } catch(error) {
          console.log(error);
        }
      } else {
        this.setState({ // Set currentUser to null 
          currentUser: userAuth
        }); 
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); // Close Subscription
  }

  render() {
    return (
      <div>
        <CurrentUserContext.Provider value={this.state.currentUser}>
          <Header />
        </CurrentUserContext.Provider>
        <Switch> {/* Goes char by char and as soon as a match is found, breaks and loads that component */}
          <Route exact path='/' component={HomePage} /> {/* exact[true/false] if true, only renders component which strictly matches the path */}
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route 
          exact 
          path='/signin' 
          render = {() => this.state.currentUser 
            ? (<Redirect to='/' />) 
            : (<SignInAndSignUpPage />)} 
          />
        </Switch>
      </div>
    );
  }
}
export default App;
