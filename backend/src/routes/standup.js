import express from 'express';
import { getStandUp, createStandUp, getStandUpById } from '../controllers/standup.js';

export const standUpRouter = express.Router();

standUpRouter.get('/standup', getStandUp);
standUpRouter.get('/standup/:teamMemberId', getStandUpById);
standUpRouter.post('/standup', createStandUp);
