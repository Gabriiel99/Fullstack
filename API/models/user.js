//we will use some mongoose methods
const mongoose = require('mongoose');

//we import the schema for the database
const Schema = mongoose.Schema;

//we define a new schema with a table with different fields
const userSchema = new Schema({
    concept:{
        type: String,
        trim: true,
    },
    amount:{
       type: String,
       trim: true 
    },
    name:{
        type: String,
        trim: true 
     },
    date:{
        type: String,
        trim: true
    },
    hour:{
        type: String,
        trim: true
    },
    type:{
        type: String,
        trim: true 
     },
});

//We will make this model available in the controls where we will enter the records and bring new records
module.exports = mongoose.model('User', userSchema );


