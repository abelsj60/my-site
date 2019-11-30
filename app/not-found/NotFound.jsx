import ContentHolder from '../primitives/ContentHolder.jsx';
import Main from '../primitives/Main.jsx';
import offlineImageToggle from '../helpers/offlineImageToggle.js';
import React, { Component } from 'react';
import styled from 'styled-components';

const RestyledContentHolder = styled(ContentHolder)`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Hed = styled.h1`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.twenty};
  margin-top: 5px;
  margin-right: 20px; // Centers text on hat sanati
`;
const Jinn = styled.img`
  pointer-events: none;
`;
const altImageText = "Uh-oh! A Jinni, drawn in shades of blue, blocks your way. He floats atop a vibrant pink background, conjuring mystery with an all-knowing smile and a strange goatee — three balls of light-blue light. Page not found."

export default class NotFound extends Component {
  render() {
    const { appState } = this.props;
    const src = offlineImageToggle(appState.offline, appState.images.notFoundImage.src);
    return (
      <Main>
        <RestyledContentHolder>
            <Jinn
              alt={altImageText}
              style={{
                height: 'auto',
                maxWidth: '310px',
                width: '100%'
              }}
              src={src}
            />
            <Hed>
              Not found
            </Hed>
        </RestyledContentHolder>
      </Main>
    );
  }

  componentDidMount() {
    this.props.boundHandleClickForApp('updateApp', 'not-found');
  }
}
