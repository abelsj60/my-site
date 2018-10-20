function normalize(value) {
  return value
    .replace(/\s+/g, '-')
    .replace(/\./g, '')
    .replace(/'+/g, '')
    .replace(/,+/g, '')
    .replace(/:/g, '')
    .replace(/\//g, '-')
    .replace(/\?/g, '')
    .toLowerCase();
}

function getPath(props) {
  return props.location.pathname.toLowerCase();
}

module.exports = {
  normalize,
  getPath
};
