const bcrypt = require("bcrypt");

// cifrado de contraseña
const saltRounds = 10;
const plainPassword = "password123";

bcrypt.hash(plainPassword, saltRounds, function(err, hash){
    if(err){ 
        console.error(err)
    }
    else{
        console.log('se creó el hash de la contraseña', hash);
    }
})

// Autenticación con el hash
const hashedPassword = "$2b$10$";
const loginPassword = "password123";

bcrypt.compare(loginPassword, hashedPassword, function(err, result){
    if(err){
        console.err(err);
    }
    else if(result){
        console.log("Lacontraseña es válida");
    }
    else{
        console.log("La contraseña es inválida");
    }
}

const newPlainPassword = "newpassword123";

bcrypt.hash(newPlainPassword, saltRounds, function(err, hash){
    if(err){ 
        console.error(err)
    }
    else{
// Actualizar el hash de la contraseña en el registro del usuario
        console.log('se actualizó el hash de la contraseña', hash);
    }
});
