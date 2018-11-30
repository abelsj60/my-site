import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { normalize, validateParam } from './helpers/utils.js';
import TheStory from './TheStory.jsx';
import Menu from './Menu.jsx';
import ChapterNav from './ChapterNav.jsx';
import storyData from './data/the-story/index.js';

export default class StoryLoader extends Component {
  constructor(props) {
    super(props);

    const params = props.match.params;
    const paramKeys = Object.keys(params);
    const missingParams = paramKeys.filter(k => params[k] === undefined);
    const isMissingParams = missingParams.length > 0;
    const isMenu = params[paramKeys[0]] === 'menu';
    const indexForChapterData = !isMissingParams
      ? validateParam('title', storyData, params[paramKeys[0]])
      : 0;

    if (isMissingParams) {
      const currentUrl = props.match.url;
      const finalCharacter = currentUrl.length - 1;
      const urlHasSlash = currentUrl[finalCharacter] === '/';
      const urlWithAllParams = `${currentUrl}${
        !urlHasSlash ? '/' : ''
      }${normalize(storyData[indexForChapterData].attributes.title)}`;

      this.props.history.replace(urlWithAllParams);
    }

    this.state = {
      isStoryMenu: isMenu,
      indexForChapterData
    };

    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return this.state.isStoryMenu ? (
      <Menu text="The story so far" link={'/chapter'}>
        <ChapterNav
          data={storyData}
          state={this.state}
          section={'chapter'}
          handleClick={this.handleClick}
        />
      </Menu>
    ) : this.state.indexForChapterData !== -1 ? (
      <TheStory
        data={storyData}
        state={this.state}
        handleClick={this.handleClick}
        explore={this.props.state.explore}
      />
    ) : (
      <Redirect to="/notfound" />
    );
  }

  updateState(menuStatus, newIndex) {
    const needsMenuStatus = menuStatus === undefined;
    const needsNewIndex = newIndex === undefined;

    if (needsMenuStatus || needsNewIndex) {
      throw 'Params must be defined to updateState()';
    }

    this.setState({
      isStoryMenu: menuStatus,
      indexForChapterData: newIndex
    });
  }

  handleClick(index, location) {
    const linkChangesChapters = index !== this.state.indexForChapterData;

    if (linkChangesChapters) {
      const userIsInMenu = location === 'menu';

      this.props.history.push(
        `/chapter/${normalize(storyData[index].attributes.title)}`
      );

      this.updateState(userIsInMenu, index);
    }
  }

  componentDidUpdate(prevProps) {
    const userHitTheBrowserBackOrForwardButton =
      this.props.history.action === 'POP';
    const userHitTheMenuButton =
      this.props.match.url.includes('menu') ||
      prevProps.match.url.includes('menu');
    const chapterHasAlreadyChanged =
      this.props.match.url === prevProps.match.url;

    if (
      (userHitTheBrowserBackOrForwardButton || userHitTheMenuButton) &&
      !chapterHasAlreadyChanged
    ) {
      const params = this.props.match.params;
      const paramKeys = Object.keys(params);
      const missingParams = paramKeys.filter(k => params[k] === undefined);
      const isMissingParams = missingParams.length > 0;
      const isMenu = params[paramKeys[0]] === 'menu';
      const newIndexForChapterData =
        !isMissingParams && !isMenu
          ? validateParam('title', storyData, params[paramKeys[0]])
          : this.state.indexForChapterData;

      if (isMissingParams) {
        const currentUrl = this.props.match.url;
        const newUrl = `${currentUrl}/${normalize(
          storyData[newIndexForChapterData].attributes.title
        )}`;

        this.props.history.replace(newUrl);
      }

      // ~ja While we do, we don't have to update index when entering 'menu'

      this.updateState(isMenu, newIndexForChapterData);
    }
  }
}

/*
  return needToRedirect ? (
    this.components.Redirect
  ) : (
    <Switch>
      <Route />
      <Route />
    </Switch>
  );
*/
