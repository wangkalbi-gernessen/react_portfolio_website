import React from "react";
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="home-content" id="home">
        <div className="introduction">
          <h1 className="position">Web Software Developer</h1>
          <h1 className="name">Kazunobu Someya</h1>
        </div>
      </div>   
    );
  }
}

export default Home;