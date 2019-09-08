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
  right: 1.5rem;
  color: ${p => p.theme.colors.white};

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    right: 2.1rem;
  }
`;
const Name = styled.h1`
  border-bottom: 1px solid white;
  padding-bottom: 6px;
  font-size: ${p => p.theme.fontSizes.fifteen};
  
  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: ${p => p.theme.fontSizes.eighteen};
  }
`;
const Pitch = styled.h2`
  padding-top: 5px;
  font-size: ${p => p.theme.fontSizes.zero};
  
  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: ${p => p.theme.fontSizes.twentyThree};
  }
`;
const Email = styled.p`
  position: absolute;
  bottom: 0rem;
  right: 1.5rem;
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.one};
  
  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: ${p => p.theme.fontSizes.eight};
  }
`;

export default function BusinessCard() {
  const src = 'https://user-images.githubusercontent.com/30417590/64480217-8696be80-d191-11e9-994f-b8bd71243766.png';

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
