export default class Normalize {
  constructor(text) {
    this.done = this._run(text);
  }

  _run(text) {
    return text
      .replace(/\s+/g, '-')
      .replace(/\./g, '')
      .replace(/'+/g, '')
      .replace(/,+/g, '')
      .replace(/:/g, '')
      .replace(/\//g, '-')
      .replace(/\?/g, '')
      .toLowerCase();
  }
}
