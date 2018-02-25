import React, { Component } from 'react';
import { ActivityIndicator, Alert, Button, FlatList
         , Image, Keyboard, ListView
         , ScrollView, StatusBar, Text, TextInput
         , TouchableOpacity, View } from 'react-native';

import styles from './style';
import AutSinglenton from '../../utils/aut/autsinglenton';

const configApp = require('../../utils/configapp');
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
      <View style={styles.contenedor}>
        {
          libro != undefined ?
            <View style={styles.contenedor}>
              <View style={styles.contenedorImagen}>
                <Image source={{uri: libro.urlImagen}}
                  style={styles.imagenLibro}></Image>
               </View>
               <View style={styles.contenedorInfo}>
                 <View style={styles.contenedorTitulos}>
                   <Text style={styles.titulo}>{libro.titulo}</Text>
                   <Text style={styles.autor}>{libro.autor}</Text>
                 </View>
                 <ScrollView style={styles.contenedorDescripcion}>
                   <Text style={styles.descripcion}>{libro.descripcion}</Text>
                 </ScrollView>
                 <View style={styles.contenedorBtn}>
                   <TouchableOpacity onPress={this.enviarMensaje.bind(this)}
                                     style={styles.contenedorBoton}>
                      <Text style={styles.textoBoton}>ENVIAR SOLICITUD</Text>
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
