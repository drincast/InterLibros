"use strict"

var bcrypt =  require("bcrypt-nodejs");
var token = require("../token/token");

var Mensaje = require("../modelos/mensaje.modelo.js");

function obtenerMensajes(req, res){
  Mensaje.find((error, mensajesResp) => {
    if(error){
      res.status(500).send({mensaje: "Error al consultar los mensajes :("});
    }
    else{
      if(mensajesResp != null){
        res.status(200).send(mensajesResp);
      }
      else {
        res.status(500).send({mensaje: "Error al consultar los mensajes :("});
      }
    }
  });
}

function obtenerMensajesXIdUsuario(req, res){
  var id = req.params.id;
  console.log(id);

  Mensaje.find({idUsuario: id}, (error, mensajesResp) => {
    if(error){
      res.status(500).send({mensaje: "Error al consultar los mensajes :("});
    }
    else{
      if(mensajesResp != null){
        res.status(200).send({mensajesResp});
      }
      else {
        res.status(500).send({mensaje: "Error al consultar los mensajes :("});
      }
    }
  });
}

function enviarMensaje(req, res){
  var mensaje = new Mensaje();
  var parametros = req.body;

  mensaje.idUsuario = parametros.idUsuario;
  mensaje.idUsuarioEnvia = parametros.idUsuarioEnvia;
  mensaje.idLibro = parametros.idLibro;
  mensaje.mensaje = parametros.mensaje;
  mensaje.tipo = parametros.tipo;

  mensaje.save((error, mensajeResp) => {
    if(error){
      res.status(500).send({mensaje: "Error al enviar el mensaje :("});
    }
    else{
      res.status(200).send(mensajeResp);
    }
  });
}

module.exports = {
  obtenerMensajes,
  obtenerMensajesXIdUsuario,
  enviarMensaje
}
