"use strict"

var express = require('express');
var mongoose = require('mongoose');

var app = require("./src/app");
var port = process.env.PORT || 1234;

//conexión a la mongo mlab
const basedatos = process.env.MONGO_URL || "mongodb://interlibros:interlibros123@ds041678.mlab.com:41678/interlibros";

mongoose.connect(basedatos, function(error, respuesta) {
  console.log('iniciando conexión a mongolab ...');

  if(error){
    throw error;
  }
  else {
    console.log('Se conecto a mongolab !!!!');

    app.listen(port, function(){
      console.log("Api rest funcionando, esperando peticiones ...");
    });
  }
});
