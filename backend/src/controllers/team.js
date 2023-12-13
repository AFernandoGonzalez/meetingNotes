import Team from '../models/teamMember.js';

export const getTeamMembers = async (req, res) => {
    try {
        const team = await Team.find();
        return res.status(200).json(team);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
};

export const createTeamMember = async (req, res) => {
    const { member } = req.body;
    const newTeamMember = new Team(member);
    try {
        await newTeamMember.save();
        return res.status(201).json(newTeamMember);
    } catch (error) {
        return res.status(409).json({ message: error.message });
    }
}