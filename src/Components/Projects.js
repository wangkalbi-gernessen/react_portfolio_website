import React from "react";
import './Projects.css';
import call from '../img/call.png';

class Projects extends React.Component {
  render() {
    return (
      <div className="projects-content" id="projects">
        <div className="row">
          <div className="column">
            <div className="content">
              <img src={call} alt="Lights" style={{width:"100px"}} />
              <h3>My Work</h3>
              <p>Lorem ipsum..</p>
            </div>
            <div className="content">
              <img src={call} alt="Lights" style={{width:"100px"}} />
              <h3>My Work</h3>
              <p>Lorem ipsum..</p>
            </div>
            <div className="content">
              <img src={call} alt="Lights" style={{width:"100px"}} />
              <h3>My Work</h3>
              <p>Lorem ipsum..</p>
            </div>
            <div className="content">
              <img src={call} alt="Lights" style={{width:"100px"}} />
              <h3>My Work</h3>
              <p>Lorem ipsum..</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;