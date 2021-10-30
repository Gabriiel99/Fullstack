const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
//create the server
const app = express();

//enable cors
const whitelist = ['http://localhost:3000'];
const corsOption = {
    origin: (origin, callback) =>{
        const exist = whitelist.some(dominio =>dominio === origin);
        if(exist){
            callback(null,true);
        }else{
            callback(new Error('not allowed by CORS'));
        }
    }
}

//enable cors
app.use(cors());


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