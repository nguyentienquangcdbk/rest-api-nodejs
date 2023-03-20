const express = require('express');
const mongoose = require('mongoose')
// const appRoute = require('./route');
const appRoute = require('./route/index');
const dotenv = require('dotenv');
const cors =require('cors')

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json())

mongoose.connect(process.env.URLMONGOOSE).then(() => {
    console.log('URLMONGOOSE');
})


app.use('/api',appRoute);
app.listen(8000);