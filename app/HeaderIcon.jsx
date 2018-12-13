import React from 'react';

export default function HeaderIcon(props) {
  return (
    <section
      id="nav-icon"
      onClick={() => {
        props.toggleHeaderMenu();
      }}
    />
  );
}
