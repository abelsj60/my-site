import React from 'react';

export default function HeaderIcon() {
  return (
    <section
      id="nav-icon"
      onClick={() => {
        this.props.toggleHeaderMenu();
      }}
    />
  );
}
