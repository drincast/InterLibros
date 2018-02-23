"use strict"
var express = require("express");
var api = express.Router();

var md_aut = require("../token/aut.js");
var ControladorLibro = require("../controladores/libro.controlador");

api.get('/obtener-libro/:id', ControladorLibro.obtenerLibro);
api.get('/obtener-libros', ControladorLibro.obtenerLibros);
api.get('/obtener-libros-titulo/:titulo', ControladorLibro.obtenerLibrosXTitulo);
api.post('/crear-libro', ControladorLibro.crearLibro);

module.exports = api;
