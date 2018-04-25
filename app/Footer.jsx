import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var footerStyle = function(topicStatus, opacity) {
  if(!topicStatus) {
    return {
      display: 'flex',
      backgroundColor: 'black',
      color: 'white'
    }
  } else {
    return {
      display: 'flex',
      backgroundColor: 'black',
      color: 'white',
      opacity: opacity
    }
  }
};

var linkStyle = {
  color: 'white'
}

const itemStyleOne = {
  flex: '3'
};

const itemStyleTwo = {
  flex: '1'
};

const pStyle = {
  padding: '10px'
};

class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fOpacity: 0
    }

    this.setFooterOpacity = this.setFooterOpacity.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.setFooterOpacity);
  }

  componentWilLUnmount() {
    window.addEventListener('scroll', this.setFooterOpacity);
  }

  setFooterOpacity(event) {
    var scrollTop = window.pageYOffset;

    if(scrollTop >= 2400) {
      // console.log('scrollTop:', scrollTop);
      var oldPercent = (scrollTop - 2400) / (3221 - 2400);
      var numForOpacity = ((1 - 0) * oldPercent) + 0;
      // console.log('oldPercent:', oldPercent);
      // console.log('numForOpacity:', numForOpacity);
      this.setState({ fOpacity: numForOpacity });
      // console.log('Footer setOpacity:', this.state);
    }
  }

  render() {

    return (
      <div style={footerStyle(this.props.topicStatus, this.state.fOpacity)}>
        <div style={itemStyleOne}>
          <p style={pStyle}>Email</p>
        </div>
        <div style={itemStyleTwo}>
        <Link to={'/jnl'} style={linkStyle}> <p style={pStyle}>Journalism and Law</p></Link>
      </div>
        <div style={itemStyleTwo}>
          <p style={pStyle}>James Abels. All rights reserved. 2018.</p>
        </div>
      </div>
    )
  }

}

export default Footer;
