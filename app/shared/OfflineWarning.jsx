import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 22px;
  background-color: ${p => p.theme.colors.yellow};
  position: absolute;
  top: 41px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;
const Warning = styled.p`
  margin-bottom: 0px;
  font-size: ${p => p.theme.fontSizes.one};
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
