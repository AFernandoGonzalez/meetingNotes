import Project from '../models/project.js';

export const getProjects = async (req, res) => {
    const qry = {
        setActive: { $eq: true }
    }

    try {
        const projects = await Project.find(qry).sort({ 'name': 'asc' }).exec();
        return res.status(200).json(projects);
        
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
};

export const createProject = async (req, res) => {
    const project = new Project(req.body);
    try {
        await project.save();
        return res.status(201).json(project);
    } catch (error) {
        return res.status(409).json({ message: error.message });
    }
}
