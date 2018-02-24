import React, { Component } from 'react';
import { ActivityIndicator, Alert, Button, FlatList
         , Image, Keyboard, ListView
         , ScrollView, StatusBar, Text, TextInput
         , TouchableOpacity, TouchableNativeFeedback, View } from 'react-native';
//import { List, ListItem, SearchBar } from "react-native-elements";
import { estilos } from './estilos';
import AutSinglenton from '../../aut/autsinglenton';

const configApp = require('../../configapp');
let objAut = AutSinglenton.getInstancia();

class BuscarLibro extends Component {

  static navigationOptions = {
    title: 'Buscar Libros',
    header: null
  };

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
    alert(url);

    fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': objAut.getToken()
        }
    })

    .then((response) => response.json())
    .then((responseJson) => {

      if(responseJson.librosResp === undefined){
        Alert.alert(responseJson.mensaje);
      }
      else{
        this.setState({datos: responseJson.librosResp});
        alert(JSON.stringify(responseJson.librosResp))
        Keyboard.dismiss();
      }
    })
    .catch((error) => {
      console.error(error);
    });
  };

  detalleLibro = (idUsuario, idLibro) => {
    this.props.navigation.navigate('DetalleLibro', {idUsuario: idUsuario, idLibro: idLibro});
  }

  render(){
    return (
      <View style={estilos.contenedor}>
        <View style={estilos.contenedorBusqueda}>
          <Text style={estilos.tituloBusqueda}>ENCUENTRA TU LIBRO</Text>
          <TextInput autoCapitalize="none"
                     onChangeText = {(titulo) => this.setState({titulo})}
                     placeholder='Buscar'
                     placeholderTextColor='rgba(225,225,225,0.7)'
                     ref={component => this._titulo = component}
                     returnKeyType="go"
                     style={estilos.input}>
          </TextInput>

          <TouchableOpacity onPress={this.iniciarBusquedaLibros.bind(this)}
                            style={estilos.contenedorBoton}>
          <Text style={estilos.textoBoton}>BUSCAR</Text>
          </TouchableOpacity>
        </View>
        <View style={estilos.contenedorLista}>
          <ScrollView style={estilos.scrollLista}>
          <FlatList
            data={this.state.datos}
            renderItem={({item}) => (
              <TouchableNativeFeedback onPress={this.detalleLibro.bind(this, item.idUsuario, item._id)}>
                <View style={estilos.itemLista}>
                  <View style={estilos.itemListaAvatar}>
                    <Image style={estilos.itemListaAvatarImagen} source={{uri: item.urlImagen}} />
                  </View>
                  <View style={estilos.itemListaTexto}>
                    <Text style={estilos.itemListaTextoTitulo}>
                      {item.titulo}
                    </Text>
                    <Text style={estilos.itemListaTextoAutor}>
                      {item.autor}
                    </Text>
                  </View>
                  <View style={estilos.itemListaIr}>
                    <Text style={estilos.itemListaIrIr}>
                      >>
                    </Text>
                  </View>
                </View>
              </TouchableNativeFeedback>
            )}
            keyExtractor = { item  =>  item.titulo }
          />
          </ScrollView>
        </View>
      </View>
    );
  }
};

export default BuscarLibro;
