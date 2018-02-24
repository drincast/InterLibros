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
    let usuarioEnvia = 'El usuario ' + objAut.getUsuario() + " te envío un mensaje ... \n\n";

     fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idUsuario: this.props.navigation.state.params.idUsuario,
          idUsuarioEnvia: objAut.getIdUsuario(),
          mensaje: usuarioEnvia + configApp.msjSolicitud,
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
    return (
      <View style={estilos.contenedor}>
        {
          libro != undefined ?
            <View style={estilos.contenedor}>
              <View style={estilos.contenedorImagen}>
                <Image source={{uri: libro.urlImagen}}
                  style={estilos.imagenLibro}></Image>
               </View>
               <View style={estilos.contenedorInfo}>
                 <View style={estilos.contenedorTitulos}>
                   <Text style={estilos.titulo}>{libro.titulo}</Text>
                   <Text style={estilos.autor}>{libro.autor}</Text>
                 </View>
                 <ScrollView style={estilos.contenedorDescripcion}>
                   <Text style={estilos.descripcion}>{libro.descripcion}</Text>
                 </ScrollView>
                 <View style={estilos.contenedorBtn}>
                   <TouchableOpacity onPress={this.enviarMensaje.bind(this)}
                                     style={estilos.contenedorBoton}>
                      <Text style={estilos.textoBoton}>ENVIAR SOLICITUD</Text>
                   </TouchableOpacity>
                 </View>
               </View>
            </View>

          :null

        }
      </View>
    );
  }
};

export default DetalleLibro;
