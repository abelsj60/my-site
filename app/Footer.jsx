import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppBarMenu from './AppBarMenu.jsx';
import BusinessCard from './BusinessCard.jsx';
import FooterText from './FooterText.jsx';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      businessCard: 'hide'
    };

    this.toggleBusinessCard = this.toggleBusinessCard.bind(this);
    this.addCssToHideFooterTextForAppBar = this.addCssToHideFooterTextForAppBar.bind(
      this
    );
  }

  get location() {
    return this.props.location.pathname.split('/');
  }

  addCssThatLocatesFooter() {
    return this.location[1] !== '' ? 'inner-page-footer' : 'home-page-footer';
  }

  addAppBarToPage() {
    return (
      this.location[1] !== '' &&
      this.location[1] !== 'menu' &&
      this.location[1] !== 'about'
    );
  }

  addCssToHideFooterTextForAppBar() {
    return this.addAppBarToPage() ? 'app-bar-active' : '';
  }

  toggleBusinessCard() {
    this.setState({
      businessCard: this.state.businessCard === 'hide' ? 'show' : 'hide'
    });
  }

  render() {
    return (
      <footer id={this.addCssThatLocatesFooter()}>
        <BusinessCard businessCard={this.state.businessCard} />
        <FooterText
          cssToHideFooterTextForAppBar={this.addCssToHideFooterTextForAppBar()}
          toggleBusinessCard={this.toggleBusinessCard}
        />
        {this.addAppBarToPage() && (
          <AppBarMenu
            toggleText={this.props.toggleText}
            toggleDetails={this.props.toggleDetails}
            toggleBusinessCard={this.toggleBusinessCard}
          />
        )}
      </footer>
    );
  }
}

export default withRouter(Footer);
