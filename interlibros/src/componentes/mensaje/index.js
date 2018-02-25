import React, { Component } from 'react';
import { Alert, Button, FlatList
         , Image, Keyboard, ListView
         , ScrollView, StatusBar, Text, TextInput
         , TouchableOpacity, TouchableNativeFeedback, View } from 'react-native';

import styles from './style';
import AutSinglenton from '../../utils/aut/autsinglenton';

const configApp = require('../../utils/configapp');
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
        this.setState({mensajes: responseJson.mensajesResp});
      }
    })
    .catch((error) => {
      console.error(error);
    });
  };

  render(){
    return (
      <View style={styles.contenedor}>
        <View style={styles.contenedorLista}>
          <ScrollView style={styles.scrollLista}>
          <FlatList
            data={this.state.mensajes}
            renderItem={({item}) => (
              <TouchableNativeFeedback>
                <View style={styles.itemLista}>
                  <View style={styles.itemListaTexto}>
                    <Text style={styles.itemListaTextoTitulo}>
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
