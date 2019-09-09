import React, { Component } from "react";
import "../styling/Curiosity.css";

class Curiosity extends Component {
  render() {
    let curiosityWeather = this.props.curiosityData.map((day, index) => {
      if (index <= 6) {
        day.min_temp = Math.round(1.8 * day.min_temp + 32);
        day.max_temp = Math.round(1.8 * day.max_temp + 32);
        return (
          <div key={index}>
            <p>Number of Days on Mars: {day.sol}</p>
            <p>Earth Day: {day.terrestrial_date}</p>
            {/* <p>Minimum (C): {day.min_temp}</p>
            <p>Maximum (C): {day.max_temp}</p> */}
            <p>Minimum (F): {day.min_temp}</p>
            <p>Maximum (F): {day.max_temp}</p>
          </div>
        );
      }
    });
    return (
      <div className="curiosity-page">
        {/* <h1>{this.props.curiosityData[0].season}</h1> */}
        <div>
          <h1>Month 3</h1>
        </div>
        <div>
          <h1>Curiosity Rover</h1>
        </div>
        <div>{curiosityWeather}</div>
      </div>
    );
  }
}

export default Curiosity;
