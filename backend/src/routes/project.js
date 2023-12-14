import express from 'express';
import { getProjects, createProject } from '../controllers/project.js';

export const projectRouter = express.Router();

projectRouter.get('/projects', getProjects);
projectRouter.post('/project', createProject);