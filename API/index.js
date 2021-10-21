const express = require('express');
const mongoose = require('mongoose');

//create the server
const app = express();

//Connect to mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/budget',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

//port and start the server
app.listen(4000, () =>{
    console.log('servidor');
})