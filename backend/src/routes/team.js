import express from 'express'; 
import { getTeamMembers, createTeamMember } from '../controllers/team.js';

export const teamRouter = express.Router();

teamRouter.get('/team', getTeamMembers);
teamRouter.post('/team', createTeamMember);
