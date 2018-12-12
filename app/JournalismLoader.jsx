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
      const newPublicationIndex = location.params.toIndex('publication');

      if (
        typeof newDataIndex === 'number' &&
        typeof newPublicationIndex === 'number'
      ) {
        this.props.updateReturnState(newDataIndex, newPublicationIndex);
      }
    }
  }

  render() {
    const articleIndex = this.props.localState.indexForArticleData;

    return this.state.needsRedirect ? (
      <Redirect to={{ pathname: '/i', state: 'journalism' }} />
    ) : this.state.isNotFound ? (
      <Redirect to="/not-found" />
    ) : (
      <Switch>
        <Route
          path="/journalism/menu"
          render={() => (
            <Menu
              section="journalism"
              link="/journalism"
              text="Staff and freelance reporting for Forbes.com, Mergermarket, Slate and
              others"
            >
              <ArticleNav
                data={articleData}
                section="journalism"
                articleIndex={articleIndex}
              />
            </Menu>
          )}
        />

        <Route
          path="/journalism/:publication/:headline"
          render={() => (
            <Journalism
              data={articleData}
              articleIndex={articleIndex}
              text="Staff and freelance reporting for Forbes.com, Mergermarket, Slate and others"
            />
          )}
        />
      </Switch>
    );
  }
}
