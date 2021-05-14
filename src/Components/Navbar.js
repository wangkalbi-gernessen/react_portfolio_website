import React from "react";
import './Navbar.css'
import { Link } from 'react-scroll';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <Link activeClass="active" to='home' spy={true} smooth={true} offset={-70} duration={500}>HOME</Link>
            </li>
            <li>
              <Link activeClass="active" to='projects' spy={true} smooth={true} offset={-70} duration={500}>PROJECTS</Link>
            </li>
            <li>
              <Link activeClass="active" to='career' spy={true} smooth={true} offset={-70} duration={500}>CAREER</Link>
            </li>
            <li>
              <Link activeClass="active" to='contact' spy={true} smooth={true} offset={-70} duration={500}>CONTACT</Link>
            </li>
          </ul>
        </nav>
      </div>   
    );
  }
}

export default Navbar;