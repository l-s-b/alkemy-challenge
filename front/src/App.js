import './css/App.css'; // eslint-disable-next-line
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './views/Home';
import TList from './views/TList';

function App() {
  return (
    <div className="App">
      <Route path='/' component={NavBar} />
      <Switch>
        <Route path='/main' component={Home} />
        <Route path='/transactions' component={TList} />
      </Switch>
      <Route path='/' component={Footer} />
    </div>
  );
}

export default App;
