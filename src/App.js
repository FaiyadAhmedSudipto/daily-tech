import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TechNews from './Components/TechNews';
import TechNewsDesign from './Components/TechNewsDesign';
import HomePageControl from './Components/HomePageControl';

function App() {
  return (

    <Router>
        <Switch>
          <Route exact path="/">
            <HomePageControl />
          </Route>
          <Route path="*">
          </Route>
        </Switch>
      </Router>
    
  );
}

export default App;
