import Movie from "../model/movieModel.js";
import expressAsyncHandler from "express-async-handler";

const createMovie = expressAsyncHandler(async (req, res) => {
    try {
        const newMovie = new Movie(req.body);
        const movie = await newMovie.save();
        res.json(movie)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
const allMovies = expressAsyncHandler(async (req, res) => {
    try {
        const allMovies = await Movie.find({});
        res.json(allMovies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
const movieFindById = expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const findMovie = await Movie.findById(id);
        if (!findMovie) {
            res.status(404).send("movie not founded");
        }
        res.json(findMovie)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
const updateMovie = expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(id, req.body, { new: true });
        if (!updateMovie) {
            res.status(404).json({ error: "movie not founded" })
        }
        res.json(updateMovie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
const deleteMovie = expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deletedMovie = await Movie.findByIdAndDelete(id);
        if (!deletedMovie) {
            res.status(400).json({ messge: "movie not founded" });
        }
        res.json(deleteMovie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
const addReview = expressAsyncHandler(async (req, res) => {
    try {
        const { rating, comment } = req.body;
        const movie = await Movie.findById(req.params.id);

        if (movie) {
            const alreadyReviewed = movie.reviews.find(
                (r) => r.user.toString() === req.user._id.toString()
            );

            if (alreadyReviewed) {
                res.status(400);
                throw new Error("Movie already reviewed");
            }

            const review = {
                name: req.user.username,
                rating: Number(rating),
                comment,
                user: req.user._id,
            };

            movie.reviews.push(review);
            movie.numReviews = movie.reviews.length;
            movie.rating =
                movie.reviews.reduce((acc, item) => item.rating + acc, 0) /
                movie.reviews.length;

            await movie.save();
            res.status(201).json({ message: "Review Added" });
        } else {
            res.status(404);
            throw new Error("Movie not found");
        }
    } catch (error) {
        console.error(error);
        res.status(400).json(error.message);
    }
});
const getNewmovie = expressAsyncHandler(async (req, res) => {
    try {
        const newMovie = await Movie.find().sort({ createdAt: -1 }).limit(10);
        res.json(newMovie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
const getTrendingMovies = expressAsyncHandler(async (req, res) => {
    try {
        const trend = await Movie.find().sort({ numReviews: -1 }).limit(10);
        res.json(trend);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
const getRandomMovie = expressAsyncHandler(async (req, res) => {
    try {
        const randomMovies = await Movie.aggregate([{ $sample: { size: 10 } }]);
        res.json(randomMovies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
const deleteComment = expressAsyncHandler(async (req, res) => {
    try {
        const { movieId, reviewId } = req.body;
        const movie = await Movie.findById(movieId);
        if (!movie) {
            res.status(404).json({ message: "movie not founded" });
        };
        const reviewIndex = movie.reviews.findIndex(
            (r) => r._id.toString() === reviewId
        );

        if (reviewIndex === -1) {
            return res.status(404).json({ message: "Comment not found" });
        }

        movie.reviews.splice(reviewIndex, 1);
        movie.numReviews = movie.reviews.length;
        movie.rating =
            movie.reviews.length > 0
                ? movie.reviews.reduce((acc, item) => item.rating + acc, 0) /
                movie.reviews.length
                : 0;
        await movie.save();
        res.json({ message: "Comment Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
export { createMovie, allMovies, updateMovie, addReview, movieFindById, deleteMovie, getNewmovie, getTrendingMovies, getRandomMovie, deleteComment }
