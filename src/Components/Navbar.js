import React from "react";
import './Navbar.css'
import { Link } from 'react-scroll';
import {useState} from 'react';

const Navbar = () => {
  const [colorChange, setColorChange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 140) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  }

  window.addEventListener('scroll', changeNavbarColor);

  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link className={colorChange ? 'navbar colorChange' : 'navbar original'}activeClass="active" to='home' spy={true} smooth={true} offset={-70} duration={500}>HOME</Link>
          </li>
          <li>
            <Link className={colorChange ? 'navbar colorChange' : 'navbar original'} activeClass="active" to='projects' spy={true} smooth={true} offset={-70} duration={500}>PROJECTS</Link>
          </li>
          <li>
            <Link className={colorChange ? 'navbar colorChange' : 'navbar original'} activeClass="active" to='career' spy={true} smooth={true} offset={-70} duration={500}>CAREER</Link>
          </li>
          <li>
            <Link className={colorChange ? 'navbar colorChange' : 'navbar original'} activeClass="active" to='contact' spy={true} smooth={true} offset={-70} duration={500}>CONTACT</Link>
          </li>
        </ul>
      </nav>
    </div>   
  );
}

export default Navbar;