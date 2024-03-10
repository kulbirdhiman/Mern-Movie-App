// Packages
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";

// Files
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import movieRoutes from './routes/movieRoutes.js'
import genraRoutes from './routes/genraRoutes.js'
// Configuration
dotenv.config();
connectDB();

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = 3000;

// Routes
app.use("/api/users", userRoutes);
app.use("/api/movies/", movieRoutes);
app.use("/api/gerna", genraRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
