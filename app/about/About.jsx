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

  p {
    margin-bottom: ${p => p.theme.bottomMargin.regular};

    &:last-child {
      margin-bottom: 0px;
    }
  }
`;
const Icon = styled.div`
  height: 20px;
  width: 30px;
  margin-bottom: 6px;
  margin-right: 2px;
  background: url(${p => p.src}) no-repeat;
  background-size: contain;
`;
const IconContainer = styled.div`
  margin-top: 6px;
`;

export default function About() {
  return (
    <Main>
      <ContentHolder>
        <RestyledShelf
          height="27px"
        >
          <Hed>
            About
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
