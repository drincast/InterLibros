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

function obtenerLibros(req, res){
  Libro.find((error, librosResp) => {
    if(error){
      res.status(500).send({mensaje: "Error al obtener los libros :("});
    }
    else{
      if(librosResp != null){
        res.status(200).send(librosResp);
      }
      else {
        res.status(500).send({mensaje: "Error al obtener los libros :("});
      }
    }
  });
}

function obtenerLibro(req, res){
  var id = req.params.id;

  Libro.find({_id: id}, (error, libroResp) => {
    if(error){
      res.status(500).send({mensaje: "Error al buscar el libro :("});
    }
    else{
      if(libroResp != null){
        res.status(200).send({libroResp});
      }
      else {
        res.status(500).send({mensaje: "Error al buscar el libro :("});
      }
    }
  });
}

function obtenerLibrosXTitulo(req, res){
  var titulo = req.params.titulo;
  var idUsuario = req.params.idUsuario;

  Libro.find({titulo: {'$regex': titulo, '$options' : 'i'},
              idUsuario: {$ne: idUsuario}}, (error, librosResp) => {
    if(error){
      res.status(500).send({mensaje: "Error al buscar en los libros :("});
    }
    else{
      if(librosResp != null){
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
  obtenerLibro,
  obtenerLibros,
  obtenerLibrosXTitulo
}
