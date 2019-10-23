import Main from '../primitives/Main.jsx';
import React, { Component } from 'react';
import ContentHolder from '../primitives/ContentHolder.jsx';
import styled from 'styled-components';
import urlPrefix from '../helpers/urlPrefix.js';

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
  // text-shadow: 3px 2px 2.5px rgba(0, 0, 0, .4);
`;
const Jinn = styled.img`
  pointer-events: none;
`;

export default class NotFound extends Component {
  render() {
    const src = this.props.appState.images.notFoundImage.src;
    return (
      <Main>
        <RestyledContentHolder>
            <Jinn
              // Inline styles used to allocate img space on load
              style={{
                height: 'auto',
                maxWidth: '310px',
                width: '100%'
              }}
              alt="404"
              src={`${urlPrefix}${src}`}
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
