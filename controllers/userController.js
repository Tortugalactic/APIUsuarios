const userModel = require("../models/userModel");

exports.getAllUsers = (req, res) => {
    userModel.find()
    .then(users => res.json(users))
    .catch(err => res.status(500).json({error:err.message}));
};

exports.createUser =  (req, res) => {
    const {username, email,password} = req.body;
    const newUser = new userModel({
        username,
        email,
        password
    });

    newUser.save()
    .then(() => res.status(201).json({success:"created"}))
    .catch(err => res.status(500).json({error:err.message}));
}

exports.updateUser = (req, res) => {
    const {id}= req.params;
    userModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
}