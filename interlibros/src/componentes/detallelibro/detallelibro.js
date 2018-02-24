import React, { Component } from 'react';
import { ActivityIndicator, Alert, Button, FlatList
         , Image, Keyboard, ListView
         , ScrollView, StatusBar, Text, TextInput
         , TouchableOpacity, View } from 'react-native';

import { estilos } from './estilos';
import AutSinglenton from '../../aut/autsinglenton';

const configApp = require('../../configapp');
let objAut = AutSinglenton.getInstancia();

class DetalleLibro extends Component {
  static navigationOptions = {
    title: 'Detalle Libros',
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      token: objAut.getToken(),
      idLibro: this.props.navigation.state.params.idLibro,
      libro: undefined
    }
  }

  componentDidMount() {
    this.obtenerDatosLibro();
  }

  obtenerDatosLibro = async () => {
    let url = configApp.urlApi + 'obtener-libro/' + this.props.navigation.state.params.idLibro;

     fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': objAut.getToken()
        }
    })

    .then((response) => response.json())
    .then((responseJson) => {

      if(responseJson.libroResp === undefined){
        Alert.alert(responseJson.mensaje);
      }
      else{
        this.setState({
          libro: responseJson.libroResp[0],
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
  };

  enviarMensaje = async () => {
    let url = configApp.urlApi + 'enviar-mensaje';

     fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idUsuario: this.props.navigation.state.params.idUsuario,
          idUsuarioEnvia: objAut.getIdUsuario(),
          mensaje: configApp.msjSolicitud,
          tipo: "Solicitud"
        })
    })

    .then((response) => response.json())
    .then((responseJson) => {

      if(responseJson.libroResp === undefined){
        Alert.alert(responseJson.mensaje);
      }
      else{
        this.setState({
          libro: responseJson.libroResp[0],
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render(){
    const {libro} = this.state;
    alert(JSON.stringify(this.props.navigation.state.params.idUsuario));
    return (
      <View style={estilos.contenedor}>
        {
          libro != undefined ?
            <View>
              <Image source={{uri: libro.urlImagen}} style={{width:50, height: 50}}></Image>
              <Text>{libro.titulo}</Text>
              <Text>{libro.autor}</Text>
              <Text>{libro.descripcion}</Text>

              <TouchableOpacity onPress={this.enviarMensaje.bind(this)}
                                style={estilos.contenedorBoton}>
                 <Text style={estilos.textoBoton}>ENVIAR SOLICITUD</Text>
              </TouchableOpacity>
            </View>

          :null

        }
      </View>
    );
  }
};

export default DetalleLibro;
