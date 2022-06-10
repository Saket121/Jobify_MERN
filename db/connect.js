import mongoose from "mongoose";


const connectDB = (url) => {
    return mongoose.createConnection()
}

export default connectDB