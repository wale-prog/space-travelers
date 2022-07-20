import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './components/Rockets';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/">
          <Rockets />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
