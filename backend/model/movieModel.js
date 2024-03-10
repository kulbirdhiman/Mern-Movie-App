import mongoose from "mongoose";

const reviewShecma = mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: String, required: true },
    comment: { type: String, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
},
    { timestamps: true });



const movieShecma = mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    year: { type: Number, required: true },
    // genre: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: "Genra"
    // },
    details: { type: String, required: true },
    cast: { type: String },
    reviews: { reviewShecma },
    numreviews: { type: Number, required: true, default: 0 },
    createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

const Movie = mongoose.model("Movie", movieShecma);
export default Movie;