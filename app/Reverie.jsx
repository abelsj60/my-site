import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';
import marked from 'marked';

import Hed from './Hed.jsx';
import Graf from './Graf.jsx';
import Main from './Main.jsx';
import Right from './Right.jsx';
import Left from './Left.jsx';
import Overflow from './Overflow.jsx';
import ReverieNav from './ReverieNav.jsx';
import MenuButton from './MenuButton.jsx';

import Referrer from './custom/Referrer.js';
import Location from './custom/Location.js';

const Text = styled.section`
  p {
    font-size: 1.6rem;
  }

  img,
  p {
    margin-top: 0px;
  }

  ol,
  p {
    margin-bottom: 10px;
  }

  ol {
    margin-top: 10px;
  }
`;

export default function Reverie(props) {
  const { data, overflowRef } = props;

  const r = new Referrer(props);
  const l = new Location(r.pathToMatch, props);

  const indexForReverieData = l.params.headlineToIndex();

  const reverie = data[indexForReverieData];
  const { headline, date } = reverie.attributes;

  return (
    <Main>
      <Left>
        <ReverieNav {...props} data={data} />
      </Left>
      <Right>
        <MenuButton {...props} />
        <Overflow ref={ref => (overflowRef.current = ref)}>
          <Hed as="h2" normal italic size="1.5" color="pink">
            Reverie
          </Hed>
          <Hed size="3" bottom="7">
            {headline}
          </Hed>
          <Graf italic size="1.4" top="15" bottom="15">
            {date}
          </Graf>
          <Text>
            {ReactHtmlParser(marked(reverie.body, { smartypants: true }))}
          </Text>
        </Overflow>
      </Right>
    </Main>
  );
}
