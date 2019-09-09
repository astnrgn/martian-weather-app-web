import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import Home from "./Home.js";
import Curiosity from "./Curiosity";
import InSight from "./InSight";
import "../styling/App.css";

const curiositySearchUrl = "";
const inSightSearchUrl = "";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curiosityWeather: ["curiosityData"],
      inSightWeather: ["inSightData"]
    };
  }
  render() {
    return (
      <div>
        <nav>
          <Link to="/">
            <div className="home-logo-container">
              <p className="home-logo">|-|</p>
            </div>
          </Link>

          {/* <Link to="/curiosity">
            <h3>Curiosity</h3>
          </Link>
          <Link to="/insight">
            <h3>InSight</h3>
          </Link> */}
        </nav>
        <main>
          <Route path="/" exact component={Home} />
          <Route
            path="/curiosity"
            exact
            render={routerProps => (
              <Curiosity
                curiosityData={this.state.curiosityWeather}
                {...routerProps}
              />
            )}
          />
          <Route
            path="/insight"
            exact
            render={routerProps => (
              <InSight
                inSightData={this.state.inSightWeather}
                {...routerProps}
              />
            )}
          />
        </main>
      </div>
    );
  }
}

export default App;
