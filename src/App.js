import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Mission from './components/Mission';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <div className="App">

      <Header />
      <Switch>
        <Route exact path="/missions">
          <Mission />
        </Route>
        <Route exact path="/profile">
          <MyProfile />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
