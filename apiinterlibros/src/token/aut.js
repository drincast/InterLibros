"use strict"
var token = require("jwt-simple");
var momento = require("moment");
var claveSecreta = ("_interlibros321");

exports.autenticacion = function(req, res, next){
  if(!req.headers.authorization){
    return res.status(403).send({mansaje: "la petición no tiene la cabecera de autenticación"})
  }
  else{
    var tokenEnviado = req.headers.authorization.replace(/['"]+/g, '');

    try {
      var cargarToken = token.decode(tokenEnviado, claveSecreta);

      if(cargarToken.exp <= momento().unix()){
        return res.status(403).send({mensaje: "el token ha expirado"});
      }
    } catch (e) {
      return res.status(403).send({mensaje: "el token no es válido"});
    }

    req.usuarioToken = cargarToken;

    next();
  }
}
