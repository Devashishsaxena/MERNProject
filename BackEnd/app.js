import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
//to link routes at application level
import BussinessRouter from './routes/Bussiness.router.js';
import ContactRouter from './routes/Contact.router.js';
import UserRouter from './routes/User.router.js';
//to extract body data from request (POST , PUT , DELETE , PATCH)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//To resolve cross origin problem
app.use(cors());
//route level middleware
app.use('/bussiness',BussinessRouter);
app.use('/contact',ContactRouter);
app.use('/user',UserRouter);
app.listen(3001);

