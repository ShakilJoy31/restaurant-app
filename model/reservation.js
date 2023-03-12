import { Schema, models, model } from "mongoose";

const reservationSchema = new Schema({
    name: String,
    email: String,
    phone: Number,
    people: String,
    time: String,
    date: String,
    occasion: String,
    userRequest: String,
    reminder: Boolean,
    dining: Boolean,
    table: Boolean,
    requesterEmail: String
})

const Reservation = models.reservation || model('reservation', reservationSchema)
export default Reservation; 