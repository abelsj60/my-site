import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';

class Page extends Component {
  constructor(props) {
    super(props);
  }

  addCssForPageControl() {
    return this.props.location.pathname.split('/')[1] === '' ? 'home' : 'inner';
  }

  render() {
    return (
      <section id="page" className={this.addCssForPageControl()}>
        <Header />
        <Main state={this.props.state} toggleText={this.toggleText} />
        <Footer
          toggleText={this.props.toggleText}
          storyText={this.props.state.storyText}
          magicClicks={this.props.state.magicClicks}
          magicOpacity={this.props.state.magicOpacity}
        />
      </section>
    );
  }
}

export default withRouter(Page);
