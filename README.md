# AIRPORTPANEL
Airport Tool for airport panels management. Restful CRUD API application created with Node.js, Express and MongoDB. Deployed using Heroku.

## Documentation

**Requirements & Data model:** https://drive.google.com/open?id=10GR8tSc9Dkve3voRnQwkz5nfh7rhSxep65YzJsEkceE

**Test Plan:** https://drive.google.com/open?id=1ybEDIo-iWK5E-FG6ERCKOsFJ-JH6otqAOcxgDGmOd9U

**Sprints:** https://drive.google.com/open?id=1OCRbJjehu4Q0Cbdpnl4JyBKBX8g9Fog0u7fy2wIcd0Y

**IDE:** Visual Studio Code

## Deployment

**URL:** https://arcane-brushlands-86591.herokuapp.com/

## Steps to setup

1. Clone repository

`git clone https://github.com/iHeluani/airportpanel.git` (master branch)

2. Install dependencies

`npm install`

3. Run server

`node main.js`

4. Application running

The app will be running at port 8080 (http://localhost/8080).

## HTTP CRUD EXPLANATION

In this project we have 3 HTTP endpoints as follows:

**CREATE:** `/newFlight`
**READ:** `/allFlights`
**UPDATE:** `/flight/:flightId`
**DELETE:** `/flight/:flightId`

To try it we can use any REST Client, as Advanced REST client for Chrome.
To insert data we can follow this JSON example:

`{
  "time": "18:00",
  "destination": "Dublin",
  "flight": "RYR7652",
  "counter": "1/9",
  "boarding": "16:30",
  "gate": "X1",
  "remarks": "Last call"
}`

## Oncoming changes

As I've been trying to deploy it to the cloud with Heroku and Google Cloud Platform without success on last one. My next step is to achieve that so it can be deployed using a FEXCO technology and also I'll use Sonar in my code to test coverage.
