const configTema = require('../../utils/configtema');

export default {
  contenedor: {
    backgroundColor: configTema.colorFondo,
    flex: 1
  },
  contenedorBoton: {
    backgroundColor: configTema.colorFondoBoton,
    paddingVertical: 15
  },
  contenedorDatos: {
    backgroundColor: configTema.colorFondo,
    flex: 2
  },
  contenedorLogo: {
    alignItems: 'center',
    flex: 1.5
  },
  input: {
    backgroundColor: configTema.colorFondoInput,
    color: configTema.colorTextoTitulo,
    height: 45,
    marginBottom: 10,
    padding: 10,
  },
  imagenLogo: {
    flexGrow: 1,
    height: 280,
    width: 280,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute'
  },
  textoBoton: {
    color: configTema.colorTextoTitulo,
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
  },
  tituloLogo: {
    color: '#51708D',
    fontFamily: "sans-serif-condensed",
    fontSize: 55,
    fontWeight: "200"
  },
};