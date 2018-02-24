import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
  contenedor: {
    backgroundColor: '#305172',
    flex: 1,
    padding: 10,
    paddingTop: 20
  },
  contenedorBoton:{
      backgroundColor: '#2980b6',
      paddingVertical: 15
  },
  contenedorDatos: {
    backgroundColor: '#305172',
    flex: 2
  },
  contenedorLogo: {
    alignItems: 'center',
    flex: 1.5
  },
  input:{
      backgroundColor: 'rgba(225,225,225,0.2)',
      color: '#fff',
      height: 45,
      marginBottom: 10,
      padding: 10,
  },
  imagenLogo:{
    flexGrow:1,
    height:null,
    width:null,
    alignItems: 'center',
    justifyContent:'center',
  },
  logo:{
    position: 'absolute'
  },
  textoBoton:{
      color: '#fff',
      fontWeight: '700',
      textAlign: 'center',
  },
  tituloLogo:{
    fontFamily: "Roboto",
    fontSize: 20,
  },
});
