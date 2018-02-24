import React, { Component } from 'react';
import { Alert, ImageBackground
         , Text, TextInput
         , TouchableOpacity, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { estilos } from './estilos';
import AutSinglenton from '../../aut/autsinglenton';

const configApp = require('../../configapp');
let objAut = AutSinglenton.getInstancia();

class Login extends Component {
  static navigationOptions = {
    title: 'Login',
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      password: ''
    }
  }

  iniciarLogin = async () => {
    let url = configApp.urlApi + 'login';
    fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({
        //   usuario: this.state.usuario,
        //   password: this.state.password
        // })
        body: JSON.stringify({
          usuario: 'usuario02',
          password: '123456'
        })
    })

    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.token === undefined){
        this.setState({usuario: ''});
        this.setState({password: ''});
        Alert.alert(responseJson.mensaje);
      }
      else{
        this.setState({usuario: ''});
        this.setState({password: ''});
        objAut.setToken(responseJson.token);
        objAut.setIdUsuario(responseJson.idUsuario);
        objAut.setUsuario(responseJson.usuario);
        this.props.navigation.navigate('BuscarLibro');
      }
    })
    .catch((error) => {
      console.error(error);
    });
  };

  render(){
    return (
      <View style={estilos.contenedor}>
        <View style={estilos.contenedorLogo}>
          <ImageBackground resizeMode="contain" source={require('./img/logo.gif')}
                 style={estilos.imagenLogo}>
            <Text style={estilos.tituloLogo}>InterLibros</Text>
          </ImageBackground>
        </View>
        <View style={estilos.contenedorDatos}>
          <TextInput autoCapitalize="none"
                     onChangeText = {(usuario) => this.setState({usuario})}
                     placeholder='Usuario'
                     placeholderTextColor='rgba(225,225,225,0.7)'
                     ref={component => this._usuario = component}
                     returnKeyType="next"
                     style={estilos.input} />

          <TextInput autoCapitalize="none"
                     onChangeText = {(password) => this.setState({password})}
                     placeholder='Contraseña'
                     placeholderTextColor='rgba(225,225,225,0.7)'
                     returnKeyType="go"
                     secureTextEntry
                     style={estilos.input} />

          <TouchableOpacity onPress={this.iniciarLogin.bind(this)}
                            style={estilos.contenedorBoton}>
            <Text style={estilos.textoBoton}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default Login;
