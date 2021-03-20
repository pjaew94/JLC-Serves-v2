const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const { DateTime } = require('luxon');



var dt = DateTime.local()


const DonationSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    donator: {
        type: String,
        required: true
    },
    message: {
        type: String
    },
    location: {
        type: String
    },
    comment: [
        {
            text: {
                type: String,
                required: true
            },
            user: {
                type: String,
                ref: 'users'
            },
            status: {
                type: String,
                ref: 'users'
            }
        }
    ],
    date: {
        type: String,
        default: dt.toLocaleString()
    },


});

DonationSchema.plugin(AutoIncrement, { inc_field: 'donationCount'});

module.exports = Donation = model('donation', DonationSchema);