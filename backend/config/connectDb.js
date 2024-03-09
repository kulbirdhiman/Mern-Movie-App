import mongoose from "mongoose";

const connectDb = async (url) => {
    try {
        const connected = await mongoose.connect(url)
    } catch (error) {
        console.log("something Wrong")
    }
}
export default connectDb;