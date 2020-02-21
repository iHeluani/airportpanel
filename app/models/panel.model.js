const mongoose = require('mongoose');

const PanelSchema = mongoose.Schema({
    time: 		 { type: String },
    destination: { type: String },
	flight: 	 { type: String },
	counter:   	 { type: String },
	boarding: 	 { type: String },
	gate: 		 { type: String },
	remarks:	 { type: String }
}, {
    timestamps: true
});

module.exports = mongoose.model('Panel', PanelSchema);