import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "../styling/Home.css";

class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="home-information-flex">
          <div className="home-information-grid">
            <div className="title-container">
              <p className="title-description">
                4<sup>th</sup> Rock Weather
              </p>
            </div>
            <div className="curiosity-container">
              <Link to="/curiosity">
                <p className="home-description">Curiosity Rover</p>
              </Link>
            </div>
            <div className="insight-container">
              <Link to="/insight">
                <p className="home-description">InSight Lander</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
