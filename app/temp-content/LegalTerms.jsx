import React, { Fragment } from 'react';
import styled from 'styled-components';
import StyledLink from '../primitives/StyledLink.jsx';

const VerticleLine = styled.div`
  width: ${p => p.width};
  height: 100%;
  position: absolute;
  left: ${p => p.left};
  top: 0px;
  background-color: ${p => p.theme.colors.yellow};
`;
const HorizontalLine = styled.div`
  width: 100%;
  height: ${p => p.height};
  position: absolute;
  bottom: ${p => p.bottom};
  left: 0px;
  background-color: ${p => p.theme.colors.yellow};
`;
const Legal = styled.h1`
  position: absolute;
  right: 2rem;
  bottom: 1rem;
  color: ${p => p.theme.colors.yellow};
  font-size: 2.25rem;
`;
const MyCopyright = styled.span`
  display: block;
  margin-bottom: 5px;
  font-size: ${p => p.theme.fontSizes.zero};
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    margin-bottom: 12px;
    font-size: ${p => p.theme.fontSizes.eight};
  }
`;
const ClipCopyright = styled.span`
  font-size: ${p => p.theme.fontSizes.zero};
  font-family: 'Montserrat', sans-serif;
  
  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: ${p => p.theme.fontSizes.one};;
  }
`;

export default function LegalTerms(props) {
    // Styled as attribute for simplicity,
    // breaking it out above's a headache

    const linkOrTextForClips =
      props.appState.currentCaller !== 'journalism'
        ? (
          <StyledLink
            style={{
              color: 'white',
              textDecoration: 'underline'
            }}
            to="/journalism"
            boundHandleClickForApp={props.boundHandleClickForApp}
          >
            clips
          </StyledLink>
        ) : 'clips';

    // The following HTML is span, not a <p>, b/c it's nested in
    // a <p> (React doesn't allow <p> nesting, kicks a warning).

    const legalNotice =
      (
        <span
          style={{
            position: 'absolute',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            paddingLeft: '2.25rem',
            boxSizing: 'border-box'
          }}
        >
          <MyCopyright>
            © {new Date().getFullYear()}, James Abels. All rights reserved.
          </MyCopyright>
          <ClipCopyright>
            All {linkOrTextForClips} owned by their respective publisher.
          </ClipCopyright>
        </span>
      );

    return (
      <Fragment>
        <VerticleLine
          width="1px"
          left="1.25rem"
        />
        <VerticleLine
          width="1px"
          left="1.75rem"
        />
        <VerticleLine
          width="1px"
          left="2.25rem"
        />
        <HorizontalLine 
          height="1px"
          bottom="5.5rem"
        />
        <HorizontalLine 
          height="1px"
          bottom="4.85rem"
        />
        <Legal>
          Legal
        </Legal>
        {legalNotice}
      </Fragment>
    )
}
