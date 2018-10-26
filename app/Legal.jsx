import React, { Component } from 'react';

// ~ja Turn off legal in mobile (standard css), not home or about.

class Legal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="legal" className={this.props.state.legal}>
        <section>
          <p>James Abels. All rights reserved. {this.props.copyrightYear}</p>
        </section>
      </section>
    );
  }
}

export default Legal;
