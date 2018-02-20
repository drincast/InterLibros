"use strict"
var express = require("express");

var ControladorUsuario = require("../controladores/usuario.controlador");

var api = express.Router();

api.get('/usuarios', ControladorUsuario.pruebaUsuario);

api.post('/crear-usuario', ControladorUsuario.crearUsuario);

api.post('/login', ControladorUsuario.ingresoUsuario);

module.exports = api;
