import mongoose from 'mongoose';
import Standup from '../models/standup.js';

export const getStandUp = async (req, res) => {
    try {
        const standup = await Standup.find().sort({ 'createdOn': 'desc' }).exec()

        return res.status(200).json(standup);

    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
};

export const getStandUpById = async (req, res) => {
    const qry = {
        teamMemberId: new mongoose.Types.ObjectId(req.params.teamMemberId)
    }

    try {
        const standup = await Standup.find({ 'teamMemberId': qry.teamMemberId })
            .sort({ 'createdOn': 'desc' })
            .exec();

        console.log('qry:', qry);
        console.log('standup:', standup);
        return res.status(200).json(standup);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: error.message });
    }
};

export const createStandUp = async (req, res) => {
    const note = new Standup(req.body);
    try {
        await note.save();
        return res.status(201).json(note);
    } catch (error) {
        return res.status(409).json({ message: error.message });
    }
};