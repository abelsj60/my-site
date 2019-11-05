import { cover } from 'intrinsic-scale';
import Main from './primitives/Main.jsx';
import React, { Component } from 'react';
import ContentHolder from './primitives/ContentHolder.jsx';
import styled from 'styled-components';
import {
  browserVersion,
  isIE,
  isMobile,
  isMobileSafari,
  isOpera,
  isTablet,
  osVersion
} from 'react-device-detect';

const RestyledContentHolder = styled(ContentHolder)`
  // flex: 1;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
`;
const Hed = styled.h1`
  // color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.twenty};
  margin-top: 5px;
  margin-right: 20px; // Centers text on hat sanati
  margin-bottom: 25px;
  // text-shadow: 3px 2px 2.5px rgba(0, 0, 0, .4);
`;

export default class Debug extends Component {
  render() {
    return (
      <Main>
        <RestyledContentHolder>
          <Hed>
            Debug
          </Hed>
          <p>window.screen.height: {window.screen.height}</p>
          <p>window.screen.width: {window.screen.width}</p>
          <p>image height: {this.props.appState.images.height}</p>
          <p>image width: {this.props.appState.images.width}</p>
          <p>window.innerHeight: {window.innerHeight}</p>
          <p>appState.height: {this.props.appState.height}</p>
        </RestyledContentHolder>
      </Main>
    );
  }

  componentDidMount() {
    this.props.boundHandleClickForApp('updateApp', 'debug');
  }
}
