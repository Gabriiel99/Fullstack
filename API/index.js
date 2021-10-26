const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
//create the server
const app = express();

//Connect to mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/budget',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//enable routing
app.use('/', routes());

//port and start the server
app.listen(4000, () =>{
    console.log('servidor');
})