import React, { Fragment } from 'react';
import styled from 'styled-components';

const Debug = styled.div`
  margin-top: 10px;
  background-color: rgba(0, 0, 0, .5);
  color: white;
  padding: 10px;
  z-index: 5;
`;

export default function DebugHome(props) {
  return (
    <Fragment>
      <Debug>
        homePageLoaded: {props.appState.homePageLoaded.toString()}
      </Debug>
      <Debug>
        loadLevel: {props.homeState.loadLevel}
      </Debug>
      <Debug>
        loadLevels: [ {props.loadLevels.toString()} ]
      </Debug>
      <Debug>
        width x height: {props.appState.images.width.toString()} x {props.appState.images.height.toString()}
      </Debug>
    </Fragment>
  );
}