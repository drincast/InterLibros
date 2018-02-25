/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import AutSinglenton from './utils/aut/autsinglenton';
import {Router} from './utils/Router'
//iniciamos clase singlenton, info global
var objAut = AutSinglenton.getInstancia();

export default class App extends Component {
  render() {
    return (
      <Router />
    );
  }
}
