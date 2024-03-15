import Genra from '../model/genraModel.js';
import expressAsyncHandler from 'express-async-handler';

const createGerna = expressAsyncHandler(async (req, res) => {
    try {
        const { name } = req.body;
        const existingGenre = await Genra.findOne({ name });
        if (existingGenre) {
            return res.status(400).send('This name already exists');
        }
        const newGenre = new Genra({ name });
        await newGenre.save();
        res.status(201).json(newGenre);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const updateGenra = expressAsyncHandler(async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params;
        const genre = await Genra.findByIdAndUpdate(id, { name }, { new: true });
        if (!genre) {
            return res.status(404).json({ message: "Cannot find the genre with the given id." });
        }
        res.json(genre);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const deleteGenra = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const deletedGenre = await Genra.findByIdAndDelete(id);
        if (!deletedGenre) {
            return res.status(404).json({ message: "No record found for this Id!" });
        }
        res.status(200).json(deletedGenre);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const getAllGenras = expressAsyncHandler(async (req, res) => {
    try {
        const allGenres = await Genra.find();
        res.status(200).json(allGenres);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const readGerna = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const genre = await Genra.findById(id);
        if (!genre) {
            return res.status(404).json({ message: "Genre not found" });
        }
        res.json(genre);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export { createGerna, updateGenra, deleteGenra, getAllGenras, readGerna };
