import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {auth, createUserProfileDocument} from './components/firebase/firebase.utils';

class App extends React.Component {

  constructor() {
    super();

    this.state= {
      currentUser: null
    };
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
            console.log(this.state);
          });
        } catch(error) {
          console.log(error);
        }
      } else {
        this.setState({currentUser: userAuth}); // Set currentUser to null 
      }
      
      // this.setState({currentUser: user});
      // console.log(user);
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
