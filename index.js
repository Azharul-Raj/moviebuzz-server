import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import http from 'http';
import mongoose from "mongoose";
import 'dotenv/config';

const app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const port = process.env.PORT || 3001;

const server = http.createServer(app);
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGODB_URL).then(() => {
    server.listen(port, () => {
        console.log(`Server is running at ${port}`);
    })
}).catch(err=>console.log(err))