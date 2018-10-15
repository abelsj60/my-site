import React, { Component } from 'react';

class BusinessCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="business-card-holder" className={this.props.businessCard}>
        <div id="business-card">
          <p>917-854-7848</p>
          <p>abelsj60_AT_gmail.com</p>
        </div>
      </section>
    );
  }
}

export default BusinessCard;
