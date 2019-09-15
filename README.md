# Fourth Rock Weather - Web Version

This is an API of exoplanets and their host stars using the open-source Confirmed Planets data provided by the NASA Exoplanet Science Institute (https://exoplanetarchive.ipac.caltech.edu/index.html).

In this API, the exoplanets include a new property called "habitability", a boolean representing whether or not the exoplanet is in the habitability zone of its host star. The determination of this value was calculated using equations provided by the NASA Exoplanet Science Institute (https://exoplanetarchive.ipac.caltech.edu/docs/poet_calculations.html).

<br/><br/>

<img align="center" src="examples/webapplication.png" width="100%" height="100%">

<br/><br/>

<img align="center" src="examples/weatherModule.png" width="100%" height="100%">

<br/><br/>

## Units of Measurement

| Property |               Description               |
| :------: | :-------------------------------------: |
|   Sol    |  Number of martian days since landing   |
|  Earth   |       Corresponding date on Earth       |
|   H /F   | High and low temperatures in Fahrenheit |

<br/><br/>

## Data Used

Information used for this application comes from open source data provided by [NASA](https://api.nasa.gov) and the [Centro de Astrobiología](http://www.cab.inta.es/es/inicio).

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
