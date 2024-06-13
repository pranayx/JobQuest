import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "Job_seeking_portal"
    })
    .then(()=>{
        console.log("Connected to database!")
    })
    .catch((err)=>{
        console.log('Error while connecting to db',err);
    });
} 

