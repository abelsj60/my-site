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
      ? "Error. Please use Chrome, Firefox, or Safari."
      : "Error. Something's wrong. Please try again.";

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
            <header
              style={{
                backgroundColor: '#fd1172',
                margin: '20px 25px',
                padding: '15px 0px'
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
                  <h1
                    style={{
                      marginBottom: '20px'
                    }}
                  >
                    About
                  </h1>
                  <p>
                    I write code for Web sites and software. I tell stories, too. 
                  </p>
                  <p>
                    That's important. Stories define everything. Consider this:
                  </p>
                  <p>
                    1. Microsoft sells Word by telling people they can write things with it.
                        That pitch is a story.
                  </p>
                  <p>
                    2. People use Word to collect and organize their thoughts. 
                        Those thoughts are a story.
                  </p>
                  <p>
                    3. Word saves these thoughts to a 'document'. 
                        That file name tells a story.
                  </p>
                  <p>
                    It's all stories, all the way down. 
                  </p>
                  <p>
                    That's where I come in. Rather than just mechanically coding sites and software, I try to figure out — and keep sight of — the stories that drive them. I always have.
                  </p>
                  <p>
                    As a start-up founder, I told stories that pitched our software. As a staff reporter for Forbes and Mergermarket, I wrote stories that gave insight into technology and venture capital. And as a lawyer, I crafted stories that made legal arguments. 
                  </p>
                  <p>
                    Like I said — stories all the way down. 
                  </p>
                  <p>
                    So. What's yours?
                  </p>
                </div>
              )}
            <footer
              style={{
                marginTop: !initialLoad ? '25px' : '',
                paddingLeft: '25px',
                paddingRight: '25px'
              }}
            >
              Say hello__@__jamesabels.net
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
