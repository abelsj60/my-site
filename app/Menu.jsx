import React from 'react';
import MenuCloseButton from './MenuCloseButton.jsx';
import MenuDescription from './MenuDescription.jsx';

export default function Menu(props) {
  const { userLocation, link, text, children } = props;

  return (
    <main id="site-menu" className={`${userLocation}-menu`}>
      <MenuCloseButton link={link} />
      <MenuDescription text={text} />
      {children}
    </main>
  );
}
