import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route} from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HATS</h1>
  </div>
)

function App() {
  return (
    <div>
      <switch> {/* Goes char by char and as soon as a match is found, breaks and loads that component */}
        <Route exact path='/' component={HomePage} /> {/* exact[true/false] if true, only renders component which strictly matches the path */}
        <Route path='/hats' component={HatsPage} />
      </switch>
    </div>
  );
}

export default App;
