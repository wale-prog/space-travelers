import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Mission from './components/Mission';

function App() {
  return (
    <div className="App">

      <Header />
      <Switch>
        <Route>
          <Mission exact path="/mission" />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
