import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router';
import Journalism from './Journalism.jsx';
import Menu from './Menu.jsx';
import ArticleNav from './ArticleNav.jsx';
import Location from './custom/Location.js';
import articleData from './data/clips/index.js';

export default class JournalismLoader extends Component {
  constructor(props) {
    super(props);

    const pathToMatch = '/journalism/:publication/:headline';
    const location = new Location(pathToMatch, props);

    this.state = {
      pathToMatch,
      isNotFound: !location.pathIsJustRight,
      needsRedirect: location.needsRedirect
    };
  }

  componentDidUpdate(prevProps) {
    const location = new Location(
      this.state.pathToMatch,
      this.props,
      prevProps
    );

    if (location.needsRedirect) {
      const startRedirect = !this.state.needsRedirect;

      if (startRedirect) {
        this.setState({ needsRedirect: startRedirect });
      }
    } else if (location.isSwappingContent) {
      const newDataIndex = location.params.toIndex('headline');
      const newPubIndex = location.params.toIndex('publication');

      // ? Can this just be a falsy check?
      if (typeof newDataIndex === 'number' && typeof newPubIndex === 'number') {
        this.props.boundHandleClickForBody(newDataIndex, newPubIndex);
      }
    }
  }

  render() {
    const { indexForArticleData } = this.props.localState;
    const { needsRedirect, isNotFound } = this.state;
    const text =
      'Staff and freelance reporting for Forbes.com, Mergermarket, Slate and others';

    return needsRedirect ? (
      <Redirect to={{ pathname: '/i', state: 'journalism' }} />
    ) : isNotFound ? (
      <Redirect to="/not-found" />
    ) : (
      <Switch>
        <Route
          path="/journalism/menu"
          render={() => (
            <Menu section="journalism" link="/journalism" text={text}>
              <ArticleNav
                {...this.props}
                data={articleData}
                section="journalism"
              />
            </Menu>
          )}
        />

        <Route
          path="/journalism/:publication/:headline"
          render={() => (
            <Journalism {...this.props} text={text} data={articleData} />
          )}
        />
      </Switch>
    );
  }
}
