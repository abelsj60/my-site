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
      <Redirect to="/i" />
    ) : isNotFound ? (
      <Redirect to="/not-found" />
    ) : (
      <Switch>
        <Route
          path={`/${r.location}/menu`}
          render={() => {
            return <Menu {...this.props} />;
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
      let readyToUpdateState;
      let pOneIndex;
      let pTwoIndex;

      switch (l.type) {
        case 'chapter':
          pOneIndex = l.params.titleToIndex();
          readyToUpdateState = pTwoIndex !== -1;
          break;
        case 'projects':
          pOneIndex = l.params.projectNameToIndex();
          pTwoIndex = l.params.projectThumbnailToIndex();
          readyToUpdateState = pOneIndex !== -1 && pTwoIndex !== -1;
          break;
        case 'journalism':
          pOneIndex = l.params.publicationToIndex();
          pTwoIndex = l.params.headlineToIndex();
          readyToUpdateState = pOneIndex !== -1 && pTwoIndex !== -1;
          break;
        case 'reverie':
          pOneIndex = l.params.headlineToIndex();
          readyToUpdateState = pOneIndex !== -1;
          break;
      }

      if (readyToUpdateState) {
        this.props.boundHandleClickForBody(pOneIndex, pTwoIndex);
      }
    }
  }
}
