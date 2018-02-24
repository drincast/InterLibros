import React, { Component } from 'react';
import { Alert, Button, FlatList
         , Image, Keyboard, ListView
         , ScrollView, StatusBar, Text, TextInput
         , TouchableOpacity, TouchableNativeFeedback, View } from 'react-native';

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
      mensajes: []
    }
  }

  componentDidMount() {
    this.obtenerMensajes();
  }

  obtenerMensajes = async () => {
    let url = configApp.urlApi + 'mensajes-usuario/' + objAut.getIdUsuario();

    fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': objAut.getToken()
        }
    })

    .then((response) => response.json())
    .then((responseJson) => {

      if(responseJson.mensajesResp === undefined){
        Alert.alert(responseJson.mensaje);
      }
      else{
        alert(responseJson.mensajesResp)
        this.setState({mensajes: responseJson.mensajesResp});
      }
    })
    .catch((error) => {
      console.error(error);
    });
  };

  render(){
    return (
      <View style={estilos.contenedor}>
        <View>
          <TouchableOpacity style={estilos.contenedorBoton}>
            <Text style={estilos.textoBoton}>ENVIAR SOLICITUD</Text>
          </TouchableOpacity>
        </View>
        <View style={estilos.contenedorLista}>
          <ScrollView style={estilos.scrollLista}>
          <FlatList
            data={this.state.mensajes}
            renderItem={({item}) => (
              <TouchableNativeFeedback>
                <View style={estilos.itemLista}>
                  <View style={estilos.itemListaTexto}>
                    <Text style={estilos.itemListaTextoTitulo}>
                      {item.mensaje}
                    </Text>
                  </View>
                </View>
              </TouchableNativeFeedback>
            )}
            keyExtractor = { item  =>  item._id }
          />
          </ScrollView>
        </View>
      </View>
    );
  }
};

export default Mensaje;
