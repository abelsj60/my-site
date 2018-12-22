import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';
import marked from 'marked';
import reveries from './data/reveries/index';

const Main = styled.main`
  background-color: navy;
  color: white;
`;
const Content = styled.section`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;
const Title = styled.h1`
  margin-bottom: 5px;
  font-size: 1.75rem;
  font-style: italic;
  color: deeppink;
`;
const Post = styled.section`
  overflow: auto;

  p {
    margin-bottom: 10px;
  }

  img {
    margin-bottom: 10px;
  }

  ol {
    padding-left: 15px;
  }
`;
const Hed = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 7px;
`;
const Date = styled.p`
  margin-bottom: 10px;
`;

class Reverie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latestReverie: reveries[0],
      pastReveries: reveries.slice(1)
    };
  }

  render() {
    const reverie = this.state.latestReverie;
    const { hed, date } = reverie.attributes;

    return (
      <Main>
        <Content>
          <Title>Reverie</Title>
          <Post>
            <Hed>{hed}</Hed>
            <Date>{date}</Date>
            {ReactHtmlParser(marked(reverie.body, { smartypants: true }))}
          </Post>
        </Content>
      </Main>
    );
  }
}

export default Reverie;
