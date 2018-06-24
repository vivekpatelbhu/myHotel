import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import appRoutes from './routes';
import { Response, Request, NextFunction } from "express";
import mongoose from 'mongoose';

const app = express();
// Connect to MongoDB
const mongoUrl = 'mongodb://localhost:27017/hotel';
mongoose.connect(mongoUrl).then(
  () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch(err => {
  console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
  // process.exit();
});

app.use(express.static("src"));
app.use(express.static("src/components/public/images"));
app.use(bodyParser.json());
app.use(cors());

app.set('port', (process.env.PORT || 5000));
const routes = appRoutes(app);

app.get("/index", (req: Request, res: Response) => {
  res.sendFile(__dirname + '/home.html');
});

app.get("/", (req: Request, res: Response) => {
  res.json('Hello MyHotel');
});

export default app;
