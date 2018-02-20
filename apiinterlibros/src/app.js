"use strict"

var express = require('express');
var bodyParser = require('body-parser');
var rutaUsuario = require('./rutas/usuario.ruta');

var app = express();

//convertir en json
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//rutas base
app.get("/pruebas", (req, res) => {
  res.status(200).send({message: "bienvenido"})
});

app.use("/api", rutaUsuario);

module.exports = app;
