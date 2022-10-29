const mongoose = require('mongoose');

const Schema = mongoose.Schema;


// Name, Email ID, Phone Number, Number of Rooms, Check In Date, & Check Out Data.
const hotelSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    noOfRooms: {
        type: Number,
        required: true,
    },
    checkIn: {
        type: String,
        default: Date,
        required: true,
    },
    checkOut: {
        type: String,
        default: Date,
        required: true,
    }
});

const Hotel = mongoose.model('Hotel', hotelSchema);
module.exports = Hotel;

