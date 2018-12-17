import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import TheStory from './TheStory.jsx';
import Menu from './Menu.jsx';
import ChapterNav from './ChapterNav.jsx';
import Location from './custom/Location.js';
import storyData from './data/the-story/index.js';

export default class StoryLoader extends Component {
  constructor(props) {
    super(props);

    const pathToMatch = '/story/:chapter/:title';
    const location = new Location(pathToMatch, props);

    this.state = {
      pathToMatch,
      isNotFound: !location.pathIsJustRight,
      needsRedirect: location.needsRedirect
    };
  }

  componentDidUpdate(prevProps) {
    /** Handle story navigation:
     *
     * 1. Short internal links mean redirect to last known location
     * 2. Changing chapter means body.returnState must be updated
     */

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
      const newChapterIndex = location.params.toIndex('title');

      if (typeof newChapterIndex === 'number') {
        this.props.boundHandleClickForBody(newChapterIndex);
      }
    }
  }

  render() {
    const { needsRedirect, isNotFound } = this.state;

    return needsRedirect ? (
      <Redirect to={{ pathname: '/i', state: 'story' }} />
    ) : isNotFound ? (
      <Redirect to="/not-found" />
    ) : (
      <Switch>
        <Route
          path="/story/menu"
          render={() => (
            <Menu section="story" link="/story" text="The story so far">
              <ChapterNav
                {...this.props}
                isMenu={true}
                data={storyData}
                section="chapter"
              />
            </Menu>
          )}
        />

        <Route
          path="/story/:chapter/:title"
          render={() => <TheStory {...this.props} data={storyData} />}
        />
      </Switch>
    );
  }
}
