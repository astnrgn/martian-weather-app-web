import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "../styling/Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home-information-flex">
        <div className="home-information-grid">
          <div className="title-container">
            <p>4th Rock Weather</p>
          </div>
          <div className="curiosity-container">
            <p className="home-description">Curiosity Rover</p>
          </div>
          <div className="insight-container">
            <p className="home-description">InSightLander</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
