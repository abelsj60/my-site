import React from 'react';
import styled from 'styled-components';

const MenuButton = styled.div`
  padding: 10px;
  border: ${props =>
    `0.5px solid ${props.storyText !== 'active' ? '#fd1172' : '#455057'}`};
  color: ${props => (props.storyText !== 'active' ? '#FFE74C' : '#6E7DAB')};
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: 25px;
  background-color: ${props => (props.storyText !== 'active' ? '#FD1172' : '')};
  width: 80px;
  text-align: center;

  &:hover {
    // background-color: lightskyblue;
    // color: white;
  }

  @media (min-width: 848px) {
    display: none;
  }
`;

export default function StoryButton(props) {
  if (!props.story) {
    return null;
  }

  const { showStoryText } = props;
  const storyText = showStoryText ? 'active' : '';
  const textForStoryButton = props.showStoryText ? 'Hide story' : 'Show story';

  return (
    <MenuButton
      storyText={storyText}
      onClick={() => props.boundHandleClickForApp('toggleStoryText')}
    >
      {textForStoryButton}
    </MenuButton>
  );
}