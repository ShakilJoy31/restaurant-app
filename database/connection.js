import mongoose from "mongoose";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const connectMongo = async () =>{
    try{
        const {connection} = await mongoose.connect(process.env.MONGO_URI); 
        if(connection.readyState === 1){
            console.log(''); 
        }
    }catch(errors){
        return Promise.reject(errors)
    }
}

export default connectMongo;