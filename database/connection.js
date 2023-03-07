import mongoose from "mongoose";
const connectMongo = async () =>{
    try{
        const {connection} = await mongoose.connect('mongodb+srv://restaurantShakil:HxjwpDy4A4U9rzl3@cluster0.6fewfet.mongodb.net/?retryWrites=true&w=majority'); 
        if(connection.readyState === 1){
            console.log('Database is connected.'); 
        }
        
    }catch(errors){
        return Promise.reject(errors)
    }
}

export default connectMongo;