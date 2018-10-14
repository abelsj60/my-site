function normalize(value) {
  return value
    .replace(/\s+/g, '-')
    .replace(/\./g, '')
    .replace(/'+/g, '')
    .replace(/,+/g, '')
    .replace(/:/g, '')
    .replace(/\//g, '-')
    .toLowerCase();
}

module.exports = {
  normalize
};
