import React, { Component } from 'react';
import MenuCloseButton from './MenuCloseButton.jsx';
import MenuDescription from './MenuDescription.jsx';

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main id="site-menu" className={`${this.props.section}-menu`}>
        <MenuCloseButton link={this.props.link} />
        <MenuDescription text={this.props.text} />
        {this.props.children}
      </main>
    );
  }
}

export default Menu;
