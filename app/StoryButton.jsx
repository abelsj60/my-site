import React from 'react';
import styled from 'styled-components';

const MenuButton = styled.div`
  padding: 10px;
  border: 0.5px solid grey;
  color: grey;
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: 25px;

  &:hover {
    background-color: lightskyblue;
    color: white;
  }

  @media (min-width: 848px) {
    display: none;
  }
`;

export default function StoryButton(props) {
  if (!props.story) {
    return null;
  }

  return (
    <MenuButton onClick={() => props.boundHandleClickForApp('showStoryText')}>
      {props.text}
    </MenuButton>
  );
}
