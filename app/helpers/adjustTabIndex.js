export default function adjustTabIndex(tempContent, headerMenuOnly, illustrationLevel) {
  if (!!illustrationLevel) {
    if (illustrationLevel > 2) {
      return '-1';
    }
  }

  if (tempContent === 1 || tempContent === 2) {
    if (!headerMenuOnly) {
      return '-1';
    }
  }

  if (tempContent > 2) {
    return document.documentElement.clientWidth < 690 ? '-1' : ''
  }
}
