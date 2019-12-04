import React from 'react';
import styled from 'styled-components';

const Structure = styled.button`
  display: ${p => !p.isStory ? 'none' : ''};
  // Double check here, the footer container is blurred by headerMenu in Footer
  // Here, we just need to handle the business card and legal terms
  filter: ${p => p.theme.blurForTempContent && p.tempContent < 3 && p.theme.blur};
  margin-left: 25px;
  width: 69px;
  padding: 7px 0px;
  text-align: center;
  cursor: pointer;
  position: relative;
  background-color: unset; // otherwise, button grey
  border: 1px rgba(255, 255, 255, .6) solid;
  // Can be a heavy transition, trying will-change + fallback.
  ${p => p.illustrationLevel > 0 && 'will-change: box-shadow;'}
  ${p => p.illustrationLevel > 0 && 'transform: translate3d(0, 0, 0);'}
  box-shadow: ${p => p.tempContent < 1 && ((p.illustrationDirection === 'enter' && p.illustrationLevel >= 2) || (p.illustrationDirection === 'exit' && p.illustrationLevel > 2)) && '2px 2px 2.5px rgba(0, 0, 0, .3)'};
  // Note: Transitition timing is faster than its siblings w/hardware acceleration (.25s) and slower w/o it (.5s)
  transition: ${p => p.illustrationLevel > 0 && p.illustrationLevel < 3 ? 'box-shadow .23s' : ''};
  user-select: none;
  z-index: 0;

  :focus {
    outline: 0;
  }
`;
const Cover = styled.div`
  background-color: ${p => p.theme.colors.black};
  opacity: ${p => p.illustrationLevel >= 2 ? '.2' : '.125'}; // Multi-value?
  transition: ${p => p.illustrationLevel > 0 && 'opacity .23s'};
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
    className,
    clickFunction,
    illustrationDirection,
    illustrationLevel,
    isStory,
    tempContent,
    text
  } = props;

  return (
    <Structure
      className={className}
      illustrationDirection={illustrationDirection}
      illustrationLevel={illustrationLevel}
      isStory={isStory}
      onClick={clickFunction}
      tempContent={tempContent}
    >
      <Cover
        className={className}
        illustrationLevel={illustrationLevel}
      />
      <Text>
        {text}
      </Text>
    </Structure>
  );
}
