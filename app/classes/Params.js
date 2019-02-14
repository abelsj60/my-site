import Content from './Content.js';
import normalize from '../helpers/normalize.js';

export default class Params {
  constructor(type, params) {
    this._paramKeys = Object.keys(params);

    this._one = params[this._paramKeys[0]];
    this._two = params[this._paramKeys[1]];
    this._expectedNumber = this._paramKeys.length;
    this._originalData = params;

    this.type = type;
    this.paramNames = ['fakeData', 'fakeData'];
    this.undefined = this._paramKeys.filter(p => {
      return params[p] === undefined;
    });
  }

  get _searchData() {
    const c = new Content(this.type);
    return c.getContentData();
  }

  _normalizeParam(param) {
    return normalize(param);
  }

  get hasExpectedNumber() {
    return this._expectedNumber === this._actualNumber;
  }

  get isMenu() {
    return this._one === 'menu';
  }

  validateParam(param, paramName, paramType) {
    if (!param) return false;

    const searchData = this._searchData;
    let paramIsValid;

    switch (paramType) {
      case 'text':
        const paramTestResults = searchData.filter(d => {
          const valueFromData = this._normalizeParam(d.attributes[paramName]);
          const paramToTest = this._normalizeParam(param);

          return valueFromData === paramToTest;
        });

        paramIsValid = paramTestResults.length > 0;
        break;
      case 'number':
        if (!parseInt(param)) return false;

        const paramToTestConvertedToIndex = parseInt(param) - 1;

        paramIsValid =
          paramToTestConvertedToIndex >= 0 &&
          paramToTestConvertedToIndex <
            searchData[0].attributes[paramName].length;
        break;
    }

    /** Returns original, so no falsy problems when index is 0) */

    if (!paramIsValid) {
      /** NOTE: this._actualNumber tests against FALSE */

      return false;
    }

    return param;
  }

  toIndex(paramName) {
    if (this[paramName]) {
      const isNumber = parseInt(this[paramName]);

      if (!isNumber) {
        return this._searchData.findIndex(d => {
          const normalizedName = this._normalizeParam(d.attributes[paramName]);
          return normalizedName === this[paramName];
        });
      } else if (isNumber) {
        return this[paramName] - 1;
      }
    }

    return -1;
  }

  oneToIndex() {
    if (this.paramNames[0] === 'fakeData') {
      return -1;
    }

    // if (this.paramNames[0] === 'chapter') {
    //   return 0;
    // }

    return this.toIndex(this.paramNames[0]);
  }

  twoToIndex() {
    if (this.paramNames[1] === 'fakeData') {
      return -1;
    }

    return this.toIndex(this.paramNames[1]);
  }
}
