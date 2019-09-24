import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styling/weatherDisplay.css";

class Insight extends Component {
  render() {
    let insightWeather = this.props.inSightData.map((day, index) => {
      if (index <= 6) {
        day.minTemp = Math.round(day.minTemp);
        day.maxTemp = Math.round(day.maxTemp);
        day.earthDate = day.earthDate.substring(0, 10);
        return (
          <div className="insight-weather-divs" key={index}>
            <p className="sol-number">Sol {day.martianDate}</p>
            <p className="earth-date">{day.earthDate}</p>
            <p className="max-temp">{day.maxTemp}°F</p>
            <p className="min-temp">{day.minTemp}°F</p>
          </div>
        );
      }
      return null;
    });
    return (
      <div className="insight-page">
        <div className="weather-display-flex">
          <div className="weather-display-grid">
            <div className="season-container">
              <p className="season-title">Season</p>
              {this.props.inSightData[this.props.inSightData.length - 1].season}
              {/* <p>winter</p> */}
            </div>
            <div className="location-container">
              <p className="instrument-info">InSight Lander</p>
              <span className="location-logo">&#9672;</span>
              <p className="instrument-info">Elysium Planitia</p>
              <p>
                <span className="days-on-mars">Days on Mars</span>:
              </p>
              <p className="instrument-info">
                {" "}
                {
                  this.props.inSightData[this.props.inSightData.length - 1]
                    .martianDate
                }{" "}
                Sol
              </p>
              <a
                className="links"
                href="https://mars.nasa.gov/insight/weather/"
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
              <div className="weather-flex">{insightWeather}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Insight;
