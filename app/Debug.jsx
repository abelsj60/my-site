import Main from './primitives/Main.jsx';
import React, { Component } from 'react';
import ContentHolder from './primitives/ContentHolder.jsx';
import styled from 'styled-components';
import { isIOS } from 'react-device-detect';

const RestyledContentHolder = styled(ContentHolder)`
  width: 100%;
  overflow: auto;
`;
const Hed = styled.h1`
  font-size: ${p => p.theme.fontSizes.twenty};
  margin-top: 5px;
  margin-right: 20px; // Centers text on hat sanati
  margin-bottom: 25px;
`;

export default class Debug extends Component {
  render() {
    const resWidth = isIOS ? window.screen.height : window.screen.width;
    const resHeight = isIOS ? window.screen.width : window.screen.height;
    const timesPixelRatio = dim => Math.floor(Math.floor(window.devicePixelRatio) * dim);
    const type = isIOS ? 'true' : 'false';

    return (
      <Main>
        <RestyledContentHolder>
          <Hed>
            Debug
          </Hed>
          <p>window.screen.width: {resWidth}</p>
          <p>window.screen.height: {resHeight}</p>
          <p>---</p>
          <p>iOS: {type}</p>
          <p>devicePixelRatio: {isIOS ? Math.floor(window.devicePixelRatio) : window.devicePixelRatio}</p>
          <p>-</p>
          <p>width * devicePixelRatio: {timesPixelRatio(resWidth)}</p>
          <p>height * devicePixelRatio: {timesPixelRatio(resHeight)}</p>
          <p>---</p>
          <p>image width: {this.props.appState.images.width}</p>
          <p>image height: {this.props.appState.images.height}</p>
          <p>---</p>
          <p>window.screen.availHeight: {window.screen.availHeight}</p>
          <p>window.innerHeight: {window.innerHeight}</p>
          <p>window.innerWidth: {window.innerWidth}</p>
          <p>appState.height: {this.props.appState.height}</p>
        </RestyledContentHolder>
      </Main>
    );
  }

  componentDidMount() {
    this.props.boundHandleClickForApp('updateApp', 'debug');
  }
}
