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

function splitPath(props) {
  return getPath(props).split('/');
}

function formatProjectName(name) {
  if (name === 'tmmnews') {
    return name.slice(0, 3).toUpperCase() + name.slice(3);
  } else {
    return name.slice(0, 1).toUpperCase() + name.slice(1);
  }
}

function validateParam(propertyName, siteData, urlParam) {
  // ~ja Usage: validateParam('title', story, chapterTitle)

  if (urlParam === 'menu') return 0;

  if (Array.isArray(siteData)) {
    const isNumber = parseInt(urlParam);

    if (!isNumber) {
      return siteData.findIndex(d => {
        // console.log('In validate:', propertyName);

        return normalize(d.attributes[propertyName]) === normalize(urlParam);
      });
    } else {
      const urlParamConvertedToIndex = isNumber && parseInt(urlParam) - 1;

      return urlParamConvertedToIndex >= 0 &&
        urlParamConvertedToIndex < siteData[0].attributes[propertyName].length
        ? urlParamConvertedToIndex
        : -1;
    }
  } else {
    throw 'Data must be an array';
  }
}

module.exports = {
  normalize,
  getPath,
  splitPath,
  validateParam,
  formatProjectName
};
