import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from './AppBar.jsx';
import BusinessCard from './BusinessCard.jsx';
import FooterText from './FooterText.jsx';
import { getPath } from './helpers/utils.js';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: 'inactive',
      menu: 'inactive'
    };

    this.toggleBusinessCard = this.toggleBusinessCard.bind(this);
    this.makeButtonActive = this.makeButtonActive.bind(this);
  }

  get location() {
    return getPath(this.props).split('/');
  }

  addCssThatLocatesFooter() {
    return this.location[1] !== '' ? 'inner-page-footer' : 'home-page-footer';
  }

  addAppBarToPage() {
    return this.location[1] !== '';
  }

  toggleBusinessCard() {
    this.setState({
      contact: this.state.contact === 'inactive' ? 'active' : 'inactive'
    });
  }

  makeButtonActive(buttonLabel) {
    this.setState({
      [buttonLabel]:
        this.state[buttonLabel] === 'inactive' ? 'active' : 'inactive'
    });
  }

  render() {
    return (
      <footer
        id={this.addCssThatLocatesFooter()}
        className={this.props.state.magicClicks}
        style={this.location[1] === '' ? this.props.state.magicOpacity : null}
      >
        <BusinessCard state={this.state} />
        <FooterText toggleBusinessCard={this.toggleBusinessCard} />
        {this.addAppBarToPage() && (
          <AppBar
            state={this.props.state}
            footerState={this.state}
            makeButtonActive={this.makeButtonActive}
            toggleText={this.props.toggleText}
            toggleBusinessCard={this.toggleBusinessCard}
          />
        )}
      </footer>
    );
  }
}

export default withRouter(Footer);
