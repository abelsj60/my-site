import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router';

import Menu from './Menu.jsx';
import Location from './custom/Location.js';
import Referrer from './custom/Referrer.js';
import Data from './custom/Data.js';

export default class OneLoader extends Component {
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
      const paramOne = location.params.paramNames[0];
      const paramTwo = location.params.paramNames[1];
      const indexOne = location.params.toIndex(paramOne);
      const indexTwo = location.params.toIndex(paramTwo);

      // TODO Handling undefined chapter needs to better, w/o special checks

      if (
        (paramOne === 'chapter' || typeof indexOne === 'number') &&
        typeof indexTwo === 'number'
      ) {
        this.props.boundHandleClickForBody(indexOne, indexTwo);
      }
    }
  }

  render() {
    const { needsRedirect, isNotFound } = this.state;

    const r = new Referrer(this.props);
    const dataForLoader = new Data(r.location, this.props);

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
                text={dataForLoader.text}
                userLocation={`${r.location}`}
              >
                {dataForLoader.menuNavigator}
              </Menu>
            );
          }}
        />

        <Route
          path={`${r.path}`}
          render={() => {
            return dataForLoader.component;
          }}
        />
      </Switch>
    );
  }
}
