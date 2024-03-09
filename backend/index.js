import express from 'express';
import dotenv from 'dotenv'

import connectDb from './config/connectDb.js';
import cookieParser from 'cookie-parser';


const app = express();
const port = process.env.PORT || 5000;
const url = process.env.DATA_BASE_URL || "mongodb://localhost:27017/Movie-App";
dotenv.config();
connectDb(url)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// Routes

app.listen(port, () => console.log("server up"))