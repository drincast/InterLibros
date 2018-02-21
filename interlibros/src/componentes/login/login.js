import React, { Component } from 'react';
import { ActivityIndicator, Button, Image, ListView, StatusBar, Text, TextInput,
         TouchableOpacity, View } from 'react-native';
import { estilos } from './estilos';


import { Alert } from 'react-native';
const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.movies),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // handlePress = async () => {
  //   fetch('http://localhost:1234/api/login', {
  //       method: 'POST',
  //       headers: {
  //         'Accept': 'application/x-www-form-urlencoded',
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //       body: JSON.stringify({
  //         usuario: "usuario01",
  //         password: "123456",
  //         token: "true"
  //       })
  //   })
  //
  //   .then((response) => response.json())
  //   .then((responseJson) => {
  //     Alert.alert("token: " + responseJson);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // };

  handlePress = async () => {
    fetch('http://localhost:1234/api/usuarios')
    .then((response) => response.json())
    .then((responseJson) => {
      Alert.alert("token: " + responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
  };

  render(){
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

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

          <TouchableOpacity onPress={this.handlePress.bind(this)}
                            style={estilos.contenedorBoton}>
            <Text style={estilos.textoBoton}>LOGIN</Text>
          </TouchableOpacity>

          <View>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>} />
          </View>

        </View>
      </View>
    );
  }
};

export default Login;
