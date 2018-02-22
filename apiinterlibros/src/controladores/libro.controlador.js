"use strict"

var bcrypt =  require("bcrypt-nodejs");
var token = require("../token/token");

var Libro = require("../modelos/libro.modelo");

function crearLibro(req, res){
  var libro = new Libro();
  var parametros = req.body;

  libro.idUsuario = parametros.idUsuario;
  libro.titulo = parametros.titulo;
  libro.autor = parametros.autor;
  libro.descripcion = parametros.descripcion;
  libro.urlImagen = parametros.urlImagen;

  libro.save((error, libroBD) => {
    if(error){
      res.status(500).send({mensaje: "Error al guardar el libro"});
    }
    else{
      res.status(200).send({libroBD});
    }
  });
}

function obtenerLibrosXTitulo(req, res){
  //var parametros = req.body;
  var titulo = req.params.titulo;

  Libro.find({titulo: {'$regex': titulo}}, (error, librosResp) => {
    if(error){
      res.status(500).send({mensaje: "Error al buscar en los libros :("});
    }
    else{
      if(librosResp != null){
        console.log(librosResp);
        res.status(200).send({librosResp});
      }
      else {
        res.status(500).send({mensaje: "Error al buscar en los libros :("});
      }
    }
  });
}

module.exports = {
  crearLibro,
  obtenerLibrosXTitulo
}
