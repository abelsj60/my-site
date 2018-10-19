import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from './AppBar.jsx';
import BusinessCard from './BusinessCard.jsx';
import FooterText from './FooterText.jsx';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      businessCard: 'hide'
    };

    this.toggleBusinessCard = this.toggleBusinessCard.bind(this);
    this.addCssToHideTextForAppBar = this.addCssToHideTextForAppBar.bind(this);
  }

  get location() {
    return this.props.location.pathname.split('/');
  }

  addCssThatLocatesFooter() {
    return this.location[1] !== '' ? 'inner-page-footer' : 'home-page-footer';
  }

  addAppBarToPage() {
    return this.location[1] !== '' && this.location[1] !== 'about';
  }

  addCssToHideTextForAppBar() {
    return this.addAppBarToPage() ? 'app-bar-active' : '';
  }

  toggleBusinessCard() {
    this.setState({
      businessCard: this.state.businessCard === 'hide' ? 'show' : 'hide'
    });
  }

  render() {
    return (
      <footer
        id={this.addCssThatLocatesFooter()}
        className={this.props.magicClicks}
        style={this.location[1] === '' ? this.props.magicOpacity : null}
      >
        <BusinessCard businessCard={this.state.businessCard} />
        <FooterText
          cssToHideTextForAppBar={this.addCssToHideTextForAppBar()}
          toggleBusinessCard={this.toggleBusinessCard}
        />
        {this.addAppBarToPage() && (
          <AppBar
            toggleText={this.props.toggleText}
            toggleBusinessCard={this.toggleBusinessCard}
          />
        )}
      </footer>
    );
  }
}

export default withRouter(Footer);
