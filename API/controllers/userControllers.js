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

//getting all the records in the database
exports.getUser = async(req,res,next) =>{
    try{
        const users = await User.find({})
        res.json(users)
    }catch(error){
        console.log(error);
        next();
    }
}

//get a specific user by their ID
exports.getUser = async(req,res,next)=>{
    try{
        const users = await User.findById(req.params.id);
        res.json(users);
    }catch(error){
        console.log(error);
        next();
    }
}

//update a record by its id
exports.updateUser = async(req,res,next) =>{
    try{
        const users = await User.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true
        });
        res.json(users);
    }catch(error){
        console.log(error);
        next();
    }
}