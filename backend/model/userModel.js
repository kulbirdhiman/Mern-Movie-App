import mongoose from "mongoose";

const userShema = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unquie: true },
    isAdmin: { type: Boolean, required: true, default: false }

}, {
    timestamps: true
});

const User = mongoose.model("User", userShema);
export default User