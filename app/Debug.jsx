import Main from './primitives/Main.jsx';
import React, { Component } from 'react';
import ContentHolder from './primitives/ContentHolder.jsx';
import styled from 'styled-components';
import { isIOS, isMobile } from 'react-device-detect';

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
    const type = isIOS ? 'true' : 'false';
    const devicePixelRatio = window.devicePixelRatio;
    const devicePixelRatio2 = isIOS ? Math.floor(window.devicePixelRatio) : window.devicePixelRatio;
    const timesPixelRatio = dimension => Math.floor(devicePixelRatio * dimension);
    // Desktops get it right, mobile may not— check if height is bigger than width
    const widthType = window.screen.height > window.screen.width ? 'widthIsHeight' : 'widthIsWidth';
    const screenWidth = widthType === 'widthIsHeight' ? window.screen.height : window.screen.width;
    const screenHeight = widthType === 'widthIsHeight' ? window.screen.width : window.screen.height;
    const resWidth = timesPixelRatio(screenWidth);
    const resHeight = timesPixelRatio(screenHeight);

    const bodyEl = document.getElementsByTagName('body')[0];
    const bodyRect = bodyEl.getBoundingClientRect();

    return (
      <Main>
        <RestyledContentHolder>
          <Hed>
            Debug
          </Hed>
          <p>window.screen.width: {window.screen.width}</p>
          <p>window.screen.height: {window.screen.height}</p>
          <p>-</p>
          <p>widthType: {widthType}</p>
          <p>-</p>
          <p>width (my algorithm): {screenWidth}</p>
          <p>height (my algorithm): {screenHeight}</p>
          <p>---</p>
          <p>iOS: {type}</p>
          <p>window.devicePixelRatio: {devicePixelRatio}</p>
          <p>my pixelRatio: {devicePixelRatio2}</p>
          <p>-</p>
          <p>resolution width: {resWidth}</p>
          <p>resolution height: {resHeight}</p>
          <p>---</p>
          <p>image width: {this.props.appState.images.width}</p>
          <p>image height: {this.props.appState.images.height}</p>
          <p>---</p>
          <p>window.pageYOffset: {window.pageYOffset}</p>
          <p>appState.height: {this.props.appState.height}</p>
          <p>app height: {this.props.appState.height + 55 + 52}</p>
          <p>bodyRect.y: {bodyRect.y}</p>
          <p>window.availHeight: {window.screen.availHeight}</p>
        </RestyledContentHolder>
      </Main>
    );
  }

  componentDidMount() {
    this.props.boundHandleClickForApp('updateApp', 'debug');
  }
}
