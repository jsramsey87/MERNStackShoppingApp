import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import router from './routes/router.js';

const app = express();

app.use(bodyParser.json({limit: "20mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended: true}));

app.use(cors());

app.use('/Orders', router);

const CONNECTION_URL = "mongodb+srv://user:password123123@cluster0.dkk82.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology:true
}).then(() => app.listen(PORT, () =>
console.log(`Connection on port: ${PORT}`)
)).catch((err) => console.log(err));

//mongoose.set('useFindAndModify', false);