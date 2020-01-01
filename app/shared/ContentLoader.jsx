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

    const referrer = new Referrer(props);
    const location = new Location(referrer.pathToMatch, props);
    const state = new State(props, location);
    const content = new Content(location.caller);
    const allContentData = content.getContentData();
    const { caller } = location;
    let imageLoaded = -1;

    this.overflowRef = caller === 'chapter'
      ? React.createRef()
      : {}; // Prevents errors

    if (caller === 'chapter') {
      const { images, type } = this.props.appState;
      const number = state.getIndex('chapter') + 1;
      imageLoaded = type !== 'mobile' && images[`chapter-${number}-blurred`].complete ? 2 : 0;
    } else if (caller === 'projects') {
      imageLoaded = 0;
    }

    this.state = {
      caller,
      allContentData: allContentData,
      chapterIndex: state.getIndex('chapter'),
      headlineIndex: state.getIndex('article'),
      // -1 = n/a, 0 = not loaded, 1 = loaded, 2 = done
      imageLoaded: imageLoaded,
      isNotFound: !location.pathIsValid,
      needsRedirect: location.needsRedirect,
      projectIndex: state.getIndex('project'),
      reverieIndex: state.getIndex('reverie'),
      thumbnailCount: 0, // Track thumbnail loads
      thumbnailIndex: state.getIndex('projectPics')
    };
  }

  render() {
    const {
      caller,
      isNotFound,
      needsRedirect
    } = this.state;
    const referrer = new Referrer(this.props);

    return needsRedirect ? (
      <Redirect
        to="/i"
      />
    ) : isNotFound ? (
      <Redirect
        to="/not-found"
      />
    ) : (
      <Switch>
        <Route
          exact
          path={`/${caller}/menu`}
          render={() => {
            // Use variable b/c components must be Capitalized!
            const MenuContent = this.getMenuContent(caller);
            let boundHandleClickForContentLoader;

            if (caller === 'projects' || caller === 'chapter') {
              const clickHandling = new ClickHandling('contentLoader', this);
              boundHandleClickForContentLoader = clickHandling.boundHandleClick;
            }

            return (
              <Menu
                {...this.props}
              >
                <MenuContent
                  {...this.props}
                  contentState={this.state}
                  boundHandleClickForContentLoader={boundHandleClickForContentLoader}
                />
              </Menu>
            );
          }}
        />
        <Route
          path={referrer.finalPath}
          render={() => {
            const PageContent = this.getPage(caller);
            let boundHandleClickForContentLoader;

            if (caller === 'projects' || caller === 'chapter') {
              const clickHandling = new ClickHandling('contentLoader', this);
              boundHandleClickForContentLoader = clickHandling.boundHandleClick;
            }

            return (
              <PageContent
                {...this.props}
                boundHandleClickForContentLoader={boundHandleClickForContentLoader}
                contentState={this.state}
                overflowRef={this.overflowRef}
              />
            );
          }}
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
    const referrer = new Referrer(this.props);
    const location = new Location(referrer.pathToMatch, this.props, prevProps);

    if (location.needsRedirect) {
      this.setState({ needsRedirect: true });
    } else if (location.isSwappingContent) {
      const {
        appState,
        boundHandleClickForApp,
        boundHandleClickForBody
      } = this.props;
      const state = new State(this.props, location);
      const clickHandling = new ClickHandling('contentLoader', this);
      const boundHandleClickForContentLoader = clickHandling.boundHandleClick;

      state.rebuildBody(boundHandleClickForBody);
      state.resetIllustrationState(boundHandleClickForApp);
      // Checks .complete for main img (click handling for blur). 
      state.rebuildContentLoader(boundHandleClickForContentLoader);

      /* Reset scroll top in /chapter

        The scrollTop reset is not currently applied to the /projects, and 
        /journalism routes b/c they can only be changed via /menu. If you 
        want to expand this to include the /projects and /journalism, remember 
        to filter /menu paths, as they don't have an overflowRef, and so will 
        kick an error. 
      */

      if (location.caller === 'chapter') {
        const { currentCaller } = appState;
        const scrollHandler = new ScrollHandling(currentCaller);
        scrollHandler.resetElementTop(this.overflowRef, prevProps);
      }
    } else if (referrer.isMenu(this.props) && !prevProps.appState.isMenu ) {
      /* Reset thumbnailCount when entering /menu from /projects (via MenuButton):

        1. thumbnailCount is used to track the state of thumbnails on cL-loaded pages.
        2. Every thumbnail fires an onLoad event to increment thumbnailCount.
        3. Once the thumbnailCount hits the total exected thumbnails, they're all loaded.
          -See ProjectNav for logic as to thumbnailCount totals. 
            -One is for MultiProjectNav (hard coded) the other for ProjectNav on its own. 
        4. This is a reset, it runs whenever the MenuButton is clicked.
          -This ensures that the starting count is 0 on the /menu page.
            -W/o this, the thumbnailCount will stay at the total for the non /menu page
              (b/c /projects and /projects/menu are handled by cL w/o a reload)
        5. We don't need a reset when closing the /menu via the MenuButton b/c the entire
          cL will reload in this case, which sets the count to 0 via the constructor.

        Note: We shouldn't have to worry further about an infinite loop b/c the prevState
          will only be isMenu once. We won't get here after the initial switch.
      */

      if (location.caller === 'projects' && this.state.thumbnailCount > 0) {
        this.setState({ thumbnailCount: 0 });
      }
    }

    // Preserve the accessibility outline when using the MenuLink, as long 
    // as we're not entering or exiting tempContent. It's turned on in 
    // ClickHandling.toggleMenu and off in ClickHandling.updateApp.
    // It's also turned off when tabbed is turned off in App.
    if (
      location.caller !== 'chapter'
        && this.props.appState.tempContent < 1
        && prevProps.appState.tempContent < 1
    ) {
      if (this.props.appState.menuButtonHasFocus) {
        setTimeout(() => document.getElementById('menuButton').focus(), 0);
      }
    }
  }
}
