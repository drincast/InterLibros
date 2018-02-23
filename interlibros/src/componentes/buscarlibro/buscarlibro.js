import React, { Component } from 'react';
import { ActivityIndicator, Alert, Button, FlatList
         , Image, Keyboard, ListView
         , ScrollView, StatusBar, Text, TextInput
         , TouchableOpacity, View } from 'react-native';
//import { List, ListItem, SearchBar } from "react-native-elements";
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
        //Alert.alert(responseJson.librosResp[0].titulo);
        this.setState({datos: responseJson.librosResp});
        Keyboard.dismiss();
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

          <TouchableOpacity onPress={this.iniciarBusqueda.bind(this)}
                            style={estilos.contenedorBoton}>
          <Text style={estilos.textoBoton}>BUSCAR</Text>
          </TouchableOpacity>
        </View>
        <View style={estilos.contenedorLista}>
          <ScrollView style={{height:300}}>
          <FlatList
            data={this.state.datos}
            renderItem={({item}) => (
              <View style={estilos.itemLista}>
                <Image style={estilos.imagen} source={{uri: item.urlImagen}} />
                <Text>{item.titulo}</Text>
                <Text>{item.autor}</Text>
              </View>
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


// <FlatList
//   data={this.state.datos}
//   renderItem={({item}) => (
//     <ListItem
//       roundAvatar
//       title={item.titulo}
//       subtitle={item.autor}
//       avatar={{ uri: item.urlImagen }}
//       containerStyle={{ borderBottomWidth: 1 }}
//     />
//   )}
//   keyExtractor = { item  =>  item.titulo }
// />
