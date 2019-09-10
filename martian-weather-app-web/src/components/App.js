import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import Home from "./Home.js";
import Curiosity from "./Curiosity";
import InSight from "./InSight";
import "../styling/App.css";

// const curiositySearchUrl =
//   "https://pudding.cool/2017/12/mars-data/marsWeather.json";
const inSightSearchUrl =
  "https://api.nasa.gov/insight_weather/?api_key=xM37sJTj9e3rcHJysfB3KnZrZk8aXmJH7BGzTzZd&feedtype=json&ver=1.0";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curiosityWeather: [],
      inSightWeather: []
    };
  }
  componentDidMount() {
    // axios
    //   .get(curiositySearchUrl)
    //   .then(response => {
    //     this.setState({
    //       curiosityWeather: response.data
    //     });
    //     console.log(this.state.curiosityWeather);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
    axios
      .get(inSightSearchUrl)
      .then(response => {
        console.log(response.data[265].AT.av);
        console.log(response.data.JSO);
        this.setState({
          inSightWeather: response.data
        });
        console.log(this.state.inSightWeather);
      })
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    return (
      <div className="page">
        {/* <nav>
          <Link to="/">
            <div className="home-logo-container">
              <p className="home-logo">|-|</p>
            </div>
          </Link> */}

        {/* <Link to="/curiosity">
            <h3>Curiosity</h3>
          </Link>
          <Link to="/insight">
            <h3>InSight</h3>
          </Link> */}
        {/* </nav> */}
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
