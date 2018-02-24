"use strict"

var bcrypt =  require("bcrypt-nodejs");
var token = require("../token/token");

var Usuario = require("../modelos/usuario.modelo.js");

function pruebaUsuario(req, res){
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

function obtenerUsuario(req, res){
  var id = req.params.id;

  Usuario.find({_id: id}, (error, usuarioResp) => {
    if(error){
      res.status(500).send({mensaje: "Error al consultar el usuario :("});
    }
    else{
      if(usuarioResp != null){
        res.status(200).send(usuarioResp);
      }
      else {
        res.status(500).send({mensaje: "Error al consultar el usuario :("});
      }
    }
  });
}

function obtenerUsuarios(req, res){
  Usuario.find((error, usuariosResp) => {
    if(error){
      res.status(500).send({mensaje: "Error al consultar los usuarios :("});
    }
    else{
      if(usuariosResp != null){
        res.status(200).send(usuariosResp);
      }
      else {
        res.status(500).send({mensaje: "Error al consultar los usuarios :("});
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
      if(usuarioResp != null)
        res.status(200).send({token: token.cargarToken(usuarioResp), 
                              idUsuario: usuarioResp._id,
                              usuario: usuarioResp.usuario});
      else {
        res.status(500).send({mensaje: "Error al ingresar el usuario"});
      }
    }
  });
}

module.exports = {
  pruebaUsuario,
  obtenerUsuario,
  obtenerUsuarios,
  crearUsuario,
  ingresoUsuario
}
