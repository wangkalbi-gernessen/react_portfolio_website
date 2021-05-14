import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Career from './Components/Career';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        {/* <Switch>
          <Home/>
          <Route path="/Career" component={Career} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Contact" component={Contact} />
        </Switch> */}
        <Home />
        <Projects />
        <Career />
        <Contact />
      </Router>
    </div>
  );
}

export default App;
