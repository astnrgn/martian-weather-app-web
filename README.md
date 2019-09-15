# Fourth Rock Weather - Web Version

Welcome to Fourth Rock Weather!

In this application, users can see the most recent seven data points at two different locations on Mars. These locations include the [Curiosity Rover](https://mars.jpl.nasa.gov/msl/) in Gale Crater and [InSight Lander](https://mars.nasa.gov/insight/weather/) at Elysium Planitia.

Available data in the application is dependent on current data provided through NASA's databases. InSight's data is fairly new (version 1.0). Given this, there may be times when the data is not confirmed and will not be displayed in the application for InSight.

Updates to the Curiosity database can occur daily, while the InSight database is updated weekly at the latest.

<br/><br/>

<img align="center" src="examples/webapplication.png" width="100%" height="100%">

<br/><br/>

<img align="center" src="examples/weatherModule.png" width="100%" height="100%">

<br/><br/>

## Units of Measurement

| Property |                                Description                                 |
| :------: | :------------------------------------------------------------------------: |
|   Sol    |                    Number of martian days since landing                    |
|  Earth   |                        Corresponding date on Earth                         |
|   H /F   | High and low temperatures in Fahrenheit (more in possible future releases) |

<br/><br/>

## Data Used

Information used for this application is open source data provided by [NASA](https://api.nasa.gov) and the [Centro de Astrobiología](http://www.cab.inta.es/es/inicio).

Curiosity API:
https://pudding.cool/2017/12/mars-data/marsWeather.json

InSight API:
https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0

<br/><br/>

## Installing

- Fork this repository

- Clone the forked version to your local repository

- npm install to add dependencies

- Open your cloned repository in your favorite text editor

- Have Fun!

<br/><br/>

## Built and Deployed With

- [JavaScript](https://www.javascript.com/)
- [React](https://reactjs.org)
- [Surge](https://surge.sh/)

<br/><br/>

## Versioning

Version 1.0.0

<br/><br/>

## Authors

- **Austin Regan** - _Initial work_ - [GitHub Profile](https://github.com/astnrgn)
