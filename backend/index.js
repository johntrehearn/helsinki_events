import express from 'express';
import mongoURL from './config.js';
import mongoose from 'mongoose';
import eventRoutes from './routes/eventRoutes.js';

const app = express();

app.use(express.json());

let port = 5555;

app.get('/', (request, response) => {
  return response.status(200).send('Welcome to the backend');
});

app.use('/events', eventRoutes);

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log('Database is connected');
    app.listen(port, () => console.log('Server is serving'));
  })

  .catch((error) => console.log(error));
