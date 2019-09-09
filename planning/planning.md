# Martian Weather Application

An application that can show the weather on Mars in two different locations. The first location is wherever the Mars Curiosity Rover is (currently Gale Crater). The second is at the InSight Mars Lander (in Elysium Planitia).

## Goals

1. Bronze (MVP)

- Data from both API's renders on the page
- Multiple views for each location
- Simple to moderate styling

2. Silver

- Added design features
- Location and/or time based styling

3. Gold Plan

- Implementing React-Native, mobile application
- Deployment to applcation store (starting with iOS)

## Project Checklist

### Web Application:

- [x] Create a plan!
- [ ] Design the layout, homepage with two views, one for each location.
- [ ] Create a starter React application
- [ ] Add components for the homepage, Curiosity Rover page, InSight Lander page with routing and starter CSS
- [ ] Establish Axios calls, storing the response as state data in App, passing down as props
- [ ] Update CSS, implement higher level design & responsiveness
- [ ] Deploy via surge

### Mobile Application (start with iOS):

- [ ] Design the layout
- [ ] Create a starter React Native application
- [ ] Add components for the homepage, Curiosity Rover page, InSight Lander page with routing (view change) and starter CSS object for each component
- [ ] Establish Axios calls, storing the response as state data in App, passing down as props
- [ ] Update CSS, implement higher level design & responsiveness
- [ ] Deploy to Apple App Store (Google play for Android)

## Data Used

The data for this project will come from two different API's that are currently maintained and updated. The first being NASA's InSight: Mars Weather Service API:

https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0

For the second, I will be using data provided by NASA's Mars Science Laboratory and Centro de Astrobiología (CSIC-INTA):

https://pudding.cool/2017/12/mars-data/marsWeather.json

## Models

1. Curiosity Rover

- Number of days on Mars (sol)
- Earth date (terrestrial_date)
- Martian Season (season)
- Temperature minimum (min_temp, unit is C)
- Temperature maximum (max_temp, unit is C)

2. InSight Lander

- Number of days on Mars (sol)
- Earth date (First_UTC)
- Martian Season (Season)
- Temperature minimum (mn, unit is F)
- Temperature maximum (mx, unit is F)
