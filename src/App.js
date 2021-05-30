
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Body from './Components/Body/Body'
function App() {
  return (
    <Switch>
      <Route exact path="/" component={Body} />
    </Switch>
  );
}

export default App;
