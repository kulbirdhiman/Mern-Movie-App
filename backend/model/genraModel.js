import mongoose from "mongoose";
const gernaSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 32,
        trim: true,
        unquie: true
    }
});
const Genra = await mongoose.model("Genre", gernaSchema);
export default Genra;
