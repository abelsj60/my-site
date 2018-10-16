import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from './AppBar.jsx';
import BusinessCard from './BusinessCard.jsx';
import FooterText from './FooterText.jsx';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      businessCard: 'inactive',
      menu: 'inactive',
      text: 'inactive',
      contact: 'inactive'
    };

    this.toggleBusinessCard = this.toggleBusinessCard.bind(this);
    this.addCssToHideFooterTextForAppBar = this.addCssToHideFooterTextForAppBar.bind(
      this
    );
    this.makeButtonActive = this.makeButtonActive.bind(this);
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

  addCssToHideFooterTextForAppBar() {
    return this.addAppBarToPage() ? 'app-bar-active' : '';
  }

  toggleBusinessCard() {
    this.setState({
      businessCard: this.state.contact === 'inactive' ? 'active' : 'inactive'
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
      <footer id={this.addCssToLocateFooter()}>
        <BusinessCard businessCard={this.state.businessCard} />
        <FooterText
          cssToHideFooterTextForAppBar={this.addCssToHideFooterTextForAppBar()}
          toggleBusinessCard={this.toggleBusinessCard}
        />
        {this.addAppBarToPage() && (
          <AppBar
            toggleText={this.props.toggleText}
            toggleDetails={this.props.toggleDetails}
            makeButtonActive={this.makeButtonActive}
            toggleBusinessCard={this.toggleBusinessCard}
            state={this.state}
          />
        )}
      </footer>
    );
  }
}

export default withRouter(Footer);
