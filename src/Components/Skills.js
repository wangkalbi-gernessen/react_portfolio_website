import React from "react";
import './Skills.css';
import  javascript from '../img/javascript.png';
import  php from '../img/php.png';


class Skills extends React.Component {
  render() {
    return (
      <div className="skills-content">
        <h1>Skills</h1>
        <div className="chart">
          <p>
            <img src={javascript} />
          </p>
          <div class="container">
            <div class="skills javascript">80%</div>
          </div>
          <p>
            <img src={php} />
          </p>
          <div class="container">
            <div class="skills php">60%</div>
          </div>
          <p>Java</p>
          <div class="container">
            <div class="skills java">50%</div>
          </div>
          <p>Python</p>
          <div class="container">
            <div class="skills python">50%</div>
          </div>
        <p>HTML &#38; CSS</p>
          <div class="container">
            <div class="skills htmlcss">90%</div>
          </div>
          <p>Swift</p>
          <div class="container">
            <div class="skills swift">60%</div>
          </div>
        </div>
      </div>   
    );
  }
}

export default Skills;