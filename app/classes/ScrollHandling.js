import ReactGA from 'react-ga';

export default class ScrollHandling {
  constructor(location) {
    this._location = location;
    this._type = location.type;
  }

  _swappingProjects(prevProps) {
    if (this._type !== 'projects') return false;

    const prevIndexForProjectData = prevProps.bodyState.indexForProjectData;
    const currentIndexForProjectData = this._location.params.projectNameToIndex();

    return currentIndexForProjectData !== prevIndexForProjectData;
  }

  resetElementTop(overflowRef, prevProps) {
    const overflowRefExists = overflowRef.current !== null;

    if (overflowRefExists) {
      if (overflowRef.current.scrollTop !== 0) {
        const updateScrollTop = this._type === 'projects'
          ? this._swappingProjects(prevProps)
          : true;

        if (updateScrollTop) {
          ReactGA.event({
            category: 'Scroll management',
            action: `Reset top for ${this._type}`,
            label: 'Swapping content'
          });
          overflowRef.current.scrollTop = 0;
        }
      }
    }
  }

  resetWindowTop() {
    // Useing pageYOffset instead of scrollY
    // for cross-browser support, per MDN
    if (window.pageYOffset > 0) {
      ReactGA.event({
        category: 'Scroll management',
        action: `Reset window for ${this._type}`,
        label: 'Changing location'
      });
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
