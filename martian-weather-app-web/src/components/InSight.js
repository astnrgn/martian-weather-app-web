import React, { Component } from "react";
import "../styling/InSight.css";

class Insight extends Component {
  render() {
    let insightWeather = this.props.inSightData.map((day, index) => {
      if (index <= 6) {
        day.minTemp = Math.round(day.minTemp);
        day.maxTemp = Math.round(day.maxTemp);
        return (
          <div className="insight-weather-divs" key={index}>
            <p className="sol-number">Sol {day.martianDate}</p>
            <p className="earth-date">{day.earthDate}</p>
            <p className="max-temp">{day.maxTemp}°F</p>
            <p className="min-temp">{day.minTemp}°F</p>
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
              <p>Winter</p>
            </div>
            {/* <div className="hover-container">
              {this.state.isHovering && <div>Hovering right meow! 🐱</div>}
              <p>display</p>
              {this.state.hover}
            </div> */}
            <div className="location-container">
              <p>InSight Lander</p>
              <span className="location-logo">&#9672;</span>
              <p>Elysium Planitia</p>
              {/* <p>Days on Mars: {this.props.inSightData[0].sol} martian days</p> */}
              <p>
                <span className="days-on-mars">Days on Mars</span>:
              </p>
              <p>268 Sol</p>
              <a
                className="more-info-link"
                href="https://mars.nasa.gov/insight/weather/"
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
