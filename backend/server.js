const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Hotel = require('../backend/Models/hotel.model');
const Room = require('../backend/Models/room.model');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded());


// CONNECTING TO MONGODB DATABASE
const uri = process.env.ATLAS_URI;
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(uri)
        .then((res) => { console.log("MONGOOSE CONNECTION ESTABLISHED !!!") });

}

// Name, Email ID, Phone Number, Number of Rooms, Check In Date, & Check Out Data.
app.post('/post', async (req, res) => {
    // console.log('INSIDE POST REQUEST !!!');
    // console.log(req.body);
    let checkInDate = new Date(req.body.checkIn);
    let checkOutDate = new Date(req.body.checkOut);
    // console.log("checkInDate", checkInDate);
    // console.log("checkOutDate", checkOutDate);
    for (let d = checkInDate; d <= checkOutDate; d.setDate(d.getDate() + 1)) {
        var Rooms = await Room.findOne({ date: d });
        if (Rooms == null) {
            var rooms = 5 - req.body.noOfRooms
            if (rooms < 0) res.send("Booking Sold out !!!");
            await new Room({
                date: d,
                rooms: rooms
            }).save();
        }
        else {

            if (Rooms.rooms - req.body.noOfRooms <= 0) {
                res.send("Booking Sold Out!!!");
            }
            else {
                console.log("This is a room", Rooms)
                // update rooms here
                const updates = { 'rooms': Rooms.rooms - req.body.noOfRooms };
                var updatedRoom = await Room.findOneAndUpdate({ date: d }, updates);
                updatedRoom.save();
            }
        }
    }
    const data = new Hotel({
        username: req.body.username,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        noOfRooms: req.body.noOfRooms,
        checkIn: req.body.checkIn,
        checkOut: req.body.checkOut
    })

    data.save()
        .then(() => { res.json(data) })
        .catch((err) => { console.log("ERROR ", err) })
})


app.listen(port, () => {
    console.log('CONNECTION ESTABLISHED ON PORT', port);
})