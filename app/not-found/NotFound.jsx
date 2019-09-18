import Main from '../primitives/Main.jsx';
import React, { Component } from 'react';
import ContentHolder from '../primitives/ContentHolder.jsx';
import styled from 'styled-components';

const RestyledContentHolder = styled(ContentHolder)`
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin-right: 25px;
`;
const Hed = styled.h1`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.twenty};
  text-shadow: 3px 2px 2.5px rgba(0, 0, 0, .4);
  margin-right: 20px;

  @media (min-width: 559px) {
  }
`;
const Jinn = styled.img`
  margin-bottom: auto;
  pointer-events: none;

  @media (min-width: 554px) {
    margin-bottom: unset;
  }
`;

export default class NotFound extends Component {
  render() {
    const src = this.props.appState.images.notFoundImage.src;
    return (
      <Main>
        <RestyledContentHolder>
          <Hed>
            Not found.
          </Hed>
          <Jinn
            // Inline styles used to allocate img space on load
            style={{
              height: 'auto',
              width: '100%',
              maxWidth: '310px'
            }}
            alt="404"
            src={src}
          />
        </RestyledContentHolder>
      </Main>
    );
  }

  componentDidMount() {
    this.props.boundHandleClickForApp('updateApp', 'not-found');
  }
}
