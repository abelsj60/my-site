import DesktopProjectNav from './DesktopProjectNav.jsx';
import Left from '../primitives/Left.jsx';
import Main from '../primitives/Main.jsx';
import Mapper from '../shared/Mapper.jsx';
import MenuButton from '../shared/MenuButton.jsx';
import Overflow from '../primitives/Overflow.jsx';
import ProjectNav from './ProjectNav.jsx';
import React, { Fragment } from 'react';
import Right from '../primitives/Right.jsx';
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
  color: ${p => p.theme.colors.newBlue};
  margin-bottom: 8px;
`;
const Dek = styled.h2`
  font-size: ${p => p.theme.fontSizes.thirteen};
  margin-bottom: ${p => p.theme.grafSpace.regular};
  font-weight: 300;
  color: ${p => p.theme.colors.pink};
`;
const Graf = styled.p`
  margin-bottom: ${p => p.theme.grafSpace.regular};
  margin-right: 0px;
`;
const Images = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: ${p => p.theme.mediaQueries.narrowBreakThree}) {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
`;
const Figure = styled.figure`
  margin: 0px;

  @media (min-width: ${p => p.theme.mediaQueries.narrowBreakThree}) {
    display: flex;
    flex-direction: column;
  }
`;
const Caption = styled.figcaption`
  display: flex;
  margin: 10px 10px 8px 0px;
  font-size: ${p => p.theme.fontSizes.seven};
  color: ${p => p.theme.colors.lightBlack};

  @media (min-width: ${p => p.theme.mediaQueries.narrowBreakThree}) {
    margin-top: 0;
  }
`;
const Image = styled.img`
  flex: 1;
  max-width: 100%;
  object-fit: cover;
  vertical-align: bottom;

  @media (min-width: ${p => p.theme.mediaQueries.narrowBreakThree}) {
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
      <Left>
        <DesktopProjectNav
          {...props}
          data={data}
          params={params}
        />
      </Left>
      <Right>
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
                    <Graf>
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
      </Right>
    </Main>
  );
}
