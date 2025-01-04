const mongoose = require("mongoose")
const connectDB = async()=>{
    try {
        const conn =  await mongoose.connect(MONGO_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("ConnectDB error: ",error.message)
        process.exit(1);
    }
}  
module.exports = connectDB; 
