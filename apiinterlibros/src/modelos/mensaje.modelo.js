"use strict"
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MensajeSchema = Schema({
  idUsuario: String,
  idUsuarioEnvia:String,
  idLibro:String,
  mensaje: String,
  tipo: String
});

module.exports = mongoose.model("Mensaje", MensajeSchema);
