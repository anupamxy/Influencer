import mongoose from "mongoose";

const connectDB =async()=>{
    try{
        const conn=await mongoose.connect("mongodb+srv://krishna_mern:anupam21love@cluster0.p5kouvn.mongodb.net/influencer");
        console.log(`CONNNECTED TO MONGODB ${conn.connection.host}`);

    }catch(error){
        console.log(`ERROR IN MONGODB ${error}`);
    }
};
export default connectDB;