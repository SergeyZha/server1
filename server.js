import express from 'express';
import { users, db, records } from './data/index.js';
import cors from 'cors';
import recordsRouters from './routers/recordsRouters.js';
import morgan from 'morgan';
import { errorHandler, recordValidation } from './middleware/validator.js';

const app = express();
/** EXPRESS MIDDLEWARE */
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5000;

/** ENDPOINTS */
app.get('/', (req, res) => {
  res.send('Hello SuperUsers!');
});

//  ROUTES

//app.use('/orders');
//app.use('/users');
app.use('/records', recordsRouters);

app.use('/records/add', recordValidation);

app.use(errorHandler);

// start the server
app.listen(PORT, () => {
  console.log(`server's up & running at port: ${PORT} 💥`);
});
