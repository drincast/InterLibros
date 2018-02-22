import React, { Component } from 'react';
import { ActivityIndicator, Alert, Button, Image, ListView
         , ScrollView, StatusBar, Text, TextInput
         , TouchableOpacity, View } from 'react-native';
import { estilos } from './estilos';
import AutSinglenton from '../../aut/autsinglenton';

var objAut = AutSinglenton.getInstancia();

class BuscarLibro extends Component {
  static navigationOptions = {
    title: 'Buscar Libros',
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      token: objAut.getToken()
    }
  }
  render(){
    return (
      <View style={estilos.contenedor}>
        <Text>Hola!!!</Text>
        <Text>{objAut.getToken()}</Text>
      </View>
    );
  }
};

export default BuscarLibro;
