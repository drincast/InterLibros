import React, { Component } from 'react';
import { ActivityIndicator, Alert, Button, FlatList
         , Image, Keyboard, ListView
         , ScrollView, StatusBar, Text, TextInput
         , TouchableOpacity, View } from 'react-native';

import { estilos } from './estilos';
import AutSinglenton from '../../aut/autsinglenton';

const configApp = require('../../configapp');
let objAut = AutSinglenton.getInstancia();

class Mensaje extends Component {
  static navigationOptions = {
    title: 'Mensajes',
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      token: objAut.getToken(),
      mensajes: undefined
    }
  }

  render(){
    return (
      <View style={estilos.contenedor}>
            <View>
              <TouchableOpacity style={estilos.contenedorBoton}>
                 <Text style={estilos.textoBoton}>ENVIAR SOLICITUD</Text>
              </TouchableOpacity>
            </View>
      </View>
    );
  }
};

export default Mensaje;
