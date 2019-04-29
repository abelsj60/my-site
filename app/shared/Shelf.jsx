import React from 'react';
import styled from 'styled-components';

export default styled(
  // Filter out height from div
  // eslint-disable-next-line
  ({ height, ...rest }) => <div {...rest} />
)`
  height: ${p => p.height};
  display: flex;
  // https://philipwalton.com/articles/normalizing-cross-browser-flexbox-bugs/
  flex-shrink: 0; 
  margin-right: 25px;
  margin-bottom: 24px; 
`;
