module.exports = (app) => {
    const flights = require('../controllers/panel.controller.js');

    // Create a new Flight
    app.post('/newFlight', flights.create);

    // Retrieve all Flights
    app.get('/allFlights', flights.findAll);

    // Retrieve a single Flight with flightId
    app.get('/flight/:flightId', flights.findOne);

    // Update a Flight with flightId
    app.put('/flight/:flightId', flights.update);

    // Delete a Flight with flightId
    app.delete('/flight/:flightId', flights.delete);
}