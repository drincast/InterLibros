"use strict"
var express = require("express");

var ControladorMensaje = require("../controladores/mensaje.controlador");

var api = express.Router();
var md_aut = require("../token/aut.js");

//api.get('/usuarios', md_aut.autenticacion, ControladorUsuario.pruebaUsuario);
api.get('/mensajes', ControladorMensaje.obtenerMensajes);
api.get('/mensajes-Usuario/:id', md_aut.autenticacion, ControladorMensaje.obtenerMensajesXIdUsuario);

api.post('/enviar-mensaje', ControladorMensaje.enviarMensaje);

module.exports = api;
