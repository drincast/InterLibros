"use strict"

var express = require('express');
var bodyParser = require('body-parser');

var rutaUsuario = require('./rutas/usuario.ruta');
var rutaLibro = require('./rutas/libro.ruta');
var rutaMensaje = require('./rutas/mensaje.ruta');

var app = express();

//convertir en json
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.header("Allow", "GET, POST, PUT, DELETE");
//   next();
// });


app.use("/api", rutaUsuario);
app.use("/api", rutaLibro);
app.use("/api", rutaMensaje);

module.exports = app;
