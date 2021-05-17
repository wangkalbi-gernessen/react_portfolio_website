import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Career from './Components/Career';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Home />
        <Projects />
        <Career />
        <Skills />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
