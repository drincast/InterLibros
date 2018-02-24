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
import Mensaje from './src/componentes/mensaje/mensaje';

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
    Mensaje: {
      screen:Mensaje,
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
