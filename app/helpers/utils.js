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

function formatProjectName(name) {
  if (name === 'tmmnews') {
    return name.slice(0, 3).toUpperCase() + name.slice(3);
  } else {
    return name.slice(0, 1).toUpperCase() + name.slice(1);
  }
}

module.exports = {
  normalize,
  getPath,
  formatProjectName
};
