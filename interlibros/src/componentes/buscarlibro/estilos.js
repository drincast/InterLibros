import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
  contenedor: {
    backgroundColor: '#305172',
    padding: 10,
    paddingTop: 20,
  },
  contenedorBoton:{
      backgroundColor: '#2980b6',
      paddingVertical: 15
  },
  contenedorBusqueda: {
    backgroundColor: '#305172',
    paddingBottom: 10
  },
  contenedorLista: {
    backgroundColor: '#305172'
  },
  input:{
      height: 45,
      backgroundColor: 'rgba(225,225,225,0.2)',
      marginBottom: 10,
      padding: 10,
      color: '#fff'
  },
  imagen:{
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    height: 50,
    width: 50
  },
  itemLista:{
    borderBottomWidth: 1,
  },
  lista:{
    flex:1
  },
  textoBoton:{
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700'
  },
  tituloBusqueda:{
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 15,
    textAlign: "center"
  }
});
