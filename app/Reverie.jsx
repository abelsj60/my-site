import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';
import marked from 'marked';
import reveries from './data/reveries/index';

const Main = styled.main`
  flex: 1;
  background-color: navy;
  color: white;
`;
const Content = styled.section`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;
const Name = styled.h1`
  margin-top: 0px;
  margin-bottom: 5px;
  font-size: 1.75rem;
  font-style: italic;
  color: deeppink;
`;
const Post = styled.section`
  overflow: auto;

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
    padding-left: 15px;
  }
`;
const Hed = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 7px;
`;
const PostDate = styled.p`
  font-style: italic;
  margin-bottom: 10px;
`;

export default class Reverie extends Component {
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
          <Name>Reverie</Name>
          <Post>
            <Hed>{hed}</Hed>
            <PostDate>{date}</PostDate>
            {ReactHtmlParser(marked(reverie.body, { smartypants: true }))}
          </Post>
        </Content>
      </Main>
    );
  }
}
