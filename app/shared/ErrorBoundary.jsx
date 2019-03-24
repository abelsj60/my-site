import React, { Component, Fragment } from 'react';
// import ReactGA from 'react-ga';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
      hasError: false,
      initialLoad: true
    };

    this.handleLoad = this.handleLoad.bind(this);
  }

  render() {
    const { hasError, initialLoad } = this.state;
    const { children } = this.props;
    const errorText = initialLoad
      ? `This site doesn't support your browser or there was an 
      error. Please try back with a different browser. Modern 
      versions of Chrome, Firefox, and Safari work best. In 
      the meantime, here's the 4-1-1. Thanks!`
      : 'So sorry, there was an error. Try again or come back later.';

    if (hasError) {
      return (
        <Fragment>
          <div
            style={{
              maxWidth: '1078px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            <header
              style={{
                backgroundColor: 'lightyellow',
                padding: '5px 25px'
              }}
            >
              <p>{errorText}</p>
            </header>
            {initialLoad
              && <div
                style={{
                  paddingLeft: '25px',
                  paddingRight: '25px'
                }}
              >
                <h1>About</h1>
                <p>James Abels is a NYC-based Web developer.</p>
                <p>A lawyer and former start-up founder, Abels was a staff reporter for Forbes and Mergermarket
            (then Pearson, now Acuris). He wrote about technology, digital media, venture capital, and
            mergers and acquisitions.</p>
                <p>Abels is available for front- and back-end technology projects, particularly those involving
            creative consumer narratives.
            He's currently working with Upendra Shardanand on a new type of media product for
            Facebook Messenger, slated for soft launch in 2019.
                </p>
              </div>}
            <footer
              style={{
                paddingLeft: '25px',
                paddingRight: '25px',
                marginTop: !initialLoad ? '25px' : ''
              }}
            >
              Email: abelsj60__at__gmail.com
            </footer>
          </div>
        </Fragment>
      );
    }

    return children;
  }

  // Catch errors re-render
  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    });

  // ReactGA.exception({
  //   description: `Error ${error} occurred: ${errorInfo}`
  // });
  }

  componentDidMount() {
    // Must be done onload to avoid React's re-render
    window.addEventListener('load', this.handleLoad);
  }

  handleLoad() {
    const { initialLoad, hasError } = this.state;

    if (initialLoad && !hasError) {
      this.setState({ initialLoad: false });
      window.removeEventListener('load', this.handleLoad);
    }
  }
}
