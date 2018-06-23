# WeatherBoss

Check a variety of forecasts anywhere in the world. Save locations, choose measurement preferences, and receive alerts for special weather conditions.

## About
This is the server for WeatherBoss. The frontend is handled via a [seperate client folder](https://github.com/daviddinnison/weatherboss-front). Install the server first before proceeding to the frontend.

## Table of Contents

- [Installation](#installation)
- [Working on the project](#working-on-the-project)

### Installation

- Clone this repository: `git clone https://github.com/daviddinnison/weatherboss-back`
- Move into project directory: `cd weatherboss-back`
- Install dependencies: `npm i`
- Create an mlab database using the [Mlab documentation](https://docs.mlab.com/) as a guide. After creating a database, you will see a command for connecting via the standard MongoDB URI.
- Create a .env file in the root folder. Make sure you have created a DB and have the command for connecting to the MongoDB URI.
  ```
  DATABASE_URL=(command for connecting to MongoDB URI)
  JWT_SECRET=(whatever string you want)
  CLIENT_ORIGIN=http://localhost:3000
  JWT_EXPIRY=7d
  PORT=8080
  ```

### Working on the project

- Start the server with `nodemon`
- Starts a server running at http://localhost:8080