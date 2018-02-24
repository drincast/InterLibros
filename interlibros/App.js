/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Alert, Platform,
         StyleSheet, Text,
         View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import AutSinglenton from './src/aut/autsinglenton';
import Login from './src/componentes/login/login';
import BuscarLibro from './src/componentes/buscarlibro/buscarlibro';
import DetalleLibro from './src/componentes/detallelibro/detallelibro';

//iniciamos clase singlenton, info global
var objAut = AutSinglenton.getInstancia();

const NavegacionRaiz = StackNavigator(
  {
    Login: {
      screen: Login,
    },
    BuscarLibro: {
      screen: BuscarLibro,
    },
    DetalleLibro: {
      screen: DetalleLibro,
    },
  },
  {
    initialRouteName: 'Login',
  });

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <NavegacionRaiz />
    );
  }
}

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
