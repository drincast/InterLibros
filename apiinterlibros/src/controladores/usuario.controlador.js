"use strict"

var Usuario = require("../modelos/usuario.modelo.js");

var bcrypt =  require("bcrypt-nodejs");

var token = require("../token/token");



function pruebaUsuario(req, res){
  res.status(200).send({mensaje: "Probando el controlador de usuarios"});
}

function crearUsuario(req, res){
  var usuario = new Usuario();
  var parametros = req.body;

  usuario.usuario = parametros.usuario;
  usuario.password = parametros.password;
  usuario.email = parametros.email;

  usuario.save((error, usuarioBD) => {
    if(error){
      res.status(500).send({mensaje: "Error al guardar el usuario"});
    }
    else{
      res.status(200).send({usuarioBD});
    }
  });
}

function ingresoUsuario(req, res){
  var parametros = req.body;
  var usuario = parametros.usuario;
  var password = parametros.password;

  Usuario.findOne({usuario:usuario, password:password}, (error, usuarioResp) => {
    if(error){
      res.status(500).send({mensaje: "Error al ingresar el usuario"});
    }
    else{
      res.status(200).send({token: token.cargarToken(usuarioResp)});
      //res.status(200).send({usuarioResp});
    }
  });
}

module.exports = {
  pruebaUsuario,
  crearUsuario,
  ingresoUsuario
}
