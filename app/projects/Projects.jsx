import React, { Fragment } from 'react';
import styled from 'styled-components';

import Hed from '../primitives/Hed.jsx';
import Main from '../primitives/Main.jsx';
import Right from '../primitives/Right.jsx';
import Left from '../primitives/Left.jsx';
import Overflow from '../primitives/Overflow.jsx';
import MenuButton from '../shared/MenuButton.jsx';
import ProjectNav from './ProjectNav.jsx';
import Graf from '../primitives/Graf.jsx';
import Mapper from '../shared/Mapper.jsx';
import DesktopProjectNav from './DesktopProjectNav.jsx';

import Referrer from '../custom/Referrer.js';
import Location from '../custom/Location.js';

const Images = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 10px;
  border: 0.5px solid #6e7dab;

  @media (min-width: 672px) {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }

  @media (min-width: 848px) {
    flex-direction: column;
  }

  @media (min-width: 1048px) {
    flex-direction: row-reverse;
  }
`;
const Container = styled.section`
  @media (min-width: 672px) {
    display: flex;
    flex-direction: column;
  }
`;
const Caption = styled.p`
  display: flex;
  margin-top: 7px;
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: #6e7dab;

  @media (min-width: 672px) {
    margin-top: 0;
  }

  @media (min-width: 848px) {
    margin-top: 10px;
  }

  @media (min-width: 1048px) {
    margin-top: 0;
  }
`;
const Image = styled.img`
  flex: 1;
  max-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
  color: #455057;
  font-size: 1.5rem;

  @media (min-width: 672px) {
    margin-right: 10px;
  }

  @media (min-width: 848px) {
    margin-right: 0px;
  }

  @media (min-width: 1048px) {
    margin-right: 10px;
  }
`;

export default function Projects(props) {
  // Todo Can use params for caption/source, rather than return state'

  const { localState, data, projectIndex, overflowRef } = props;
  const { indexForProjectPics } = localState;

  const r = new Referrer(props);
  const l = new Location(r.pathToMatch, props);

  const indexForProjectData = l.params.projectNameToIndex();
  const project = data[indexForProjectData];
  const { full, details } = project.attributes;
  const { captions, name, type, contribution, description } = details;
  const caption = captions[indexForProjectPics];
  const source = full[indexForProjectPics];
  const mapData = [{ contribution }, { description }];
  const keys = ['Contribution', 'Description'];

  return (
    <Main>
      <Left>
        <DesktopProjectNav
          data={data}
          section={'projects'}
          localState={localState}
          projectIndex={projectIndex}
        />
      </Left>
      <Right>
        <MenuButton {...props} />
        <Overflow ref={ref => (overflowRef.current = ref)}>
          <Hed color="pink" size="2.5" bottom="6" bigTop="-4">
            {name}
          </Hed>
          <section>
            <Hed as="h2" normal size="1.7" bottom="10">
              {type}
            </Hed>
            <Mapper
              mapData={mapData}
              render={(proj, idx) => (
                <Fragment key={idx}>
                  <Hed as="h3" normal color="blue" size="1.7" bottom="5">
                    {keys[idx]}
                  </Hed>
                  <Graf top="0" bottom="10">
                    {proj[keys[idx].toLowerCase()]}
                  </Graf>
                </Fragment>
              )}
            />
            <Images>
              <ProjectNav
                isRight={true}
                project={project}
                activeProject={true}
                localState={localState}
              />
              <Container>
                <Caption>{caption}</Caption>
                <Image src={source} alt="mainPic" />
              </Container>
            </Images>
          </section>
        </Overflow>
      </Right>
    </Main>
  );
}
