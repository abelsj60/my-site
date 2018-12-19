import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router';

import Menu from './Menu.jsx';
import Location from './custom/Location.js';
import Referrer from './custom/Referrer.js';
import Data from './custom/Data.js';

export default class ContentLoader extends Component {
  constructor(props) {
    super(props);

    const r = new Referrer(props);
    const location = new Location(r.pathToMatch, props);

    this.state = {
      isNotFound: !location.pathIsJustRight,
      needsRedirect: location.needsRedirect
    };
  }

  componentDidUpdate(prevProps) {
    const r = new Referrer(this.props);
    const location = new Location(r.pathToMatch, this.props, prevProps);

    if (location.needsRedirect) {
      const startRedirect = !this.state.needsRedirect;

      if (startRedirect) {
        this.setState({ needsRedirect: startRedirect });
      }
    } else if (location.isSwappingContent) {
      const paramOneAsIndex = location.params.oneToIndex();
      const paramTwoAsIndex = location.params.twoToIndex();

      if (paramOneAsIndex !== -1 && paramTwoAsIndex !== -1) {
        this.props.boundHandleClickForBody(paramOneAsIndex, paramTwoAsIndex);
      }
    }
  }

  render() {
    const { needsRedirect, isNotFound } = this.state;

    const r = new Referrer(this.props);
    const data = new Data(r.location, this.props);

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
                link={`/${r.location}`}
                text={data.getText()}
                userLocation={`${r.location}`}
              >
                {data.getMenuNavigator()}
              </Menu>
            );
          }}
        />
        <Route
          path={`${r.path}`}
          render={() => {
            return data.getComponent();
          }}
        />
      </Switch>
    );
  }
}
