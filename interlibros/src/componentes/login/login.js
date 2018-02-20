import React, { Component } from 'react';
import { Button, Image, StatusBar, Text, TextInput,
         TouchableOpacity, View } from 'react-native';
import { estilos } from './estilos';


import { Alert } from 'react-native';
const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

class Login extends Component {
  render(){
    return (
      <View style={estilos.contenedor}>
        <View style={estilos.contenedorLogo}>
          <Image source={require('./img/logo.gif')} />
        </View>
        <View style={estilos.contenedorDatos}>
          <TextInput autoCapitalize="none"
                     returnKeyType="next"
                     placeholder='Usuario'
                     placeholderTextColor='rgba(225,225,225,0.7)'
                     style={estilos.input}/>

          <TextInput autoCapitalize="none"
                     placeholder='Contraseña'
                     placeholderTextColor='rgba(225,225,225,0.7)'
                     returnKeyType="go"
                     secureTextEntry
                     style={estilos.input}/>

          <TouchableOpacity onPress={onButtonPress}
                            style={estilos.contenedorBoton}>
            <Text style={estilos.textoBoton}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default Login;
