import { Schema, models, model } from "mongoose";

const productSchema = new Schema({
    name: String,
    price: Number,
    description: String,
    photo: String,
    catagory: String
})

const Products = models?.products || model('products', productSchema)
export default Products; 