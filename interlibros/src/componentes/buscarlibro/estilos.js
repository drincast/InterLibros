import { StyleSheet } from "react-native";
const configTema = require('../../configtema');

export const estilos = StyleSheet.create({
  contenedor: {
    backgroundColor: configTema.colorFondo,
    padding: 10,
    paddingTop: 20,
  },
  contenedorBoton:{
      backgroundColor: configTema.colorFondoBoton,
      paddingVertical: 15
  },
  contenedorBusqueda: {
    backgroundColor: configTema.colorFondo,
    paddingBottom: 10
  },
  contenedorLista: {
    backgroundColor: configTema.colorFondo
  },
  input:{
      height: 45,
      backgroundColor: configTema.colorFondoInput,
      marginBottom: 10,
      padding: 10,
      color: configTema.colorTextoTitulo
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
    borderColor: configTema.colorFondo,
    height: 60,
    width: 60
  },
  itemListaTexto:{
    flexGrow: 6
  },
  itemListaTextoAutor:{
    color: configTema.colorTextoSubTitulo,
    fontSize: 15
  },
  itemListaTextoTitulo:{
    color: configTema.colorTextoTitulo,
    fontSize: 20
  },
  itemListaIr:{
    alignSelf: 'center',
    flexGrow: 1
  },
  itemListaIrIr:{
    color: configTema.colorTextoTitulo,
    fontSize: 15
  },
  lista:{
    flex:1
  },
  scrollLista:{
    height: 320
  },
  textoBoton:{
      color: configTema.colorTextoTitulo,
      textAlign: 'center',
      fontWeight: '700'
  },
  tituloBusqueda:{
    color: configTema.colorTextoTitulo,
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 15,
    textAlign: "center"
  }
});
