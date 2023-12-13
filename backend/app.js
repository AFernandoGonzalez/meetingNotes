import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { standUpRouter } from './src/routes/standup.js';
import { teamRouter } from './src/routes/team.js';

// dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', standUpRouter);
app.use('/api', teamRouter);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)); 