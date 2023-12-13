import express from 'express';
import { getStandUp, createStandUp } from '../controllers/standup.js';

export const standUpRouter = express.Router();

standUpRouter.get('/standup', getStandUp);
standUpRouter.post('/standup', createStandUp);
