import chText from './siteText.js';

function pickContent(num) {
  if (num === '1') {
    return chText['1'];
  } else if (num === '2') {
    return chText['2'];
  } else if (num === '3') {
    return chText['3'];
  } else {
    return chText['4'];
  }
}

function pickPicture(num) {
  if (num === '1') {
    return '/test/fantasy-scene-with-blue-dragon-treasure-chest-and-pile-of-golden-coins-d-illustration-707801968.jpg';
  } else if (num === '2') {
    return '/test/fantasy-scene-with-blue-dragon-treasure-chest-and-pile-of-golden-coins-d-illustration-707801968.jpg';
  } else if (num === '3') {
    return '/test/fantasy-scene-with-blue-dragon-treasure-chest-and-pile-of-golden-coins-d-illustration-707801968.jpg';
  } else if (num === '4') {
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
