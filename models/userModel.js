const mongoose = require("mongoose");

const Uri = "mongodb+srv://MateoUser:K8HF41ZmQlNBToSc@cluster0.954jp1g.mongodb.net/";
//const Uri = "Aqui va la url de mongodb+srv://MateoUser:K8HF41ZmQlNBToSc@cluster0.954jp1g.mongodb.net/ Altas o mongodb local. Cambiandolo la API ya es funcional";

mongoose.connect(Uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Se conecto con base de datos"))
  .catch(err => console.log("Error de conexion con la base de datos", err));

const userSchema = new mongoose.Schema({

  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  collection: 'users'
}); //O "USERS o Users para que sea estricto con mayusculas"

module.exports = mongoose.model('Users', userSchema);