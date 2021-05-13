import React from "react";
import './Navbar.css'
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div className="header">
        <nav>
          <ul>
            <li>
              <NavLink to='/Contact'>CONTACT</NavLink>
            </li>
            <li>
              <NavLink to='/Career'>CAREER</NavLink>  
            </li>
            <li>
              <NavLink to='/Projects'>PROJECTS</NavLink>
            </li>
          </ul>
        </nav>
      </div>   
    );
  }
}

export default Navbar;