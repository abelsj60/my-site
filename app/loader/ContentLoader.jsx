import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router';

import Menu from '../Menu/Menu.jsx';

import Location from '../custom/Location.js';
import Referrer from '../custom/Referrer.js';
import ComponentData from '../custom/ComponentData.js';

export default class ContentLoader extends Component {
  constructor(props) {
    super(props);

    const r = new Referrer(props);
    const l = new Location(r.pathToMatch, props);

    this.overflowRef = React.createRef();

    this.state = {
      isNotFound: !l.pathIsJustRight,
      needsRedirect: l.needsRedirect
    };
  }

  render() {
    const { needsRedirect, isNotFound } = this.state;
    const r = new Referrer(this.props);
    let cD;

    /** ComponentData contains configured Components
     *
     * Includes data from and derived from props, e.g.,
     * all section data ('contentData').
     *
     * Note: ContentaLoader unmounts when users swap
     * sections, so there's no need to update
     * contentData when cDU() runs.
     */

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
            return cD.getSection(this.props, this.overflowRef);
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
      let paramOneAsIndex;
      let paramTwoAsIndex;

      switch (l.type) {
        case 'chapter':
          paramOneAsIndex = l.params.titleToIndex();
          break;
        case 'projects':
          paramOneAsIndex = l.params.projectNameToIndex();
          paramTwoAsIndex = l.params.projectThumbnailToIndex();
          break;
        case 'journalism':
          paramOneAsIndex = l.params.publicationToIndex();
          paramTwoAsIndex = l.params.headlineToIndex();
          break;
        case 'reverie':
          paramOneAsIndex = l.params.headlineToIndex();
          break;
      }

      if (paramOneAsIndex !== -1 && paramTwoAsIndex !== -1) {
        this.props.boundHandleClickForBody(paramOneAsIndex, paramTwoAsIndex);

        if (this.overflowRef.current.scrollTop !== 0) {
          const isProjects = l.type === 'projects';
          const lastIndexForProjectData =
            prevProps.localState.indexForProjectData;
          const updateScrollTop = isProjects
            ? paramOneAsIndex !== lastIndexForProjectData
            : true;

          if (updateScrollTop) {
            this.overflowRef.current.scrollTop = 0;
          }
        }
      }
    }
  }
}
