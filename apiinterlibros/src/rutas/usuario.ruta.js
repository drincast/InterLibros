"use strict"
var express = require("express");

var ControladorUsuario = require("../controladores/usuario.controlador");

var api = express.Router();

var md_aut = require("../token/aut.js");

//api.get('/usuarios', md_aut.autenticacion, ControladorUsuario.pruebaUsuario);
api.get('/usuarios', ControladorUsuario.pruebaUsuario);

api.post('/crear-usuario', ControladorUsuario.crearUsuario);

api.post('/login', ControladorUsuario.ingresoUsuario);

module.exports = api;
