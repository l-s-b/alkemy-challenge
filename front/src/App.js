import './css/App.css'; // eslint-disable-next-line
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <h2>Bankemy</h2>
      <Switch>
{/*         <Route exacth path='/' component={} /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
