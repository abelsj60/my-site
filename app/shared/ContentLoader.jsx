import ArticleOrReverie from '../article-n-reverie/ArticleOrReverie.jsx';
import ArticleOrReverieNav from '../article-n-reverie/ArticleOrReverieNav.jsx';
import ClickHandling from '../classes/ClickHandling.js';
import Content from '../classes/Content.js';
import Location from '../classes/Location.js';
import Menu from '../menu/Menu.jsx';
import MultiProjectNav from '../projects/MultiProjectNav.jsx';
import Projects from '../projects/Projects.jsx';
import React, { Component } from 'react';
import Referrer from '../classes/Referrer.js';
import {
  Route,
  Redirect,
  Switch
} from 'react-router';
import ScrollHandling from '../classes/ScrollHandling.js';
import State from '../classes/State.js';
import Story from '../story/Story.jsx';

// For future refactoring: https://stackoverflow.com/a/51753410

export default class ContentLoader extends Component {
  constructor(props) {
    super(props);

    const { isMenu } = props.appState;
    const referrer = new Referrer(props);
    const location = new Location(
      referrer.pathToMatch,
      props
    );

    // DO NOT USE currentCaller to avoid problems with BACK/FORWARD:
    // If the user hits back/forward, currentCaller will be out-of-sync
    // with props and the window until App.cDU runs. The same problem
    // occurs with path matching for /menu. These values must be certain
    // at the time of mounting, and can't wait for an update to AppState.

    const content = new Content(location.caller);
    const allContentData = content.getContentData();

    const chapterIndex =
      !isMenu && location.caller === 'chapter'
        ? location.params.titleToIndex()
        : 0;
    const projectIndex =
      !isMenu && location.caller === 'projects'
        ? location.params.projectNameToIndex()
        : 0;
    const thumbnailIndex =
      !isMenu && location.caller === 'projects'
        ? location.params.projectThumbnailToIndex()
        : 0;
    const headlineIndex =
      !isMenu && location.caller === 'journalism'
        || location.caller === 'reverie'
        ? location.params.headlineToIndex()
        : 0;
    let dataIndex;

    switch (location.caller) {
      case 'chapter':
        dataIndex = chapterIndex;
        break;
      case 'projects':
        dataIndex = projectIndex;
        break;
      default:
        dataIndex = headlineIndex;
    }

    const finalData = allContentData[dataIndex];

    this.overflowRef =
      location.caller === 'chapter'
        ? React.createRef()
        : {};

    this.state = {
      isNotFound: !location.pathIsValid,
      needsRedirect: location.needsRedirect,
      imageLoaded: false,
      allContentData: allContentData,
      finalData: finalData,
      caller: location.caller,
      chapterIndex: chapterIndex,
      projectIndex: projectIndex,
      thumbnailIndex: thumbnailIndex,
      headlineIndex: headlineIndex
    };
  }

  render() {
    const {
      caller,
      isNotFound,
      needsRedirect
    } = this.state;
    const referrer = new Referrer(this.props);

    return needsRedirect
      ? (
        <Redirect
          to="/i"
        />
      ) : isNotFound
        ? (
          <Redirect
            to="/not-found"
          />
        ) : (
          <Switch>
            <Route
              exact
              path={`/${
                caller
              }/menu`}
              render={
                () => {
                  if (caller === 'chapter') {
                    return (
                      <Redirect
                        to="/not-found"
                      />
                    );
                  }
                  const MenuContent = this.getMenuContent(caller);
                  return (
                    <Menu
                      {...this.props}
                    >
                      <MenuContent
                        {...this.props}
                        contentState={this.state}
                      />
                    </Menu>
                  );
                }
              }
            />
            <Route
              path={referrer.finalPath}
              render={
                () => {
                  const PageContent = this.getPage(caller);
                  let boundHandleClickForContentLoader;

                  if (caller === 'projects') {
                    const clickHandling = new ClickHandling('contentLoader', this);
                    boundHandleClickForContentLoader = clickHandling.boundHandleClick;
                  }

                  return (
                    <PageContent
                      {...this.props}
                      overflowRef={this.overflowRef}
                      contentState={this.state}
                      boundHandleClickForContentLoader={boundHandleClickForContentLoader}
                    />
                  );
                }
              }
            />
          </Switch>
        );
  }

  getMenuContent(caller) {
    switch (caller) {
      case 'journalism':
        return ArticleOrReverieNav;
      case 'projects':
        return MultiProjectNav;
      case 'reverie':
        return ArticleOrReverieNav;
    }
  }

  getPage(caller) {
    switch (caller) {
      case 'chapter':
        return Story;
      case 'journalism':
        return ArticleOrReverie;
      case 'projects':
        return Projects;
      case 'reverie':
        return ArticleOrReverie;
    }
  }

  componentDidUpdate(prevProps) {
    const { currentCaller } = this.props.appState;
    const referrer = new Referrer(this.props);
    const location = new Location(
      referrer.pathToMatch,
      this.props,
      prevProps
    );

    // Manage component state

    if (location.needsRedirect) {
      this.setState({ needsRedirect: true });
    } else if (location.isSwappingContent) {
      const {
        allContentData,
        caller
      } = this.state;
      const { boundHandleClickForBody } = this.props;
      const bodyState = new State(
        this.props,
        location
      );
      const stateToUpdate = {};

      switch (caller) {
        case 'chapter':
          const titleIndex = location.params.titleToIndex();

          stateToUpdate.chapterIndex = titleIndex;
          stateToUpdate.finalData = allContentData[titleIndex];
          break;
        case 'projects':
          const projectIndex = location.params.projectNameToIndex();
          const thumbnailIndex = location.params.projectThumbnailToIndex();

          stateToUpdate.projectIndex = projectIndex;
          stateToUpdate.thumbnailIndex = thumbnailIndex;
          stateToUpdate.finalData = allContentData[projectIndex];
          stateToUpdate.imageLoaded = false;
          break;
        default:
          const headlineIndex = location.params.headlineToIndex();

          stateToUpdate.headlineIndex = headlineIndex;
          stateToUpdate.finalData = allContentData[headlineIndex];
          break;
      }

      bodyState.rebuild(boundHandleClickForBody);
      this.setState(stateToUpdate);

      // The scrollTop reset is not currently applied to
      // the '/projects', and '/journalism' routes because
      // they can only be changed via '/menu'.

      // It works for '/chapter', because it's changed
      // from the '/chapter' route.

      // If you want to expand this to include the
      // /projects and '/journalism', filter out
      // '/menu' paths, as they don't have an
      // overflowRef, so will kick an error.

      if (location.caller === 'chapter') {
        const scrollHandler = new ScrollHandling(currentCaller);
        scrollHandler.resetElementTop(
          this.overflowRef,
          prevProps
        );
      }
    }
  }
}
