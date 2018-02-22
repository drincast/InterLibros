import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
  contenedor: {
    backgroundColor: '#305172',
    flex: 1,
    padding: 10,
    paddingTop: 20
  },
  contenedorLogo: {
    alignItems: 'center',
    flex: 1.5
  },
  contenedorDatos: {
    backgroundColor: '#305172',
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
      paddingVertical: 15
  },
  textoBoton:{
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700'
  },
  logo:{
    position: 'absolute'
  }
});
