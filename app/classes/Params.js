import Content from './Content.js';
import normalize from '../helpers/normalize.js';

export default class Params {
  constructor(type, params, paramNames) {
    // Array.isArray() ensures nothing breaks when
    // Params() is called by location._loadParams
    // (super's not called, so the {} is empty)
    this._type = type;
    this._paramNames = Array.isArray(paramNames)
      ? paramNames
      : [];
    this._one = params[this._paramNames[0]];
    this._two = params[this._paramNames[1]];
    this._expectedNumber = this._paramNames.length;
    this._validatedNumber =
      this._paramNames.filter(
        // Check this to assess their validity;
        // invalid params come back false
        p => this[p] !== false
      ).length;

    this.oneIsValid =
      this[this._paramNames[0]] !== false;
    this.twoIsValid =
      this[this._paramNames[1]] !== false;
    this.areUndefined =
      this._paramNames.filter(
        // Check params, not 'this' b/c this[param]
        // is defined by a call to matchPath(); we
        // want to tet the real-true original URL.
        p => params[p] === undefined
      );
    this.originalData = params;
  }

  get _searchData() {
    const content = new Content(this._type);
    return content.getContentData();
  }

  _normalizeParam(param) {
    return normalize(param);
  }

  _validateParam(param, paramName) {
    // This function has to stand on its own in
    // order to avoid an infinit loop. Remember,
    // any call to this[param] runs through this
    // method (validate), including ._toIndex()

    if (!param) return false;

    const searchData = this._searchData;
    let paramIsValid;

    switch (typeof param) {
      case 'string':
        const paramTestResults = searchData.filter(
          d => {
            const valueFromData = this._normalizeParam(
              d.attributes[paramName]
            );
            const paramToTest = this._normalizeParam(
              param
            );
            return valueFromData === paramToTest;
          }
        );
        paramIsValid = paramTestResults.length > 0;
        break;
      case 'number':
        const paramAsIndex = parseInt(param) - 1;
        paramIsValid =
          paramAsIndex >= 0
          && paramAsIndex <
            searchData[0].attributes[
              paramName
            ].length;
        break;
      default:
        paramIsValid = false;
        break;
    }

    // Return original to avoid problems
    // with falsy should index be 0
    return paramIsValid && param;
  }

  _toIndex(paramName) {
    // The next two rely on ._validateParam(). As a,
    // result, it can't be used in ._validateParam()
    // to avoid an infinite loop.

    if (!this[paramName]) return -1;

    // this[paramName] access convenience methods
    // on each subclass, e.g., .projectThumbnail
    // or .headline. parseInt() is run whenever
    // the param corresponds to a number.

    const param = this[paramName];

    switch (typeof param) {
      case 'string':
        return this._searchData.findIndex(
          d => {
            const normalizedData =
              this._normalizeParam(
                d.attributes[paramName]
              );
            return normalizedData === param;
          }
        );
      case 'number':
        return parseInt(param) - 1;
      default:
        return;
    }
  }

  _oneToIndex() {
    if (this._paramNames.length < 1) return -1;
    return this._toIndex(this._paramNames[0]);
  }

  _twoToIndex() {
    if (this._paramNames.length < 2) return -1;
    return this._toIndex(this._paramNames[1]);
  }

  get hasExpectedNumber() {
    return this._expectedNumber === this._validatedNumber;
  }

  get isMenu() {
    return this._one === 'menu';
  }
}
