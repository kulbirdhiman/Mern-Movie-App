import express from "express";
import { createGerna, updateGenra, deleteGenra, getAllGenras, readGerna } from "../controllers/gernaController.js";
import { authenticate, authorizeAdmin } from "../middlewares/authmiddlware.js";

const router = express.Router();

router.route("/").post(authenticate, authorizeAdmin, createGerna)
    .get(authenticate, authorizeAdmin, getAllGenras);
router.route("/:id").put(authenticate, authorizeAdmin, updateGenra)
    .get(authenticate, authorizeAdmin, readGerna)
    .delete(authenticate, authorizeAdmin, deleteGenra);
export default router;