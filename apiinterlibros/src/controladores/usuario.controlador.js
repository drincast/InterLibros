"use strict"

var bcrypt =  require("bcrypt-nodejs");
var token = require("../token/token");

var Usuario = require("../modelos/usuario.modelo.js");

function pruebaUsuario(req, res){
  //res.status(200).send({mensaje: "Probando el controlador de usuarios"});
  Usuario.find((error, usuariosResp) => {
    if(error){
      res.status(500).send({mensaje: "Error al consultar usuarios :("});
    }
    else{
      if(usuariosResp != null)
        res.status(200).send({usuariosResp});
      else {
        res.status(500).send({mensaje: "Error al consultar usuario :("});
      }
    }
  });
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
      //console.log(usuarioResp._id);
      if(usuarioResp != null)
        res.status(200).send({token: token.cargarToken(usuarioResp)});
      else {
        res.status(500).send({mensaje: "Error al ingresar el usuario"});
      }
      //res.status(200).send({usuarioResp});
    }
  });
}

module.exports = {
  pruebaUsuario,
  crearUsuario,
  ingresoUsuario
}
