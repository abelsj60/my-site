import React, { Component } from 'react';

class BusinessCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="business-card" className={this.props.footerState.contact}>
        <section id="card">
          <p id="name">James Abels</p>
          <div className="line" />
          <p>917-854-7848</p>
          <p>abelsj60_AT_gmail.com</p>
        </section>
        <div id="temp-content-box-shadow" />
      </section>
    );
  }
}

export default BusinessCard;
