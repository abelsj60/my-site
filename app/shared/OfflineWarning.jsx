import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 13px;
  background-color: ${p => p.theme.colors.yellow};
  position: absolute;
  top: 41px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}, min-height: ${p => p.theme.mediaQueries.tinyView}) {
    height: 22px;
  }
`;
const Warning = styled.p`
  margin-bottom: 0px;
  font-size: ${p => p.theme.fontSizes.twentyFive};

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}, min-height: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: ${p => p.theme.fontSizes.one};
  }
`;

export default function OfflineWarning(props) {
  if (!props.appState.offline) {
    return null;
  }

  return (
    <Container>
      <Warning>
        OFFLINE!
      </Warning>
    </Container>
  );
}
