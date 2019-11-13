import React, { Fragment } from 'react';
import styled from 'styled-components';
import teenFairyImage from '../../docs/assets/images/convert-to-data-uri/teen-fairy-img-q90-640-4x.jpg';

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
    font-size: ${p => p.theme.fontSizes.six};
    font-weight: unset;
    right: 1.85rem;
  }
`;

export default function BusinessCard() {
  const altImageText = "A young teenage boy with big brown eyes and left hand on hip grins from the vibrant pink business card. He's wearing a mint-green sweatshirt. Dark circles ring the upper part of each arm. A magical fairy floats by his left shoulder, fairy dust sparkling around her."

  return (
    <Fragment>
      <BoyImage
        alt={altImageText}
        src={teenFairyImage}
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
