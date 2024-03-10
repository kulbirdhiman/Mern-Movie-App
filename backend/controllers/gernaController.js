import Genra from '../model/genraModel.js';
import expressAsyncHandler from 'express-async-handler';

const createGerna = expressAsyncHandler(async (req, res) => {
    try {
        const { name } = req.body;
        const isExit = await Genra.find(name);
        if (isExit) {
            res.status(401).send('This name already exists');
        }
        const newgenra = new Genra(name);
        await newgenra.save();
        res.json(newgenra)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
});
const updateGenra = expressAsyncHandler(async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params;
        const genra = await Genra.findByIdAndUpdate(id)
        if (!genra) {
            res.status(404).json({ message: "Cannot find the genre with the given id." });
        }
        genra.name = name;
        const updatedGenra = await genra.save();
        res.json(updatedGenra);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
});
const deleteGenra = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const deletedgerna = await Genra.remove({ _id: id });
        if (!deletedgerna) {
            res.status(401).json({ message: "No record found for this Id!" });
        }
        res.status(200).json(deletedgerna);
        res.json(deletedgerna)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
});
const getAllGenras = expressAsyncHandler(async (req, res) => {
    try {
        const allGerna = await Genra.find();
        res.status(200).json(allGerna);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
});
const readGerna = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const gerna = await Genra.findById(id);
        if (!gerna) {
            res.status(401).json({ message: "genra not founded" });
        }
        res.json(gerna)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
});
export { createGerna, updateGenra, deleteGenra, getAllGenras, readGerna };