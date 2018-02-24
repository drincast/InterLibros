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
  itemLista:{
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 10
  },
  itemListaAvatar:{
    flexGrow: 1,
  },
  itemListaAvatarImagen:{
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    height: 60,
    width: 60
  },
  itemListaTexto:{
    flexGrow: 6
  },
  itemListaTextoAutor:{
    color: '#999',
    fontSize: 15
  },
  itemListaTextoTitulo:{
    color: '#fff',
    fontSize: 20
  },
  itemListaIr:{
    alignSelf: 'center',
    flexGrow: 1
  },
  itemListaIrIr:{
    color: '#fff',
    fontSize: 15
  },
  lista:{
    flex:1
  },
  scrollLista:{
    height: 400
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
