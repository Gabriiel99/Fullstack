const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
module.exports = function(){

    //Add new ones via POST
    router.post('/users',
        userControllers.newUser
    )



    return router;
}