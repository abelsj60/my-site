import DesktopProjectNav from './DesktopProjectNav.jsx';
import Graf from '../primitives/Graf.jsx';
import Hed from '../primitives/Hed.jsx';
import Left from '../primitives/Left.jsx';
import Main from '../primitives/Main.jsx';
import Mapper from '../shared/Mapper.jsx';
import MenuButton from '../shared/MenuButton.jsx';
import Overflow from '../primitives/Overflow.jsx';
import ProjectNav from './ProjectNav.jsx';
import React, { Fragment } from 'react';
import Right from '../primitives/Right.jsx';
import styled from 'styled-components';

const RestyledLeft = styled(Left)`
  @media (min-width: 848px) {
    margin-left: 23px;
  }
`;
const Images = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 1px;
  padding: 10px;
  border: 0.5px solid #6e7dab;

  @media (min-width: 672px) {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }

  @media (min-width: 848px) {
    flex-direction: column;
  }

  @media (min-width: 1026px) {
    flex-direction: row-reverse;
  }
`;
const RestyledRight = styled(Right)`
  margin-left: 25px;
`;
const Figure = styled.figure`
  margin: 0px;

  @media (min-width: 672px) {
    display: flex;
    flex-direction: column;
  }
`;
const Caption = styled.figcaption`
  display: flex;
  margin-top: 7px;
  margin-bottom: 10px;
  margin-right: 10px;
  font-size: 1.3rem;
  color: #6e7dab;

  @media (min-width: 672px) {
    margin-top: 0;
  }

  @media (min-width: 848px) {
    margin-top: 10px;
  }

  @media (min-width: 1026px) {
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

  @media (min-width: 1026px) {
    margin-right: 10px;
  }
`;

export default function Projects(props) {
  const {
    data,
    overflowRef,
    params
  } = props;

  const indexForProjectData = params.projectNameToIndex();
  const indexForProjectPics = params.projectThumbnailToIndex();
  const project = data[indexForProjectData];

  const {
    captions,
    contribution,
    description,
    full,
    projectName,
    technologies,
    type
  } = project.attributes;
  const caption = captions[indexForProjectPics];
  const source = full[indexForProjectPics];
  const mapData = [
    { technologies },
    { contribution },
    { description }
  ];
  const keys = mapData.map(
    item => Object.keys(item)[0]
  );

  return (
    <Main>
      <RestyledLeft>
        <DesktopProjectNav {...props} data={data} params={params} />
      </RestyledLeft>
      <RestyledRight>
        <MenuButton {...props} />
        <Overflow ref={
          ref => overflowRef.current = ref
        }>
          <Hed b="8" c="pink" s="3">
            {projectName}
          </Hed>
          <section>
            <Hed as="h2" normal b="10" s="1.7">
              {type}
            </Hed>
            <Mapper
              mapData={mapData}
              render={
                (proj, idx) => (
                  <Fragment key={idx}>
                    <Hed as="h3" normal b="7" c="blue" s="1.4">
                      {keys[idx][0].toUpperCase() + keys[idx].slice(1)}
                    </Hed>
                    <Graf b="10" t="0">
                      {proj[keys[idx]]}
                    </Graf>
                  </Fragment>
                )
              }
            />
            <Images>
              <ProjectNav
                indexForProjectPics={indexForProjectPics}
                isRight={true}
                project={project}
              />
              <Figure>
                <Caption>{caption}</Caption>
                <Image alt="mainPic" src={source} />
              </Figure>
            </Images>
          </section>
        </Overflow>
      </RestyledRight>
    </Main>
  );
}
