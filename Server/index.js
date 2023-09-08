import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import conn from "./db.js";
import products from './models/products.js';
import multer from "multer";
import fs from 'fs';
import path from 'path';


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));
const PORT = process.env.port || 8080;
conn();
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
var upload = multer({ storage: storage });
app.post("/data",(req,res) => {
    console.log(req.body)
})

 
app.get("/",(req,res) => {
    
    res.send(`express running on ${PORT}`);
});
app.listen(PORT,() => {
    console.log(`server running on ${PORT}`);
});