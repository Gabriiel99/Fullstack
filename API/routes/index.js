const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
module.exports = function(){

    //Add new ones via POST
    router.post('/users',
        userControllers.newUser
    );

    //getting all the records in the database
    router.get('/users',
        userControllers.getUser
    );

    //get a specific user ID
    router.get('/users/:id',
        userControllers.getUser
    );

    //update a record with a specific ID
    router.put('/users/:id',
       userControllers.updateUser 
    );

    //delete patient by ID
    router.delete('/users/:id',
        userControllers.delUser
    );

    return router;
}