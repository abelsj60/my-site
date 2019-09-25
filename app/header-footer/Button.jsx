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
  background-color: unset; // otherwise, button grey
  border: 1px rgba(255, 255, 255, .6) solid;
  box-shadow: ${p => !p.showBusinessCard && !p.showLegalTerms && p.illustrationLevel >= 2 && !p.headerMenuIsOpen && '2px 2px 2.5px rgba(0, 0, 0, .4)'};
  transition: ${p => p.illustrationLevel > 0 && p.illustrationLevel < 3 ? 'box-shadow .35s' : ''};
  user-select: none;
  z-index: 0;

  :focus {
    outline: 0;
  }
`;
const Cover = styled.div`
  background-color: ${p => p.theme.colors.black};
  opacity: ${p => p.illustrationLevel >= 2 ? '.2' : '.125'}; // Multi-value?
  transition: ${p => p.illustrationLevel > 0 && 'opacity .35s'};
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
    illustrationLevel,
    headerMenuIsOpen,
    className,
    clickFunction,
    isStory,
    showBusinessCard,
    showLegalTerms,
    text
  } = props;

  return (
    <Structure
      className={className}
      isStory={isStory}
      headerMenuIsOpen={headerMenuIsOpen}
      showBusinessCard={showBusinessCard}
      showLegalTerms={showLegalTerms}
      illustrationLevel={illustrationLevel}
      onClick={clickFunction}
    >
      <Cover
        illustrationLevel={illustrationLevel}
      />
      <Text>
        {text}
      </Text>
    </Structure>
  );
}
