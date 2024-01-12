import express from 'express';
import cors from 'cors';
import './env.js';
import ProprietariosRouter from './routes/proprietario.route.js';
import AnimalRouter from './routes/animal.route.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/proprietario', ProprietariosRouter);
app.use('/animal', AnimalRouter);
app.use((err, req, res, next) => {
    res.status(400).send({error: err.message});
});

app.listen(3000, () => {
    console.log('API Started');
});