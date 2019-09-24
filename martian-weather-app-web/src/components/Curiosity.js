import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styling/weatherDisplay.css";
class Curiosity extends Component {
  render() {
    let curiosityWeather = this.props.curiosityData
      .slice(0, 7)
      .reverse()
      .map((day, index) => {
        if (index <= 6) {
          day.min_temp = Math.round(1.8 * day.min_temp + 32);
          day.max_temp = Math.round(1.8 * day.max_temp + 32);
          return (
            <div className="curiosity-weather-divs" key={index}>
              <p className="sol-number">Sol {day.sol}</p>
              <p className="earth-date">{day.terrestrial_date}</p>
              <p className="max-temp">{day.max_temp}°F</p>
              <p className="min-temp">{day.min_temp}°F</p>
            </div>
          );
        }
        return null;
      });
    return (
      <div className="curiosity-page">
        <div className="weather-display-flex">
          <div className="weather-display-grid">
            <div className="season-container">
              <p className="season-title">Season</p>
              <p>{this.props.curiosityData[0].season}</p>
              {/* <p>Month 3</p> */}
            </div>
            <div className="location-container">
              <p className="instrument-info">Curiosity Rover</p>
              <span className="location-logo">&#9672;</span>
              <p className="instrument-info">Gale Crater</p>
              <p>
                <span className="days-on-mars">Days on Mars</span>:
              </p>
              <p>{this.props.curiosityData[0].sol} Sol</p>
              {/* <p className="instrument-info">2503 Sol</p> */}
              <a
                className="links"
                href="https://mars.jpl.nasa.gov/msl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                [More Info]
              </a>
              <Link className="links" to="/">
                <p>- Home -</p>
              </Link>
            </div>
            <div className="weather-list">
              <div className="weather-flex">{curiosityWeather}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Curiosity;
