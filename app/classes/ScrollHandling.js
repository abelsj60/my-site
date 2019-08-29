import ReactGA from 'react-ga';

export default class ScrollHandling {
  constructor(currentCaller) {
    this._caller = currentCaller;
  }

  // Only used by '/chapter' at present
  resetElementTop(overflowRef, prevProps) {
    // B/c it doesn't exist on first render of this.state.needsRedirect
    const overflowRefExists = overflowRef.current !== null;

    if (overflowRefExists) {
      if (overflowRef.current.scrollTop !== 0) {
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
