import chapterText from './siteText.js';

function pickContent(num) {
  if (parseInt(num) === 1) {
    return chapterText[0];
  } else if (parseInt(num) === 2) {
    return chapterText[1];
  } else if (parseInt(num) === 3) {
    return chapterText[2];
  } else {
    return chapterText[3];
  }
}

function pickPicture(num) {
  if (parseInt(num) === 1) {
    return '/test/fantasy-scene-with-blue-dragon-treasure-chest-and-pile-of-golden-coins-d-illustration-707801968.jpg';
  } else if (parseInt(num) === 2) {
    return '/test/fantasy-scene-with-blue-dragon-treasure-chest-and-pile-of-golden-coins-d-illustration-707801968.jpg';
  } else if (parseInt(num) === 3) {
    return '/test/fantasy-scene-with-blue-dragon-treasure-chest-and-pile-of-golden-coins-d-illustration-707801968.jpg';
  } else {
    return '/test/fantasy-scene-with-blue-dragon-treasure-chest-and-pile-of-golden-coins-d-illustration-707801968.jpg';
  }
}

function idLinkPath(linkText) {
  const linkPath =
    linkText === 'Projects'
      ? '/projects'
      : linkText === 'The story'
        ? '/chapter'
        : '/jnl';
  return linkPath;
}

function setActiveLink(currentPath, linkText) {
  const linkPath = idLinkPath(linkText);
  return currentPath.includes(linkPath) && !currentPath.includes('index')
    ? 'active'
    : 'inactive';
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
