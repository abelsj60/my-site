import React, { Fragment } from 'react';
import styled from 'styled-components';

const Hed = styled.h1`
  font-size: 1.5rem;
  font-style: italic;
  margin-top: 0px;
  margin-bottom: 7px;
`;
const Graf = styled.p`
  font-size: 1.7rem;
  margin-top: 0px;
  margin-bottom: 15px;
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
      <Graf>{type}</Graf>
      <Hed>{formatKeyForDisplay('contribution', projectKeys)}</Hed>
      <Graf>{contribution}</Graf>
      <Hed>{formatKeyForDisplay('description', projectKeys)}</Hed>
      <Graf>{description}</Graf>
    </Fragment>
  );
}
