import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router';

import Menu from './Menu.jsx';

import Location from './custom/Location.js';
import Referrer from './custom/Referrer.js';
import ComponentData from './custom/ComponentData.js';

export default class ContentLoader extends Component {
  constructor(props) {
    super(props);

    const r = new Referrer(props);
    const l = new Location(r.pathToMatch, props);

    this.state = {
      isNotFound: !l.pathIsJustRight,
      needsRedirect: l.needsRedirect
    };
  }

  render() {
    const { needsRedirect, isNotFound } = this.state;

    /** ComponentData contains configured Components
     *
     * Includes data from and derived from props, e.g.,
     * all section data ('contentData').
     *
     * Note: ContentaLoader unmounts when users swap
     * sections, so there's no need to update
     * contentData when cDU() runs.
     */

    const r = new Referrer(this.props);
    let cD;

    if (!needsRedirect && !isNotFound) {
      cD = new ComponentData(r.location, this.props);
    }

    return needsRedirect ? (
      <Redirect to={{ pathname: '/i', state: `${r.location}` }} />
    ) : isNotFound ? (
      <Redirect to="/not-found" />
    ) : (
      <Switch>
        <Route
          path={`/${r.location}/menu`}
          render={() => {
            return (
              <Menu
                {...this.props}
                text={cD.getText()}
                link={`/${r.location}`}
              />
            );
          }}
        />
        <Route
          path={`${r.genericPath}`}
          render={() => {
            return cD.getSection();
          }}
        />
      </Switch>
    );
  }

  componentDidUpdate(prevProps) {
    const r = new Referrer(this.props);
    const l = new Location(r.pathToMatch, this.props, prevProps);

    if (l.needsRedirect) {
      const startRedirect = !this.state.needsRedirect;

      if (startRedirect) {
        this.setState({ needsRedirect: startRedirect });
      }
    } else if (l.isSwappingContent) {
      const paramOneAsIndex = l.params.oneToIndex();
      const paramTwoAsIndex = l.params.twoToIndex();

      if (paramOneAsIndex !== -1 && paramTwoAsIndex !== -1) {
        this.props.boundHandleClickForBody(paramOneAsIndex, paramTwoAsIndex);
      }
    }
  }
}
