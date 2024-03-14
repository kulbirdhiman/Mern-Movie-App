import multer from "multer";
import path from 'path';
import express from "express";
const router = express.Router()
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        const extname = path.extname(file.originalname)
        cb(null, `${file.fieldname}-${Date.now}-${extname}`)
    },
})
router.route("/", (req, res) => {

})

