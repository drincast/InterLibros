import React, { Component } from 'react';
import { ActivityIndicator, Alert, Button, FlatList
         , List, ListItem, Image, ListView
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
      token: objAut.getToken(),
      datos: [],
      titulo: 'libro'
    }
  }

  // componentDidMount() {
  //   this.iniciarBusqueda();
  // }


  iniciarBusqueda = async () => {
    let url = 'http://192.168.0.28:1234/api/obtener-libros-titulo/' + this.state.titulo;

    fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
    })

    .then((response) => response.json())
    .then((responseJson) => {

      if(responseJson.librosResp === undefined){
        Alert.alert(responseJson.mensaje);
      }
      else{
        Alert.alert(responseJson.librosResp[0].titulo);
        this.setState({datos: responseJson.librosResp});
        //Alert.alert('hola');
        //this.props.navigation.navigate('BuscarLibro');
      }
    })
    .catch((error) => {
      console.error(error);
    });
  };


  render(){
    return (
      <View style={estilos.contenedor}>
        <View style={estilos.contenedorDatos}>
          <Text>Buscar tu libro por título</Text>
          <TextInput autoCapitalize="none"
                     onChangeText = {(titulo) => this.setState({titulo})}
                     placeholder='Buscar'
                     placeholderTextColor='rgba(225,225,225,0.7)'
                     ref={component => this._titulo = component}
                     returnKeyType="next"
                     style={estilos.input}>
          </TextInput>

          <TouchableOpacity onPress={this.iniciarBusqueda.bind(this)}
                            style={estilos.contenedorBoton}>
          <Text style={estilos.textoBoton}>BUSCAR</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.state.datos}
          renderItem={({item}) => <Text>{item.titulo}</Text>}
          keyExtractor = { item  =>  item.titulo }
        />
        <Text>{objAut.getToken()}</Text>
      </View>
    );
  }
};

export default BuscarLibro;
