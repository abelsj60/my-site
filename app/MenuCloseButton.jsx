import React from 'react';
import { Link } from 'react-router-dom';

export default function CloseButton(props) {
  const { link } = props;
  return (
    <Link id="close-button" to={link}>
      <p>✘</p>
    </Link>
  );
}
