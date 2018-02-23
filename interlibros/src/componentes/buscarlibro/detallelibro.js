import React, { Component } from 'react';
import { ActivityIndicator, Alert, Button, FlatList
         , Image, Keyboard, ListView
         , ScrollView, StatusBar, Text, TextInput
         , TouchableOpacity, View } from 'react-native';

import { estilos } from './estilos';
import AutSinglenton from '../../aut/autsinglenton';

const configApp = require('../../configapp');
var objAut = AutSinglenton.getInstancia();

class DetalleLibro extends Component {
  static navigationOptions = {
    title: 'Detalle Libros',
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      token: objAut.getToken(),
      idLibro: '5a8f64de7ebc2447c8fa951d',
      libro: undefined
    }
  }

  componentWillMount() {
    this.obtenerDatosLibro();
  }

  obtenerDatosLibro = async () => {
    //let url = configApp.urlApi + 'obtener-libro/' + this.state.idLibro;
    let url = configApp.urlApi + 'obtener-libro/' + '5a8f64de7ebc2447c8fa951d';

     fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
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
        //this.props.navigation.navigate('BuscarLibro');
      }
    })
    .catch((error) => {
      console.error(error);
    });
  };


  enviarMensaje = async () => {
    //let url = configApp.urlApi + 'obtener-libro/' + this.state.idLibro;
    let url = configApp.urlApi + 'enviar-mensaje';

     fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idUsuario: '5a8b9aa38365314d7083af2a',
          idUsuarioEnvia: '5a8b9aa38365314d7083af2a',
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
        //this.props.navigation.navigate('BuscarLibro');
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render(){
    const {libro} = this.state;
    alert(JSON.stringify(this.props.navigation.state.params));
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
