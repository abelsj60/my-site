import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from './AppBar.jsx';
import BusinessCard from './BusinessCard.jsx';
import FooterText from './FooterText.jsx';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: 'inactive',
      menu: 'inactive',
      text: 'inactive'
    };

    this.toggleBusinessCard = this.toggleBusinessCard.bind(this);
    this.makeButtonActive = this.makeButtonActive.bind(this);
    this.addCssToHideTextForAppBar = this.addCssToHideTextForAppBar.bind(this);
  }

  get location() {
    return this.props.location.pathname.split('/');
  }

  addCssToLocateFooter() {
    return this.location[1] !== '' ? 'inner-page-footer' : 'home-page-footer';
  }

  addAppBarToPage() {
    return (
      this.location[1] !== '' &&
      this.location[1] !== 'about' &&
      this.location[1] !== 'toys'
    );
  }

  addCssToHideTextForAppBar() {
    return this.addAppBarToPage() ? 'app-bar-active' : '';
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
        id={this.addCssToLocateFooter()}
        className={this.props.magicClicks}
        style={this.location[1] === '' ? this.props.magicOpacity : null}
      >
        <BusinessCard contact={this.state.contact} />
        <FooterText
          cssToHideTextForAppBar={this.addCssToHideTextForAppBar()}
          toggleBusinessCard={this.toggleBusinessCard}
        />
        {this.addAppBarToPage() && (
          <AppBar
            toggleText={this.props.toggleText}
            toggleBusinessCard={this.toggleBusinessCard}
            makeButtonActive={this.makeButtonActive}
            state={this.state}
          />
        )}
      </footer>
    );
  }
}

export default withRouter(Footer);
