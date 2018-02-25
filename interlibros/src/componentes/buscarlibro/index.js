import React, { Component } from 'react';
import {
  ActivityIndicator, Alert, Button, FlatList
  , Image, Keyboard, ListView
  , ScrollView, StatusBar, Text, TextInput
  , TouchableOpacity, TouchableNativeFeedback, View
} from 'react-native';

import Mensaje from '../mensaje';
import styles from './style';
import AutSinglenton from '../../utils/aut/autsinglenton';

const configApp = require('../../utils/configapp');
let objAut = AutSinglenton.getInstancia();

class BuscarLibro extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerRight: (
        <TouchableOpacity
          onPress={params._irAMensaje}
        >
          <Text>Ver Mensajes</Text>
        </TouchableOpacity>
      ),
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({ _irAMensaje: this.irAMensajes });
  }

  constructor(props) {
    super(props);
    this.state = {
      token: objAut.getToken(),
      datos: [],
      titulo: 'libro'
    }
  }

  iniciarBusquedaLibros = async () => {
    let url = configApp.urlApi + 'obtener-libros-titulo/' + this.state.titulo;

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': objAut.getToken()
      }
    })

      .then((response) => response.json())
      .then((responseJson) => {

        if (responseJson.librosResp === undefined) {
          Alert.alert(responseJson.mensaje);
        }
        else {
          this.setState({ datos: responseJson.librosResp });
          Keyboard.dismiss();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  detalleLibro = (idUsuario, idLibro) => {
    this.props.navigation.navigate('DetalleLibro', { idUsuario: idUsuario, idLibro: idLibro });
  }

  irAMensajes = () => {
    this.props.navigation.navigate('Mensaje');
  }

  render() {
    return (
      <View style={styles.contenedor}>
        <View style={styles.contenedorBusqueda}>
          <Text style={styles.tituloBusqueda}>ENCUENTRA TU LIBRO</Text>
          <TextInput autoCapitalize="none"
            onChangeText={(titulo) => this.setState({ titulo })}
            placeholder='Buscar'
            placeholderTextColor='rgba(225,225,225,0.7)'
            ref={component => this._titulo = component}
            returnKeyType="go"
            style={styles.input}>
          </TextInput>

          <TouchableOpacity onPress={this.iniciarBusquedaLibros.bind(this)}
            style={styles.contenedorBoton}>
            <Text style={styles.textoBoton}>BUSCAR</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contenedorLista}>
          <ScrollView style={styles.scrollLista}>
            <FlatList
              data={this.state.datos}
              renderItem={({ item }) => (
                <TouchableNativeFeedback onPress={this.detalleLibro.bind(this, item.idUsuario, item._id)}>
                  <View style={styles.itemLista}>
                    <View style={styles.itemListaAvatar}>
                      <Image style={styles.itemListaAvatarImagen} source={{ uri: item.urlImagen }} />
                    </View>
                    <View style={styles.itemListaTexto}>
                      <Text style={styles.itemListaTextoTitulo}>
                        {item.titulo}
                      </Text>
                      <Text style={styles.itemListaTextoAutor}>
                        {item.autor}
                      </Text>
                    </View>
                    <View style={styles.itemListaIr}>
                      <Text style={styles.itemListaIrIr}>
                        >>
                    </Text>
                    </View>
                  </View>
                </TouchableNativeFeedback>
              )}
              keyExtractor={item => item.titulo}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
};

export default BuscarLibro;
