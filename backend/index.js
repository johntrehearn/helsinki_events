import express from 'express';
import mongoURL from './config.js';
import mongoose from 'mongoose';

const app = express();

let port = 5555;

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log('Database is connected');
    app.listen(port, () => console.log('Server is serving'));
  })

  .catch((error) => console.log(error));
