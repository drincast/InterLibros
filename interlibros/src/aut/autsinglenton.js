
export default class AutSinglenton{
  static instanciaAut = null;

  _token: '';
  _idUsuario: '';

  static getInstancia(){
    if (this.instanciaAut == null){
      this.instanciaAut = new AutSinglenton();
    }

    return this.instanciaAut;
  }

  getToken(){
    return this._token;
  }

  setToken(val){
    this._token = val;
  }

  getIdUsuario(){
    return this._idUsuario;
  }

  setIdUsuario(val){
    this._idUsuario = val;
  }
}
