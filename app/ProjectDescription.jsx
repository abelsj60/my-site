import React, { Fragment } from 'react';

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
      <p id="type">{type}</p>
      <h2>{formatKeyForDisplay('contribution', projectKeys)}</h2>
      <p>{contribution}</p>
      <h2>{formatKeyForDisplay('description', projectKeys)}</h2>
      <p>{description}</p>
    </Fragment>
  );
}
