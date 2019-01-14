import React from 'react';
import styled from 'styled-components';

const Graf = styled.p`
  margin: 0px;
  color: black;
`;

export default function Legal() {
  const copyrightYear = new Date().getFullYear();

  return <Graf>© {copyrightYear} James Abels. All rights reserved.</Graf>;
}
