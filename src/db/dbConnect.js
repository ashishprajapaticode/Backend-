import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

export const connectDB = async () => {

    try {
     const ConnectionInstance =   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n MongoDB connected !! DB Host: ${ConnectionInstance.host}`);
    
    }
    catch(error){
        console.log("Mongoose connection error :", error);
        process.exit(1)
        

    }
}