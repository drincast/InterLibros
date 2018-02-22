import React, { Component } from 'react';
import { ActivityIndicator, Alert, Button, Image, ListView
         , ScrollView, StatusBar, Text, TextInput
         , TouchableOpacity, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { estilos } from './estilos';
import AutSinglenton from '../../aut/autsinglenton';

var objAut = AutSinglenton.getInstancia();

class Login extends Component {
  static navigationOptions = {
    title: 'Login',
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      password: '',
      logeado: false
    }
  }

  // componentDidMount() {
  //   return fetch('https://facebook.github.io/react-native/movies.json')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  //       this.setState({
  //         isLoading: false,
  //         dataSource: ds.cloneWithRows(responseJson.movies),
  //       }, function() {
  //         // do something with new state
  //       });
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  iniciarLogin = async () => {
    console.log(this.state.usuario);

    fetch('http://10.0.75.1:1234/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usuario: this.state.usuario,
          password: this.state.password,
          token: "true"
        })
    })

    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.token === undefined){
        this.setState({usuario: ''});
        this.setState({password: ''});
        this.setState({logeado: false});
        Alert.alert(responseJson.mensaje);
      }
      else{
        this.setState({usuario: ''});
        this.setState({password: ''});
        this.setState({logeado: true});
        objAut.setToken(responseJson.token);
        //Alert.alert(objAut.getToken());
        this.props.navigation.navigate('BuscarLibro');
      }
    })
    .catch((error) => {
      this.setState({logeado: false})
      console.error(error);
    });
  };

  render(){
    return (
      <View style={estilos.contenedor}>
        <View style={estilos.contenedorLogo}>
          <Image resizeMode="contain" source={require('./img/logo.gif')} />
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
