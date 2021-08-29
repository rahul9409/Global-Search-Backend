const express=require("express");
const dotenv=require("dotenv")
const app= express();
const mongoose=require("mongoose");
const cors =require("cors");

dotenv.config({path:'./config.env'})
const PORT=process.env.PORT;
require('./db/conn');
app.use(cors());
app.use(express.json());
app.use(require('./routes/auth'));

app.listen(PORT);
