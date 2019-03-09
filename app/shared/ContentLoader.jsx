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
import Scroll from '../classes/Scroll.js';
import State from '../classes/State.js';

export default class ContentLoader extends Component {
  constructor(props) {
    super(props);

    const referrer = new Referrer(props);
    const location = new Location(
      referrer.pathToMatch,
      props
    );

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
        referrer.location,
        this.props
      );
      location = new Location(
        referrer.pathToMatch,
        this.props
      );
    }

    return needsRedirect ? (
      <Redirect to="/i" />
    ) : isNotFound ? (
      <Redirect to="/not-found" />
    ) : (
      <Switch>
        <Route
          exact
          path={`/${
            location.type
          }/menu`}
          render={
            () => {
              if (location.type === 'chapter') {
                return <Redirect to="/not-found" />;
              }

              return (
                <Menu {...this.props}>
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
              this.overflowRef,
              location.params
            )
          }
        />
      </Switch>
    );
  }

  componentDidUpdate(prevProps) {
    const referrer = new Referrer(this.props);
    const location = new Location(
      referrer.pathToMatch,
      this.props,
      prevProps
    );

    if (location.needsRedirect) {
      this.setState({ needsRedirect: true });
    } else if (location.isSwappingContent) {
      const state = new State(
        this.props,
        location
      );

      state.rebuild(
        this.props.boundHandleClickForBody
      );

      if (this.overflowRef.current) {
        const scroll = new Scroll(location);

        scroll.resetTopIfNeeded(
          this.overflowRef,
          prevProps
        );
      }
    }
  }
}
