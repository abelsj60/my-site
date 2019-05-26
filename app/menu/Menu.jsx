import Main from '../primitives/Main.jsx';
import MenuButton from '../shared/MenuButton.jsx';
import Overflow from '../primitives/Overflow.jsx';
import ContentHolder from '../primitives/ContentHolder.jsx';
import React from 'react';
import Shelf from '../shared/Shelf.jsx';

export default function Menu(props) {
  const { children } = props;

  return (
    <Main>
      <ContentHolder>
        <Shelf
          height="19px"
        >
          <MenuButton
            {...props}
          />
        </Shelf>
        <Overflow>
          {children}
        </Overflow>
      </ContentHolder>
    </Main>
  );
}
