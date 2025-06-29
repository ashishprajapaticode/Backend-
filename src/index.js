import dotenv from 'dotenv'
dotenv.config()
import {connectDB} from './db/dbConnect.js'




connectDB();













// Old approch of connecting databse

/*import express from "express";
const app = express()

( async()=>{
    try{
       await mongoose.connect(`${process.env.MONGOOSE_URI}/${DB_NAME}`)
       app.on("error",()=>{
        console.log("error:",error);
        throw error
        
       })
       app.listen(process.env.PORT, ()=>{
        console.log('app is listening on port',process.env.PORT);
        
       })
    }
    catch(error){
        console.error("ERROR :" , error)
    }

})()*/