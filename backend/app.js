import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { standUpRouter } from './src/routes/standup.js';
import { teamRouter } from './src/routes/team.js';

import { connectDB } from './src/db/db.js';

const PORT = process.env.PORT || 8000;
const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api', standUpRouter);
app.use('/api', teamRouter);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)); 