

//when creating a new budget
exports.newUser = (req, res, next) =>{
    //insert into database
    console.log(req.body);
    
    res.json({message: 'was added successfully'});
}