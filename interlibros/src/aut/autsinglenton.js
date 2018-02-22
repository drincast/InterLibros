
export default class AutSinglenton{
  static instanciaAut = null;

  _token: '';

  static getInstancia(){
    if (this.instanciaAut == null){
      this.instanciaAut = new AutSinglenton();
    }

    return this.instanciaAut;
  }

  getToken(){
    return this._token;
  }

  setToken(tk){
    this._token = tk;
  }
}
