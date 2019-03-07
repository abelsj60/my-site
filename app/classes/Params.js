import Content from './Content.js';
import normalize from '../helpers/normalize.js';

export default class Params {
  constructor(type, params, paramNames) {
    // Array.isArray() ensures nothing breaks when
    // Params() is called by location._loadParams
    // (params are an object at this time)
    this._paramNames = Array.isArray(paramNames)
      ? paramNames
      : [];
    this._one = params[this._paramNames[0]];
    this._two = params[this._paramNames[1]];
    this._expectedNumber = this._paramNames.length;
    this._actualNumber = this._paramNames.filter(
      p => params[p] !== undefined
    ).length;

    this.type = type;
    this.areUndefined = this._paramNames.filter(
      p => params[p] === undefined
    );
    this.originalData = params;
  }

  get _searchData() {
    const content = new Content(this.type);
    return content.getContentData();
  }

  _normalizeParam(param) {
    return normalize(param);
  }

  _validateParam(param, paramName, paramType) {
    if (!param) return false;

    const searchData = this._searchData;
    let paramIsValid;

    switch (paramType) {
      case 'text':
        const paramTestResults = searchData.filter(
          d => {
            const valueFromData = this._normalizeParam(
              d.attributes[paramName]
            );
            const paramToTest = this._normalizeParam(param);
            return valueFromData === paramToTest;
          }
        );
        paramIsValid = paramTestResults.length > 0;
        break;
      case 'number':
        if (!parseInt(param)) {
          paramIsValid = false;
          break;
        }

        const paramToTestConvertedToIndex = parseInt(param) - 1;
        paramIsValid =
          paramToTestConvertedToIndex >= 0
          && paramToTestConvertedToIndex <
            searchData[0].attributes[paramName].length;
        break;
      default:
        paramIsValid = false;
        break;
    }

    // Return original to avoid problems
    // with falsy should index bes 0
    return paramIsValid && param;
  }

  _toIndex(paramName) {
    if (this[paramName]) {
      const isNumber = parseInt(this[paramName]);

      if (!isNumber) {
        return this._searchData.findIndex(
          d => {
            const normalizedName =
              this._normalizeParam(
                d.attributes[paramName]
              );
            return normalizedName === this[paramName];
          }
        );
      } else if (isNumber) {
        return this[paramName] - 1;
      }
    }

    return -1;
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
    return this._expectedNumber === this._actualNumber;
  }

  get isMenu() {
    return this._one === 'menu';
  }
}
