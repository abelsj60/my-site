import bio from '../data/about/about.md';
import linkedInIcon from '../../public/linked-in-icon.png';
import ContentHolder from '../primitives/ContentHolder.jsx';
import Main from '../primitives/Main.jsx';
import marked from 'marked';
import Overflow from '../primitives/Overflow.jsx';
import React from 'react';
import ReactGA from 'react-ga';
import ReactHtmlParser from 'react-html-parser';
import Shelf from '../shared/Shelf.jsx';
import styled from 'styled-components';

const RestyledShelf = styled(Shelf)`
  justify-content: space-between;
`;
const Hed = styled.h1`
  margin-top: -8px;
  font-size: ${p => p.theme.fontSizes.sixteen};
  color: ${p => p.theme.colors.pink};
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
    margin-bottom: 6px;
  }

  li p {
    margin-bottom: 6px;
  }

  p {
    margin-bottom: ${p => p.theme.bottomMargin.regular};
    // Gets cut off in chrome (add saveSerifs to ContentHolder)
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
        <RestyledShelf
          height="32px"
        >
          <Hed>
            Hi! I'm James
          </Hed>
          <IconContainer>
            <ReactGA.OutboundLink
              eventLabel="To LinkedIn"
              to="https://www.linkedin.com/in/jameserikabels"
              target="_blank"
            >
              <Icon src={linkedInIcon} />
            </ReactGA.OutboundLink>
          </IconContainer>
        </RestyledShelf>
        <Overflow>
          <Text>
            {ReactHtmlParser(
              marked(
                bio.body,
                { smartypants: true }
              )
            )}
          </Text>
        </Overflow>
      </ContentHolder>
    </Main>
  );
}
