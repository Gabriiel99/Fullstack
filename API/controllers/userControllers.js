const User = require('../models/user');

//when creating a new budget
exports.newUser = async (req, res, next) =>{

    //create object with data from req.body
    const user = new User(req.body);

    try{
        await user.save();
        res.json({message: 'was added successfully'});
    }catch(error){
        console.log(error);
        next();
    }
    
    
}