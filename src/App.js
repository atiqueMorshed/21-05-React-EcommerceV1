import './App.css';
import {Route, Switch} from 'react-router-dom';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Switch> {/* Goes char by char and as soon as a match is found, breaks and loads that component */}
        <Route exact path='/' component={HomePage} /> {/* exact[true/false] if true, only renders component which strictly matches the path */}
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
