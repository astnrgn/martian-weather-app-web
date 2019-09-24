import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Home from "./Home.js";
import Curiosity from "./Curiosity";
import InSight from "./InSight";
import "../styling/App.css";

const curiositySearchUrl =
  "https://pudding.cool/2017/12/mars-data/marsWeather.json";
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
    axios
      .get(curiositySearchUrl)
      .then(response => {
        let newCuriosityData = response.data.map(solNumber => {
          let formattedData = {
            sol: solNumber.sol,
            terrestrial_date: solNumber.terrestrial_date,
            max_temp: solNumber.max_temp,
            min_temp: solNumber.min_temp,
            season: solNumber.season
          };
          return formattedData;
        });
        this.setState({
          curiosityWeather: newCuriosityData
        });
        console.log(this.state.curiosityWeather);
        console.log(this.state.trigger);
      })
      .catch(err => {
        console.error(err);
      });
    axios
      .get(inSightSearchUrl)
      .then(response => {
        let sol = response.data.sol_keys;
        let newInsightData = sol.map(solNumber => {
          let formattedData = {
            martianDate: solNumber,
            earthDate: response.data[solNumber].First_UTC,
            season: response.data[solNumber].Season,
            maxTemp: response.data[solNumber].AT.mx,
            minTemp: response.data[solNumber].AT.mn
          };
          return formattedData;
        });
        this.setState({
          inSightWeather: newInsightData
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
