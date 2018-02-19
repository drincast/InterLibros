"use strict"

var express = require('express');
var mongoose = require('mongoose');
var dato = require("./src/dato/dato");


//conexión a la mongo mlab
const basedatos = process.env.MONGO_URL || "mongodb://interlibros:interlibros123@ds041678.mlab.com:41678/interlibros";

mongoose.connect(basedatos, function(err, res) {
  console.log('iniciando conexión a mongolab ...');

  if(err){
    console.log('Error de conexión: ' + err);
  }

  console.log('Se conecto a mongolab !!!!'); 
});
