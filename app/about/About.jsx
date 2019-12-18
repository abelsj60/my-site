import bio from '../data/about/about.md';
import linkedInIcon from '../../docs/assets/images/convert-to-data-uri/linked-in-icon-80-@4x.png';
import ContentHolder from '../primitives/ContentHolder.jsx';
import Main from '../primitives/Main.jsx';
import me from '../../docs/assets/images/convert-to-data-uri/me-xnc-q90.jpg'
import marked from 'marked';
import Overflow from '../primitives/Overflow.jsx';
import React from 'react';
import ReactGA from 'react-ga';
import ReactHtmlParser from 'react-html-parser';
import Shelf from '../shared/Shelf.jsx';
import styled from 'styled-components';

const RestyledShelf = styled(Shelf)`
  justify-content: space-between;
  margin-bottom: 10px;
`;
const Hed = styled.h1`
  margin-top: -8px;
  font-size: ${p => p.theme.fontSizes.sixteen};
  color: ${p => p.theme.colors.pink};
`;
const Me = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;
const Text = styled.section`
  overflow: auto;

  blockquote {
    margin: 0px 0px 30px 0px;
    padding: 0px 20px 0px 20px;
    color: ${p => p.theme.colors.lightBlack};
    border-left: 15px solid ${p => p.theme.colors.lightBlack};
  }

  li {
    margin-bottom: 0px;
  }

  li p {
    margin-bottom: 14px;
  }

  ul li {
    margin-bottom: 14px;
  }

  p {
    margin-bottom: ${p => p.theme.bottomMargin.regular};
    // Gets cut off in chrome
    margin-left: 2px; 

    &:last-child {
      margin-bottom: 0px;
    }
  }
`;
const Icon = styled.div`
  height: 20px;
  width: 20px;
  margin-bottom: 6px;
  margin-right: 1px;
  background: url(${p => p.src}) no-repeat;
  background-size: contain;
`;
const IconContainer = styled.div`
  margin-top: 6px;
`;

export default function About() {
  return (
    <Main>
      <ContentHolder
        saveSerifs={true}
      >
        <RestyledShelf>
          <Hed>
            Hi! I'm James
          </Hed>
          <IconContainer>
            <ReactGA.OutboundLink
              eventLabel="To LinkedIn"
              target="_blank"
              to="https://www.linkedin.com/in/jameserikabels"
            >
              <Icon src={linkedInIcon} />
            </ReactGA.OutboundLink>
          </IconContainer>
        </RestyledShelf>
        <Overflow>
          <Me
            alt={bio.attributes.altImageText}
            src={me}
          />
          <Text>
            {ReactHtmlParser(marked(bio.body, { smartypants: true }))}
          </Text>
        </Overflow>
      </ContentHolder>
    </Main>
  );
}
