import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <div className="App">

      <Header />
      <Switch>
        <Route exact path="/MyProfile">
          <MyProfile />
        </Route>
        <Route path="/">
          <Rockets />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
