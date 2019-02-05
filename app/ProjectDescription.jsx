import React, { Fragment } from 'react';
import styled from 'styled-components';

const Hed = styled.h1`
  color: #6e7dab;
  font-size: 1.7rem;
  margin-top: 0px;
  margin-bottom: 5px;
  font-weight: normal;
`;
const Graf = styled.p`
  // color: #455057;
  font-size: 1.5rem;
  margin-top: 0px;
  margin-bottom: 10px;
`;
const TopGraf = styled(Graf)`
  // color: #455057;
  font-size: 1.7rem;
`;

function formatKeyForDisplay(name, data) {
  const key = data.find(k => k === name);
  return key[0].toUpperCase() + key.slice(1);
}

export default function ProjectDescription(props) {
  const { details } = props.project.attributes;
  const { type, contribution, description } = details;
  const projectKeys = Object.keys(details);

  return (
    <Fragment>
      <TopGraf>{type}</TopGraf>
      <Hed>{formatKeyForDisplay('contribution', projectKeys)}</Hed>
      <Graf>{contribution}</Graf>
      <Hed>{formatKeyForDisplay('description', projectKeys)}</Hed>
      <Graf>{description}</Graf>
    </Fragment>
  );
}
