import express from 'express';
import { authenticate, authorizeAdmin } from "../middlewares/authmiddlware.js";
import checkId from '../middlewares/checkId.js'
import { createMovie, allMovies, addReview, updateMovie, movieFindById, deleteMovie, getNewmovie, getTrendingMovies, getRandomMovie, deleteComment }
    from '../controllers/movieController.js';
const router = express.Router();
//admin routes
router.route("/").post(authenticate, authorizeAdmin, createMovie);
router.route("/delet-movie/:id").delete(authenticate, authorizeAdmin, deleteMovie);
router.route("/update_movie").put(authenticate, authorizeAdmin, updateMovie);
router.route("/delete-comment").delete(authenticate, deleteComment)
//user routes
router.route('/allmovie').get(allMovies);
router.route("/:id/addreview").post(authenticate, checkId, addReview);
router.route("/:id").get(movieFindById);
router.route("/newMovie").get(getNewmovie);
router.route("/topmovies").get(getTrendingMovies);
router.route("/getrandomMovie").get(getRandomMovie)

export default router;