"use strict"
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var LibroSchema = Schema({
  idUsuario: String,
  titulo: String,
  autor: String,
  descripcion: String,
  urlImagen: String
});

module.exports = mongoose.model("Libro", LibroSchema);
