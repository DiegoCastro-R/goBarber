import 'reflect-metadata';
import express, { request, response } from 'express';
import routes from './routes';
import './database';
import uploadConfig from './config/upload';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.listen(3333, () => {
  console.log('⏲ Starting ...');
  console.log('🚀 Server started on port 3333');
});
