import './css/App.css'; // eslint-disable-next-line
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <Route path='/' component={NavBar} />
      <Switch>
        <Route path='/main' component={Home} />
      </Switch>
      <Route path='/' component={Footer} />
    </div>
  );
}

export default App;
