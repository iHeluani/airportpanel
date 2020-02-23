const Flight = require('../models/panel.model.js');

// Create and Save a new Flight
exports.create = (req, res) => {
    // Validate request
    if(!req.body.time) {
        return res.status(400).send({
            message: "Flight time can't be empty!"
        });
    }

    // Create a Flight
    const flight = new Flight({
        time: 		 req.body.time,
        destination: req.body.destination,
        flight: 	 req.body.flight,
        counter:   	 req.body.counter,
        boarding: 	 req.body.boarding,
        gate: 		 req.body.gate,
        remarks:	 req.body.remarks
    });

    // Save Flight in the database
    flight.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Flight..."
        });
    });
};

// Retrieve and return all flights from the database.
exports.findAll = (req, res) => {
    Flight.find()
    .then(flights => {
        res.send(flights);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving flights..."
        });
    });
};

// Find a single fligth with a flightId
exports.findOne = (req, res) => {
    Flight.findById(req.params.flightId)
    .then(flight => {
        if(!flight) {
            return res.status(404).send({
                message: "Flight not found with id: " + req.params.flightId
            });            
        }
        res.send(flight);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Flight not found with id: " + req.params.flightId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving flight with id: " + req.params.flightId
        });
    });
};

// Update a flight identified by the flightId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.time) {
        return res.status(400).send({
            message: "Flight time can't be empty!"
        });
    }

    // Find flight and update it with the request body
    Flight.findByIdAndUpdate(req.params.flightId, {
        time: 		 req.body.time,
        destination: req.body.destination,
        flight: 	 req.body.flight,
        counter:   	 req.body.counter,
        boarding: 	 req.body.boarding,
        gate: 		 req.body.gate,
        remarks:	 req.body.remarks
    }, {new: true})
    .then(flight => {
        if(!flight) {
            return res.status(404).send({
                message: "Flight not found with id: " + req.params.flightId
            });
        }
        res.send(flight);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Flight not found with id: " + req.params.flightId
            });                
        }
        return res.status(500).send({
            message: "Error updating flight with id: " + req.params.flightId
        });
    });
};

// Delete a flight with the specified flightId in the request
exports.delete = (req, res) => {
    Flight.findByIdAndRemove(req.params.flightId)
    .then(flight => {
        if(!flight) {
            return res.status(404).send({
                message: "Flight not found with id: " + req.params.flight
            });
        }
        res.send({message: "Flight deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Flight not found with id: " + req.params.flightId
            });                
        }
        return res.status(500).send({
            message: "Could not delete flight with id: " + req.params.flightId
        });
    });
};