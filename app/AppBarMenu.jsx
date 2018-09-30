import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router-dom';
import FullPageIndexMenu from './FullPageIndexMenu.jsx';

class AppBarMenu extends Component {
  constructor(props) {
    super(props);

    this.selectMenuText = this.selectMenuText.bind(this);
  }

  get isJNL() {
    return this.props.location.pathname.includes('jnl') ? 'jnl' : '';
  }

  selectMenuText() {
    const section = this.props.location.pathname.split('/')[1];

    return section === 'projects'
      ? 'Projects'
      : section === 'chapter'
        ? 'Chapters'
        : 'Clips';
  }

  render() {
    return (
      <Fragment>
        <span className="app-bar-spacer" />
        <section className="app-bar-button">
          <img src="" alt="" className="app-bar-icon" />
          <p className="app-bar-text">{this.selectMenuText()}</p>
        </section>
        <span className={'app-bar-spacer ' + this.isJNL} />
        <div className={'borderline' + this.isJNL} />
        <span className={'app-bar-spacer ' + this.isJNL} />
        <section className={'app-bar-button ' + this.isJNL}>
          <img src="" alt="" className={'app-bar-icon ' + this.isJNL} />
          <p className={'app-bar-text ' + this.isJNL}>Text</p>
        </section>
        <span className="app-bar-spacer" />
        <div className="borderline" />
        <span className="app-bar-spacer" />
        <section className="app-bar-button">
          <img src="" alt="" className="app-bar-icon" />
          <p className="app-bar-text">Contact</p>
        </section>
        <span className="app-bar-spacer" />
      </Fragment>
    );
  }
}

export default withRouter(AppBarMenu);
