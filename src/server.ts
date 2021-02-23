import 'reflect-metadata';
import './database';
import express, { Request, Response } from 'express';

const app = express();

app.get('/', async (request: Request, response: Response) => {
    return response.json({ message: 'Hello wrld!!!!' })
});

app.post('/', async (request: Request, response: Response) => {
    return response.json({ message: 'Dados salvos com sucesso' })
});


app.listen(3333, () => {
    console.log('Listening on Port 3333');
});