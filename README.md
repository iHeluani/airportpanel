# AIRPORTPANEL
Airport Tool for airport panels management. Restful CRUD API application created with Node.js, Express and MongoDB.

## Documentation

**Requirements:** https://drive.google.com/open?id=10GR8tSc9Dkve3voRnQwkz5nfh7rhSxep65YzJsEkceE

**Sprints:** https://drive.google.com/open?id=1OCRbJjehu4Q0Cbdpnl4JyBKBX8g9Fog0u7fy2wIcd0Y

**IDE:** Visual Studio Code

## Steps to setup

1. Clone repository

`git clone https://github.com/iHeluani/airportpanel.git` (master branch)

2. Install dependencies

`npm install`

3. Run server

`node main.js`

4. Application running

The app will be running at por 8080 (http://localhost/8080).

## HTTP CRUD EXPLANATION

In this project we hace 3 HTTP endpoints as follows:

**CREATE:** `/newFlight`
**READ:** `/allFlights`
**UPDATE:** `/flight/:flightId`
**DELETE:** `/flight/:flightId`

To try it we can use any REST Client, as a Advanced REST client for Chrome.

## Oncoming changes

As I've been trying to deploy it to the cloud with Heroku and Google Cloud Platform without success. My next step is to achieve that and also I'll use Sonar in my code.