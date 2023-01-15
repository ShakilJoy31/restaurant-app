import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
    name: String,
    phone: Number,
    email: String,
    password: String,
    photo: String,
    feedback: String,
    foodReviewedName: String,
    foodReviewedPhoto: String
})

const Users = models.user || model('user', userSchema)
export default Users; 