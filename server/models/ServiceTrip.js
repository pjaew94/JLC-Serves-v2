const { Schema, model } = require('mongoose');

const ServiceTripSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    imgLink: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

module.exports = ServiceTrip = model('serviceTrip', ServiceTripSchema);