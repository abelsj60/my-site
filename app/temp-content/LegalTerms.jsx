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
  margin-bottom: 6px;
  font-size: ${p => p.theme.fontSizes.one};
  font-weight: 400;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    margin-bottom: 12px;
    font-weight: 500;
    font-size: ${p => p.theme.fontSizes.eight};
  }
`;
const ClipCopyright = styled.span`
  font-size: ${p => p.theme.fontSizes.zero};
  
  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: ${p => p.theme.fontSizes.one};;
  }
`;

export default function LegalTerms(props) {
    // Styled as attribute for simplicity,
    // breaking it out above's a headache

    const linkOrTextForClips = props.appState.currentCaller !== 'journalism'
      ? (
        <StyledLink
          boundHandleClickForApp={props.boundHandleClickForApp}
          style={{
            color: 'white',
            textDecoration: 'underline'
          }}
          to="/journalism"
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
          left="1.25rem"
          width="1px"
        />
        <VerticleLine
          left="1.75rem"
          width="1px"
        />
        <VerticleLine
          left="2.25rem"
          width="1px"
        />
        <HorizontalLine 
          bottom="5.5rem"
          height="1px"
        />
        <HorizontalLine 
          bottom="4.85rem"
          height="1px"
        />
        <Legal>
          Legal
        </Legal>
        {legalNotice}
      </Fragment>
    )
}
