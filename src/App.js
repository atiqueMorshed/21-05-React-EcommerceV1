import './App.css';
import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

// import {auth, createUserProfileDocument, addCollectionAndDocuments} from './firebase/firebase.utils'; //[FOR FIREBASE/FIRESTORE DB PUSHING]
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import {createStructuredSelector} from 'reselect';

import {selectCurrentUser} from './redux/user/user.selectors';
import {setCurrentUser} from './redux/user/user.actions';
// import {selectCollectionsForCollectionPreview} from './redux/shop/shop.selector'; //[FOR FIREBASE/FIRESTORE DB PUSHING]

class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {

    // const {setCurrentUser, collectionsArray} = this.props; //[FOR FIREBASE/FIRESTORE DB PUSHING]
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { //open subscription
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth); // Set currentUser to null 

      /*[FOR FIREBASE/FIRESTORE DB PUSHING]
      addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({// Here, we are sending only title and items from collectionsArray to be pushed into firebase
        title,
        items
      }))); 
      */
    }, error => console.log(error));
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
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route 
          exact 
          path='/signin' 
          render = {() => this.props.currentUser 
            ? (<Redirect to='/' />) 
            : (<SignInAndSignUpPage />)} 
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
  // collectionsArray: selectCollectionsForCollectionPreview //[FOR FIREBASE/FIRESTORE DB PUSHING]
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
