import Main from '../primitives/Main.jsx';
import MenuButton from '../shared/MenuButton.jsx';
import Overflow from '../primitives/Overflow.jsx';
import ContentHolder from '../primitives/ContentHolder.jsx';
import React from 'react';
import Shelf from '../shared/Shelf.jsx';
import styled from 'styled-components';

const RestyledOverflow = styled(Overflow)`
  // The negative margin works in tandem with a positive padding of 5px in child
  // components to ensure that the full accessibility outline can be seen.
  // It gets cut off otherwise.
  margin-left: -5px;
`;

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
        <RestyledOverflow>
          {children}
        </RestyledOverflow>
      </ContentHolder>
    </Main>
  );
}
