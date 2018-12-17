import projectData from '../data/projects/index.js';
import storyData from '../data/the-story/index.js';
import articleData from '../data/clips/index.js';

export default class Params {
  constructor(type, params) {
    this._paramKeys = Object.keys(params);
    this._one = params[this._paramKeys[0]];
    this._two = params[this._paramKeys[1]];
    this._expectedNumber = this._paramKeys.length;
    this._originalData = params;

    this.type = type;
    this.undefined = this._paramKeys.filter(p => {
      return params[p] === undefined;
    });
  }

  get _searchData() {
    switch (this.type) {
      case 'story':
        return storyData;
      case 'projects':
        return projectData;
      case 'journalism':
        return articleData;
      default:
        console.log('Params.validateParam: Keep calm, carry on');
        break;
    }
  }

  _normalizeParam(param) {
    return param
      .replace(/\s+/g, '-')
      .replace(/\./g, '')
      .replace(/'+/g, '')
      .replace(/,+/g, '')
      .replace(/:/g, '')
      .replace(/\//g, '-')
      .replace(/\?/g, '')
      .toLowerCase();
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
        const filterDataForParam = searchData.filter(d => {
          const data = this._normalizeParam(d.attributes[paramName]);
          const paramToTest = this._normalizeParam(param);

          return data === paramToTest;
        });

        paramIsValid = filterDataForParam.length > 0;

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

    if (paramIsValid) {
      /** Returns original, so no falsy problems w/index when 0) */
      return param;
    }

    return false;
  }

  toIndex(paramName) {
    if (paramName !== 'chapter' && this[paramName]) {
      const isNumber = parseInt(this[paramName]);

      if (!isNumber) {
        let paramIs;

        if (paramName === 'projectName') {
          paramIs = 'name';
        } else {
          paramIs = paramName;
        }

        return this._searchData.findIndex(d => {
          const normalizedName = this._normalizeParam(d.attributes[paramIs]);
          return normalizedName === this[paramName];
        });
      } else if (isNumber) {
        return this[paramName] - 1;
      }
    }

    // TODO If I return -1, an infinite loop runs when going to menu. Why?

    return;
  }
}
