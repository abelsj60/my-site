import React, { Fragment } from 'react';
import ReactGA from 'react-ga';
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
const Content = styled.span`
  position: absolute;
  color: white;
  height: 100%;
  width: 100%;
  padding-left: 2.25rem;
  box-sizing: border-box;
`;
const LegalHed = styled.h1`
  position: absolute;
  right: 2rem;
  bottom: 1rem;
  color: ${p => p.theme.colors.yellow};
  font-size: 2.25rem;
`;
const MyCopyright = styled.span`
  display: block;
  margin-top: 14%;
  margin-bottom: 6px;
  font-size: ${p => p.theme.fontSizes.twentyFive};
  font-weight: 400;
  text-align: center;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    margin-bottom: 14px;
    font-weight: 500;
    font-size: ${p => p.theme.fontSizes.six};
  }
`;
const ClipCopyright = styled.span`
  display: block;
  font-size: ${p => p.theme.fontSizes.zero};
  text-align: center;
  margin-bottom: 6px;
  
  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: ${p => p.theme.fontSizes.one};
    margin-bottom: 13px;
  }
`;
const PixsyNotice = styled.span`
  display: block;
  font-size: ${p => p.theme.fontSizes.zero};
  text-align: center;
  margin-bottom: 6px;
  
  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: ${p => p.theme.fontSizes.one};
    margin-bottom: 12px;
  }
`;
const RestyledLink = styled(({ tabbed, ...rest }) => <StyledLink {...rest} />)`
  &:focus {
    // Special outline color when headerMenu is open on narrow screens!
    ${p => p.tabbed && 'outline: white dashed 3px;'}
  }
`;

export default function LegalTerms(props) {
  const tabbed = props.appState.tabbed;
  // Styled as attribute for simplicity, doing it above's a headache
  const linkTextForClipCopyright = props.appState.currentCaller !== 'journalism'
    ? (
      <RestyledLink
        boundHandleClickForApp={props.boundHandleClickForApp}
        style={{
          color: 'white',
          textDecoration: 'underline'
        }}
        tabbed={tabbed}
        to="/journalism"
      >
        Clips
      </RestyledLink>
    ) : 'Clips';
  const linkToPixsy = (
    <ReactGA.OutboundLink
      eventLabel="To Pixsy"
      // Used to set focus color in App Component
      id='pixsyLink'
      style={{
        color: 'white',
        textDecoration: 'underline'
      }}
      target="_blank"
      to="https://www.pixsy.com/protected-by-pixsy/warning/"
    >
      Pixsy
    </ReactGA.OutboundLink>
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
      <Content>
        <MyCopyright
          tabbed={tabbed}
        >
          © {new Date().getFullYear()}, James Abels LLC. All rights reserved.
        </MyCopyright>
        <ClipCopyright
          tabbed={tabbed}
        >
          {linkTextForClipCopyright} owned by their respective publisher.
        </ClipCopyright>
        <PixsyNotice>
          Illustrations protected by {linkToPixsy}.
        </PixsyNotice>
      </Content>
      <LegalHed>
        Legal
      </LegalHed>
    </Fragment>
  )
}
