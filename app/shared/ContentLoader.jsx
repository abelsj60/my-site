import ComponentData from '../classes/ComponentData.js';
import Location from '../classes/Location.js';
import Menu from '../menu/Menu.jsx';
import React, { Component } from 'react';
import Referrer from '../classes/Referrer.js';
import {
  Route,
  Redirect,
  Switch
} from 'react-router';
import ScrollHandling from '../classes/ScrollHandling.js';
import State from '../classes/State.js';

// For future refactoring: https://stackoverflow.com/a/51753410

export default class ContentLoader extends Component {
  constructor(props) {
    super(props);

    const referrer = new Referrer(props);
    const location = new Location(
      referrer.pathToMatch,
      props
    );

    // The overflowRef is only used by /chapter. We've included
    // it by default to prevent a weird error when using the
    // Back and Forth buttons. Basically, this component runs
    // before App.cDU(). The currentCaller is temporarily out-
    // of-sync, which kicks an error if this property is too
    // specifically defined via a conditional.

    this.overflowRef = React.createRef();

    this.state = {
      isNotFound: !location.pathIsValid,
      needsRedirect: location.needsRedirect
    };
  }

  render() {
    const {
      isNotFound,
      needsRedirect
    } = this.state;
    const { currentCaller } = this.props.appState;
    let componentData;
    let location;
    let referrer;

    /** ComponentData contains configured Components
     *
     * Includes data from props, e.g., section
     * data (AKA, 'contentData').
     *
     * Note: ContentaLoader unmounts when users swap
     * sections, so there's no need to update
     * contentData when cDU() runs.
     */

    if (!needsRedirect && !isNotFound) {
      referrer = new Referrer(this.props);
      componentData = new ComponentData(
        referrer.location
      );
      location = new Location(
        referrer.pathToMatch,
        this.props
      );
    }

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
          // Possible 'home' value isn't an issue b/c it never routes here.
          path={`/${
            currentCaller
          }/menu`}
          render={
            () => {
              if (currentCaller === 'chapter') {
                return (
                  <Redirect
                    to="/not-found"
                  />
                );
              }

              return (
                <Menu
                  {...this.props}
                >
                  {componentData.getMenuContent(
                    this.props,
                    location.params
                  )}
                </Menu>
              );
            }
          }
        />
        <Route
          path={referrer.finalPath}
          render={
            () => componentData.getSection(
              this.props,
              this.overflowRef, // See note above
              location.params
            )
          }
        />
      </Switch>
    );
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
      const state = new State(
        this.props,
        location
      );

      // Pass handleClick to update bodyState

      state.rebuild(
        this.props.boundHandleClickForBody
      );

      // The scrollTop reset is not currently applied to
      // the '/projects', and '/journalism' routes because
      // they can only be changed via '/menu'.

      // It works for '/chapter', because it's changed
      // from the '/chapter' route.

      // If you want to expand this to include the
      // /projects and '/journalism', filter out
      // '/menu' paths, as they don't have an
      // overflowRef, so will kick an error.

      if (currentCaller === 'chapter') {
        const scrollHandler = new ScrollHandling(currentCaller);
        scrollHandler.resetElementTop(
          this.overflowRef,
          prevProps
        );
      }
    }
  }
}
