import React, {useEffect, lazy, Suspense} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCurrentUser} from './redux/user/user.selectors';
import {checkUserSession} from './redux/user/user.actions';

import Spinner from './components/spinner/spinner.component';
import {GlobalStyle} from './global.styles';

import Header from './components/header/header.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));



const App = ({checkUserSession, currentUser}) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  
  return (
    <div>
    <GlobalStyle />
      <ErrorBoundary>
        <Header />
        <Switch> {/* Goes char by char and as soon as a match is found, breaks and loads that component */}
          <Suspense fallback={Spinner}>
            <Route exact path='/' component={HomePage} /> {/* exact[true/false] if true, only renders component which strictly matches the path */}
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route 
            exact 
            path='/signin' 
            render = {() => currentUser 
              ? (<Redirect to='/' />) 
              : (<SignInAndSignUpPage />)} 
            />
          </Suspense>
        </Switch>
      </ErrorBoundary>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
