import React from 'react';
import styled from 'styled-components';

const Graf = styled.p`
  margin: 0px;
  padding: 35px;
  background-color: white;
  font-size: 1.4rem;
  box-shadow: 0 0 0.75em black;
`;

export default function Legal() {
  const copyrightYear = new Date().getFullYear();
  return <Graf>© {copyrightYear} James Abels. All rights reserved.</Graf>;
}
