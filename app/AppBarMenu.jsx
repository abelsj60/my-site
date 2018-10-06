import React, { Fragment, Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class AppBarMenu extends Component {
  constructor(props) {
    super(props);
  }

  get location() {
    return this.props.location.pathname.split('/')[1];
  }

  get linkPath() {
    if (this.location === 'index') {
      if (this.props.location.pathname.split('/')[2] === 'chapter') {
        return '/chapter';
      } else if (this.props.location.pathname.split('/')[2] === 'projects') {
        return '/projects';
      } else if (this.props.location.pathname.split('/')[2] === 'jnl') {
        return '/jnl';
      }

      return this.props.location.pathname;
    }

    return this.location === 'projects'
      ? '/index/projects'
      : this.location === 'chapter'
        ? '/index/chapter'
        : this.location === 'jnl'
          ? '/index/jnl'
          : '/about';
  }

  get indexLabel() {
    let location = this.location;

    if (location === 'jnl') {
      location = 'clips';
    }

    if (location === 'index') {
      location = 'back';
      // const fullLocation = this.props.location.pathname;

      // location = fullLocation.includes('projects')
      //   ? 'Back to project'
      //   : fullLocation.includes('chapter')
      //     ? 'Back to chapter'
      //     : 'Back to clip';
    }

    return location[0].toUpperCase() + location.slice(1);
  }

  get buttons() {
    /*
      Need local state on Projects, Chapter, jnl
      Router just goes path='/chapter'...
      But, what about URL update?

      --1--

      state = { chapterNumber: param.num || state.num || 1 }

      state = { chapterNumber: 1 }

      get chapterNumber() {
        // Cause infinite loop w/o 2nd if?
        if (this.props.param.num) {
          if (this.props.param.num !== this.state.chapterNumber) {
            this.setState({chapterNumber: this.props.param.num});
          }
        }

        return this.state.chapterNum
      }

      --2--

      state = {chapterNumber: 1}

      get ChapterNumber() {
        return this.props.param.num || this.state.num
      }

      componentDidUpdate(oldProps) {
        const newProps = this.props;

        if (newProps.param.num) {
          if (oldProps.param.num !== newProps.param.num) {
            this.setState( {chapterNumber: newProps.param.num} )
          }
        }

        // Downside? Will re-render?
        // Don't store on state? Store on seperate variable?
      }
    */

    /* In onClick for Text (Chapter)
      1. Find #chapter by id
      2. Add a style of display: none to element
      3. Override style on responsive view of 849px
    */

    /* In onClick for Details (Projects)
      1. Add a div to .right
      2. Style the div to be position absolute w/top of 58px and bottom of 42px
      3. Keep it display: none by default
      4. OnClick will make it display: block/flex
      5. Override style on repsonsive view of 849px
      6. Add button (thumbnail in line?) to +849 px w/wrap on?
      7. OnClick, this button will turn on/off details div
    */

    const buttons = [
      {
        label: this.indexLabel,
        linkPath: this.linkPath,
        onClick: null
      },
      {
        label: this.location === 'projects' ? 'Details' : 'Text',
        linkPath: this.props.location.pathname
      },
      { label: 'About', linkPath: '/about' }
    ];

    if (this.location === 'jnl' || this.location === 'index') {
      buttons.splice(1, 1);
    }

    if (this.location === 'about') {
      buttons.splice(1, 2);
    }

    return buttons;
  }

  render() {
    return this.buttons.map((button, index) => (
      <Fragment key={index}>
        <Link id="app-bar-button" to={button.linkPath}>
          <p>{button.label}</p>
        </Link>
        {button.label !== 'About' ? <div id="button-border" /> : null}
      </Fragment>
    ));
  }
}

export default withRouter(AppBarMenu);

/*
    x 1. Restructure w/.map
    x 2. Turn buttons into Links
    3. Point links to appropriate site sections
    x 4. Move CSS into own file
    5. Close button for index menu?
    6. Place index in own route, or as subset of project
    7. https://codepen.io/nwst/pen/oZKjbY
    --
    1. Create clips files/text
    2. Add one file per clip
    3. Update data repository
    3. Build proper links with clips
  */
