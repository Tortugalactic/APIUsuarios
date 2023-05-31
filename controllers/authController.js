const bcrypt = require("bcryptjs");

const userModel = require("../models/userModel");
exports.authenticateUser = (req, res) => {
    const { email, password } = req.body;
    userModel
        .findOne({ email })
        .then((user) => {
            if (!user){
            // si no encuentra al usuaro, retorna un msj de error    
              return res.status(400).json({err:"user not found"});
            }
        bcrypt.compare(password, user.password, function( err, result){
            if(err){
                res.status(500).jason({error:err.message})
            }
            else if(result){ 
            // si la contraseña coincide, se autentica el usiario ok    
                res.status(200).json({message:"authentication was siccesful"})
            }
            else{
            // si la contraseña no coincide, retorna un msj de error
                res.status(401).json({error:"authentication failed"})
            }
        });  
    });
    .cach((err)=>res.status(500).jason({error:err.message}))
};

