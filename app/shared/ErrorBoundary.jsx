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
      ? "browser problem. Please use Chrome, Firefox, or Safari"
      : "really confusing error. You might want to try that again";

    if (hasError) {
      return (
        <Fragment>
          <div
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '1078px'
            }}
          >
            <header>
              <h1
                style={{
                  marginBottom: '20px'
                }}
              >
                Hi! I'm James
              </h1>
              <p
                style={{
                  color: '#fd1172'
                }}
              >
                So sorry! We've got a {errorText}. In the meantime, here's my 411.
              </p>
            </header>
            {initialLoad && (
              <div
                style={{
                  paddingLeft: '25px',
                  paddingRight: '25px'
                }}
              >
                <img
                  alt=""
                  style={{
                    width: '100%',
                    marginBottom: '10px'
                  }}
                  src="/convert-to-data-uri/me-xnc-q90.jpg"
                />
                <p>
                  I write code for Web sites and software. I tell stories, too.
                </p>
                <p>
                  That's important. It means I don't just mechanically code software. I try to figure out — and keep sight of — the stories that drive it. I always have.
                </p>
                <p>
                  As a start-up founder, I told stories that pitched our software. As a staff reporter for Forbes and Mergermarket, I wrote stories that gave insight into technology and venture capital. And, as a lawyer, I crafted stories that made legal arguments.
                </p>
                <p>
                  Like I said — all stories, all the time. 
                </p>
                <p>
                  So. What's yours?
                </p>
                <p>
                  -j
                </p>
              </div>
            )}
            <footer
              style={{
                marginTop: '25px',
                marginBottom: '25px',
                paddingLeft: '25px',
                paddingRight: '25px',
                color: 'slategrey'
              }}
            >
              Contact: hello@jamesabels.net
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
      error: error,
      errorInfo: errorInfo,
      hasError: true
    });

    if (process.env.NODE_ENV !== 'development') {
      ReactGA.exception({
        description: `${error}. Initial load: ${initialLoad}. Info: ${JSON.stringify(errorInfo)}.`
      });
    }
  }

  componentDidMount() {
    // Must be done onload to avoid React's re-render
    window.addEventListener('load', this.handleLoad);
  }

  handleLoad() {
    const {
      hasError,
      initialLoad
    } = this.state;

    if (initialLoad && !hasError) {
      this.setState({ initialLoad: false });
      window.removeEventListener('load', this.handleLoad);
    }
  }
}
