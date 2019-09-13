import React from 'react';
import styled from 'styled-components';

const Structure = styled.button`
  display: ${p => !p.isStory ? 'none' : ''};
  margin-left: 25px;
  width: 69px;
  padding: 7px 0px;
  text-align: center;
  cursor: pointer;
  position: relative;
  background-color: unset;
  border: 1px rgba(255, 255, 255, .6) solid;
  box-shadow: ${p => p.boxShadow && '2px 2px 2.5px rgba(0, 0, 0, .4)'};
  transition: ${p => p.animateImageBlur && 'box-shadow .15s'};
  user-select: none;

  :focus {
    outline: 0;
  }
`;
const Cover = styled.div`
  background-color: ${p => p.theme.colors.black};
  opacity: ${p => !p.showStoryText ? '.2' : '.125'};
  transition: ${p => p.animateImageBlur && 'opacity .165s'};
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  z-index: -1;
`;
const Text = styled.p`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.one};
  font-weight: 400;
  margin-bottom: 0px;
`;

export default function Button(props) {
  const {
    animateImageBlur,
    boxShadow,
    className,
    clickFunction,
    isStory,
    showStoryText,
    text
  } = props;

  return (
    <Structure
      boxShadow={boxShadow}
      className={className}
      isStory={isStory}
      animateImageBlur={animateImageBlur}
      onClick={clickFunction}
    >
      <Cover 
        showStoryText={showStoryText}
        animateImageBlur={animateImageBlur}
      />
      <Text>
        {text}
      </Text>
    </Structure>
  );
}
