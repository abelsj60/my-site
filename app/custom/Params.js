export default class Params {
  constructor(type, params) {
    this[type] = true;
    this.hasParams =
      Object.keys(params).filter(p => params[p] !== undefined).length > 0;
    this.paramBackup = params;
  }
}
