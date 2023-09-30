const { Mongoose } = require("mongoose");

const mongoose = require(`mongoose`)
 

const usuariosSchema = new mongoose.Schema({
    name: String,
    email: String,
    nota: Number,
    calificacion: String
  });
  
  module.exports=mongoose.model('Usuarios', usuariosSchema);