import storyData from '../data/storyData.js';

function pickContent(num) {
  if (parseInt(num) === 1) {
    return storyData[0];
  } else if (parseInt(num) === 2) {
    return storyData[1];
  } else if (parseInt(num) === 3) {
    return storyData[2];
  } else {
    return storyData[3];
  }
}

function pickPicture(num) {
  if (parseInt(num) === 1) {
    return '/fantasy-scene-with-blue-dragon-treasure-chest-and-pile-of-golden-coins-d-illustration-707801968.jpg';
  } else if (parseInt(num) === 2) {
    return '/fantasy-scene-with-blue-dragon-treasure-chest-and-pile-of-golden-coins-d-illustration-707801968.jpg';
  } else if (parseInt(num) === 3) {
    return '/fantasy-scene-with-blue-dragon-treasure-chest-and-pile-of-golden-coins-d-illustration-707801968.jpg';
  } else {
    return '/fantasy-scene-with-blue-dragon-treasure-chest-and-pile-of-golden-coins-d-illustration-707801968.jpg';
  }
}

function idLinkPath(linkText) {
  const linkPath =
    linkText === 'Projects'
      ? '/projects'
      : linkText === 'The story'
        ? '/chapter'
        : '/journalism';
  return linkPath;
}

function setActiveLink(currentPath, linkText) {
  const linkPath = idLinkPath(linkText);
  return currentPath.includes(linkPath) ? 'active' : 'inactive';
}

function setHeaderCss(isTransparent) {
  return !isTransparent ? ' opaque' : '';
}

function setHeaderMenuCss(isOpen) {
  return isOpen ? ' header-menu-open' : '';
}

module.exports = {
  pickContent,
  pickPicture,
  idLinkPath,
  setActiveLink,
  setHeaderCss,
  setHeaderMenuCss
};
