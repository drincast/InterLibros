import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 10
  },
  contenedorLogo: {
    flex: 3
  },
  contenedorDatos: {
    flex: 2
  },
  input:{
      height: 45,
      backgroundColor: 'rgba(225,225,225,0.2)',
      marginBottom: 10,
      padding: 10,
      color: '#fff'
  },
  contenedorBoton:{
      backgroundColor: '#2980b6',
      paddingVertical: 20
  },
  textoBoton:{
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700'
  },
  loginButton:{
    backgroundColor:  '#2980b6',
     color: '#fff'
  }
});