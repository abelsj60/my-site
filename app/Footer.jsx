import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      var oldPercent = (scrollTop - 2400) / (3221 - 2400);
      var numForOpacity = ((1 - 0) * oldPercent) + 0;
      this.setState({ fOpacity: numForOpacity });
    }
  }

  render() {

    var setFooterOpacity = function(topic, opacity) {
      if(topic && opacity >= 0) {
        return { opacity: opacity };
      } else {
        return;
      }
    }

    return (
      <div id='Footer' style={setFooterOpacity(this.props.topicsShown, this.state.fOpacity)}>
        <div id='FooterEmail'>
          <p className='pForFooter'>Email</p>
        </div>
        <div id='JnLFooter'>
          <Link className='link' to={'/jnl'}><p className='pForFooter'>Journalism and Law</p></Link>
        </div>
        <div id='Copyright'>
          <p className='pForFooter'>James Abels. All rights reserved. 2018.</p>
        </div>
      </div>
    )
  }

}

export default Footer;
