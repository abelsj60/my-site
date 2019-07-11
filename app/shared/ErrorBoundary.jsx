import React, { Component, Fragment } from 'react';
import ReactGA from 'react-ga';

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
      ? `Oops. I don't support your browser yet. Please try back with a modern 
      version of Chrome, Firefox, or Safari.`
      : 'Error! Try again or come back later.';

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
                backgroundColor: '#fd1172',
                paddingBottom: '5px',
                margin: '20px 25px',
                padding: '20px 0px'
              }}
            >
              <p
                style={{
                  color: 'white',
                  margin: '0px 20px'
                }}
              >
                {errorText}
              </p>
            </header>
            {initialLoad
              && (
                <div
                  style={{
                    paddingLeft: '25px',
                    paddingRight: '25px'
                  }}
                >
                  <h1>
                    About
                  </h1>
                  <p>
                    James Abels is a NYC-based Web developer.
                  </p>
                  <p>
                    A lawyer and former start-up founder, Abels was a staff reporter for Forbes and Mergermarket
                    (then Pearson, now Acuris). He wrote about technology, digital media, venture capital, and
                    mergers and acquisitions.
                  </p>
                  <p>
                    Abels is available for front- and back-end technology projects, particularly those involving
                    creative consumer narratives.
                    He's currently working with Upendra Shardanand on a new type of media product for
                    Facebook Messenger, slated for soft launch in 2019.
                  </p>
                </div>
              )}
            <footer
              style={{
                paddingLeft: '25px',
                paddingRight: '25px',
                marginTop: !initialLoad ? '25px' : ''
              }}
            >
              Contact: hello__at__jamesabels.net
            </footer>
          </div>
        </Fragment>
      );
    }

    return children;
  }

  // Catch errors re-render

  componentDidCatch(error, errorInfo) {
    const { initialLoad } = this.state;
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    });

    if (process.env.NODE_ENV !== 'development') {
      ReactGA.exception({
        description: `${
          error
        }. Initial load: ${
          initialLoad
        }. Info: ${
          JSON.stringify(errorInfo)
        }.`
      });
    }
  }

  componentDidMount() {
    // Must be done onload to avoid React's re-render
    window.addEventListener('load', this.handleLoad);
  }

  handleLoad() {
    const {
      initialLoad,
      hasError
    } = this.state;

    if (initialLoad && !hasError) {
      this.setState({ initialLoad: false });
      window.removeEventListener('load', this.handleLoad);
    }
  }
}
