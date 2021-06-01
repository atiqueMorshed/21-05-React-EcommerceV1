import './App.css';
import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';

class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { //open subscription
      if(userAuth) {
        try {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
        } catch(error) {
          console.log(error);
        }
      } else {
        setCurrentUser(userAuth); // Set currentUser to null 
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); // Close Subscription
  }

  render() {
    return (
      <div>
        <Header />
        <Switch> {/* Goes char by char and as soon as a match is found, breaks and loads that component */}
          <Route exact path='/' component={HomePage} /> {/* exact[true/false] if true, only renders component which strictly matches the path */}
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' 
          render = {() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
