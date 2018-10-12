import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main id="about">
        <section className="content-container">
          <h1>About</h1>
          <div className="about-image-box">
            <div className="about-pic" />
            <div className="about-descript">
              <h1>James Abels</h1>
              <p>Short story</p>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default About;
