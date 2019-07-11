import ReactGA from 'react-ga';

export default class ScrollHandling {
  constructor(currentCaller) {
    this._caller = currentCaller;
  }

  // Only used by '/chapter'

  resetElementTop(overflowRef, prevProps) {
    const overflowRefExists = overflowRef.current !== null;

    if (overflowRefExists) {
      if (overflowRef.current.scrollTop !== 0) {
        const updateScrollTop = this._caller === 'projects'
          ? this._swappingProjects(prevProps)
          : true;

        if (updateScrollTop) {
          if (process.env.NODE_ENV !== 'development') {
            ReactGA.event({
              category: 'Scroll management',
              action: `Reset top for ${this._caller}`,
              label: 'Swapping content'
            });
          }

          overflowRef.current.scrollTop = 0;
        }
      }
    }
  }

  resetWindowTop() {
    // Useing pageYOffset instead of scrollY
    // for cross-browser support, per MDN

    if (window.pageYOffset > 0) {
      if (process.env.NODE_ENV !== 'development') {
        ReactGA.event({
          category: 'Scroll management',
          action: `Reset window for ${this._caller}`,
          label: 'Changing location'
        });
      }

      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
