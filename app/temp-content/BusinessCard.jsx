import React, { Fragment } from 'react';
import styled from 'styled-components';

const BoyImage = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  pointer-events: none;
`;
const InfoContainer = styled.div`
  position: absolute;
  top: 4.5rem;
  right: 1.25rem;
  color: ${p => p.theme.colors.white};

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    right: 1.85rem;
  }
`;
const Name = styled.h1`
  border-bottom: 1px solid white;
  padding-bottom: 6px;
  font-size: ${p => p.theme.fontSizes.fifteen};
  
  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: ${p => p.theme.fontSizes.twentyFour};
  }
`;
const Pitch = styled.h2`
  padding-top: 5px;
  font-size: ${p => p.theme.fontSizes.two};
  font-weight: 500;
  
  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: ${p => p.theme.fontSizes.twentySix};
  }
`;
const Email = styled.p`
  position: absolute;
  bottom: 0rem;
  right: 1.25rem;
  color: ${p => p.theme.colors.white};
  font-weight: 500;
  font-size: ${p => p.theme.fontSizes.twentyFive};
  
  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    margin-bottom: 25px;
    font-size: ${p => p.theme.fontSizes.twentySeven};
    font-weight: unset;
    right: 1.85rem;
  }
`;

export default function BusinessCard(props) {
  const src = props.appState.images.businessCardImage.src;

  return (
    <Fragment>
      <BoyImage
        src={src}
      />
      <InfoContainer>
        <Name>
          James Abels
        </Name>
        <Pitch>
          Let's code your story
        </Pitch>
      </InfoContainer>
      <Email>
        hello@jamesabels.net
      </Email>
    </Fragment>
  )
}
