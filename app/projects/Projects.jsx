import { isIE } from 'react-device-detect';
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
const Shelf = styled.div`
  display: flex;
  // https://philipwalton.com/articles/normalizing-cross-browser-flexbox-bugs/
  flex-shrink: 0; 
  margin-right: 25px;
  margin-bottom: 15px;
  justify-content: space-between;
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
  margin-bottom: ${p => !p.lastItem ? p.theme.bottomMargin.regular : '15px'};
`;
const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  margin: 0px;
  flex-shrink: 0;

  // PROBABLY DELETE WHEN DONE:
  // Define width on IE/FF to expand main image properly
  // ${(isIE) && 'width: 65rem;'}
`;
const Caption = styled.figcaption`
  display: flex;
  margin-bottom: 10px;
  font-size: ${p => p.theme.fontSizes.seven};
  color: ${p => p.theme.colors.lightBlack};
`;
const ImageHolder = styled.div`
  padding: 15px;
  background-color: ${p => p.theme.colors.reverieBlue};
`;
const Image = styled.img`
  // The main image should shrink proportionally, i.e.,
  // don't scale and center it in the element 
  width: 100%;
  height: 100%;
  max-width: 100%;
  border: 2px solid #b9dff3;
  box-sizing: border-box;
  ${!isIE && 'flex: 1;'} // Overflow shrinks in IE if this isn't set for at least one child
  vertical-align: top;
`;

export default function Projects(props) {
  const {
    data,
    params
  } = props;

  const indexForProjectData = params.projectNameToIndex();
  const indexForProjectPics = params.projectThumbnailToIndex();
  const project = data[indexForProjectData];

  const {
    captions,
    full,
    projectName,
    showTheseAttributes,
    type
  } = project.attributes;
  const caption = captions[indexForProjectPics];
  const source = full[indexForProjectPics];

  const keys = showTheseAttributes.map(
    name => name
  );
  const attributeArray = keys.map(
    name => project.attributes[name]
  );

  return (
    <Main>
      <ContentHolder>
        <Shelf>
          <MenuButton
            {...props}
          />
          <ProjectNav
            {...props}
            project={project} // attributes
          />
        </Shelf>
        <Overflow>
          <ProjectName>
            {projectName}
          </ProjectName>
          <Dek>
            {type}
          </Dek>
          <Mapper
            mapData={attributeArray}
            render={
              (text, idx) => {
                return (
                  <Fragment key={idx}>
                    <Hed>
                      {keys[idx][0].toUpperCase() + keys[idx].slice(1)}
                    </Hed>
                    <Graf>
                      {text}
                    </Graf>
                  </Fragment>
                );
              }
            }
          />
          <Figure>
            <Hed>Featured image</Hed>
            <Graf>{caption}</Graf>
            <ImageHolder>
              <Image alt="mainPic" src={source} />
            </ImageHolder>
          </Figure>
        </Overflow>
      </ContentHolder>
    </Main>
  );
}
