import Main from '../primitives/Main.jsx';
import Mapper from '../shared/Mapper.jsx';
import MenuButton from '../shared/MenuButton.jsx';
import Overflow from '../primitives/Overflow.jsx';
import ProjectNav from './ProjectNav.jsx';
import React, { Fragment } from 'react';
import ContentHolder from '../primitives/ContentHolder.jsx';
import styled from 'styled-components';

const ProjectName = styled.h1`
  font-size: ${p => p.theme.fontSizes.sixteen};
  color: ${p => p.theme.colors.pink};
  margin-top: -8px;
  margin-bottom: 4px;
`;
const Hed = styled.h3`
  font-size: ${p => p.theme.fontSizes.eight};
  font-weight: 400;
  color: ${p => p.theme.colors.blue};
  margin-bottom: 8px;
`;
const Dek = styled.h2`
  font-size: ${p => p.theme.fontSizes.thirteen};
  margin-bottom: ${p => p.theme.bottomMargin.regular};
  font-weight: 300;
  color: ${p => p.theme.colors.pink};
`;
const Graf = styled.p`
  margin-right: 0px;
  margin-bottom: ${p => p.num !== 2 ? p.theme.bottomMargin.regular : '10px'};
`;
const Figure = styled.figure`
  padding-top: 10px;
  border-top: 1px solid ${p => p.theme.colors.blueTwo};
  display: flex;
  flex-direction: column;
  margin: 0px;
`;
const Caption = styled.figcaption`
  display: flex;
  margin-bottom: 10px;
  font-size: ${p => p.theme.fontSizes.seven};
  color: ${p => p.theme.colors.lightBlack};
`;
const Image = styled.img`
  flex: 1;
  max-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
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
    { contribution },
    { description },
    { technologies }
  ];
  const keys = mapData.map(
    item => Object.keys(item)[0]
  );

  return (
    <Main>
      <ContentHolder>
        <MenuButton
          {...props}
          noOffset={true}
        />
        <Overflow ref={
          ref => overflowRef.current = ref
        }>
          <ProjectName>
            {projectName}
          </ProjectName>
          <section>
            <Dek>
              {type}
            </Dek>
            <Mapper
              mapData={mapData}
              render={
                (proj, idx) => (
                  <Fragment key={idx}>
                    <Hed>
                      {keys[idx][0].toUpperCase() + keys[idx].slice(1)}
                    </Hed>
                    <Graf num={idx}>
                      {proj[keys[idx]]}
                    </Graf>
                  </Fragment>
                )
              }
            />
            <Figure>
              <ProjectNav
                indexForProjectPics={indexForProjectPics}
                isProjectPage={true}
                project={project}
              />
              <Caption>{caption}</Caption>
              <Image alt="mainPic" src={source} />
            </Figure>
          </section>
        </Overflow>
      </ContentHolder>
    </Main>
  );
}
