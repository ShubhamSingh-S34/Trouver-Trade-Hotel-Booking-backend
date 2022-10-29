const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomSchema = mongoose.Schema({
    date: {
        type: Date,
        default: Date.now(),
    },
    rooms: {
        type: Number,
        default: 5
    }
})

const Room = mongoose.model('Room', roomSchema);
module.exports = Room;