import Standup from '../models/standup.js';

export const getStandUp = async (req, res) => {
    try {
        const standup = await Standup.find();
        return res.status(200).json(standup);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
};

export const createStandUp = async (req, res) => {
    const { note } = req.body;
    const newNote = new Standup(note);
    try {
        await newNote.save();
        return res.status(201).json(newNote);
    } catch (error) {
        return res.status(409).json({ message: error.message });
    }
};