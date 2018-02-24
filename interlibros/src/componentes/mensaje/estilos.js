import { StyleSheet } from "react-native";
const configTema = require('../../configtema');

export const estilos = StyleSheet.create({
  contenedor: {
    backgroundColor: configTema.colorFondo,
    flex:1,
    padding: 10,
    paddingTop: 20,
  },
  contenedorLista: {
    backgroundColor: configTema.colorFondo
  },
  itemLista:{
    backgroundColor: '#c1d2e2',
    borderBottomWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 10,
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    paddingLeft: 5,
  },
  itemListaTexto:{
    flexGrow: 6
  },
  itemListaTextoAutor:{
    color: configTema.colorTextoSubTitulo,
    fontSize: 15
  },
  itemListaTextoTitulo:{
    color: "#002A50", //configTema.colorTextoTitulo,
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
    height: 400
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
