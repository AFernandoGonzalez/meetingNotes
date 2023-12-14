import Team from '../models/teamMember.js';

export const getTeamMembers = async (req, res) => {
    try {
        const team = await Team.find().sort({
            'name': 'desc'
        }).exec();
        return res.status(200).json(team)
        
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
};

export const createTeamMember = async (req, res) => {
    const teamMember = new Team(req.body);
    try {
        await teamMember.save();
        return res.status(201).json(teamMember);
    } catch (error) {
        return res.status(409).json({ message: error.message });
    }
}