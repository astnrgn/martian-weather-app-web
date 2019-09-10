import React, { Component } from "react";
import "../styling/InSight.css";

class Insight extends Component {
  render() {
    let insightWeather = this.props.inSightData.map((day, index) => {
      if (index <= 6) {
        day.min_temp = Math.round(1.8 * day.min_temp + 32);
        day.max_temp = Math.round(1.8 * day.max_temp + 32);
        return (
          <div className="insight-weather-divs" key={index}>
            <p className="sol-number">Sol {day.sol}</p>
            <p className="earth-date">{day.terrestrial_date}</p>
            <p className="max-temp">{day.max_temp}°F</p>
            <p className="min-temp">{day.min_temp}°F</p>
          </div>
        );
      }
    });
    return (
      <div className="insight-page">
        <div className="weather-display-flex">
          <div className="weather-display-grid">
            {/* <h1>{this.props.inSightData[0].season}</h1> */}
            <div className="season-container">
              <p className="season-title">Season</p>
              <p>Month 3</p>
            </div>
            {/* <div className="hover-container">
              {this.state.isHovering && <div>Hovering right meow! 🐱</div>}
              <p>display</p>
              {this.state.hover}
            </div> */}
            <div className="location-container">
              <p>insight Rover</p>
              <span className="location-logo">&#9672;</span>
              <p>Gale Crater</p>
              {/* <p>Days on Mars: {this.props.inSightData[0].sol} martian days</p> */}
              <p>
                <span className="days-on-mars">Days on Mars</span>: 2503 Sol
              </p>
              <a
                className="more-info-link"
                href="https://mars.jpl.nasa.gov/msl/"
                target="_blank"
              >
                [More Info]
              </a>
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
