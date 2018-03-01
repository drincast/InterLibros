const configTema = require('../../utils/configtema');

export default {
  autor:{
    color: configTema.colorTextoSubTitulo,
    fontSize: 25,
    fontWeight: 'bold',
  },
  contenedor: {
    backgroundColor: configTema.colorFondo,
    flex: 1,
    padding: 10,
    paddingTop: 20,
  },
  contenedorBoton:{
      backgroundColor: configTema.colorFondoBoton,
      paddingVertical: 15
  },
  contenedorBtn: {
    flex: 0.5,
    marginTop: 20
  },
  contenedorDescripcion: {
    flex: 2,
  },
  contenedorInfo: {
    flex: 3,
  },
  contenedorImagen: {
    alignItems: 'center',
    flex: 2,
    justifyContent: 'center',
  },
  contenedorLista: {
    backgroundColor: configTema.colorFondo
  },
  contenedorTitulos: {
    flex: 0.7,
  },
  descripcion: {
    color: configTema.colorTextoTitulo,
    fontSize: 15
  },

  input:{
      height: 45,
      backgroundColor: configTema.colorFondoInput,
      marginBottom: 10,
      padding: 10,
      color: configTema.colorTextoTitulo
  },
  imagenLibro:{
    borderRadius: 30,
    borderWidth: 1,
    borderColor: configTema.colorTextoTitulo,
    height: 200,
    width: 200
  },
  itemLista:{
    borderBottomWidth: 1,
  },
  lista:{
    flex:1
  },
  textoBoton:{
      color: configTema.colorTextoTitulo,
      textAlign: 'center',
      fontWeight: '700'
  },
  titulo:{
    color: configTema.colorTextoTitulo,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center'
  }
}
