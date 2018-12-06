import React, { Component } from 'react';
import { matchPath } from 'react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
import { validateParam } from './helpers/utils.js';
import TheStory from './TheStory.jsx';
import Menu from './Menu.jsx';
import ChapterNav from './ChapterNav.jsx';
import storyData from './data/the-story/index.js';

export default class StoryLoader extends Component {
  constructor(props) {
    super(props);

    const path = this.props.location.pathname;

    /** Load chapter or redirect user */

    const fullPath = matchPath(path, { path: '/chapter/:title' });
    const isFullPath = fullPath && fullPath.isExact;

    let isBadTitle = path.split('/').length > 3;

    if (isFullPath) {
      const title = this.props.match.params.title;
      const validatedTitle = validateParam('title', storyData, title);

      isBadTitle = validatedTitle === -1;
    }

    /** Track result of validation for render */

    this.state = {
      isNotFound: isBadTitle,
      needsRedirect: !isFullPath && !isBadTitle
    };
  }

  componentDidUpdate(prevProps) {
    const path = this.props.location.pathname;

    const fullPath = matchPath(path, { path: '/chapter/:title' });
    const isFullPath = fullPath && fullPath.isExact;

    /** Handle story navigation:
     *
     * 1. Missing params mean redirect to last location
     * 2. Update body.returnState when chapter changes
     */

    if (!isFullPath) {
      const startRedirect = !this.state.needsRedirect;

      if (startRedirect) {
        this.setState({ needsRedirect: startRedirect });
      }
    } else {
      const currentChapter = this.props.match.params.title;
      const lastChapter = prevProps.match.params.title;
      const chapterIsChanging =
        currentChapter !== 'menu' && currentChapter !== undefined;
      const startChapterChange = currentChapter !== lastChapter;

      if (chapterIsChanging && startChapterChange) {
        const newChapterIndex = validateParam(
          'title',
          storyData,
          currentChapter
        );

        this.props.updateReturnState(newChapterIndex);
      }
    }
  }

  render() {
    return this.state.needsRedirect ? (
      <Redirect to={{ pathname: '/i', state: 'chapter' }} />
    ) : this.state.isNotFound ? (
      <Redirect to="/notFound" />
    ) : (
      <Switch>
        <Route
          path="/chapter/menu"
          render={() => (
            <Menu section="story" link="/chapter" text="The story so far">
              <ChapterNav
                isMenu={true}
                data={storyData}
                section={'chapter'}
                chapterIndex={this.props.localState.indexForChapterData}
              />
            </Menu>
          )}
        />

        <Route
          path="/chapter/:title"
          render={({ match }) => <TheStory match={match} data={storyData} />}
        />
      </Switch>
    );
  }
}
