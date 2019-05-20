import { isIE } from 'react-device-detect';
import Main from '../primitives/Main.jsx';
import ContentHolder from '../primitives/ContentHolder.jsx';
import Mapper from '../shared/Mapper.jsx';
import MenuButton from '../shared/MenuButton.jsx';
import Overflow from '../primitives/Overflow.jsx';
import ProjectNav from './ProjectNav.jsx';
import React, { Fragment } from 'react';
import {
  isMobile
} from 'react-device-detect';
import Shelf from '../shared/Shelf.jsx';
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
  // Gets cut off in Chrome (no need to counteract in ContentHolder.)
  margin-left: 2px; 
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
  // Gets cut off in Chrome (no need to counteract in ContentHolder.)
  margin-left: 2px; 
`;
const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0px;
  padding-top: 15px;
  border-top: 1px solid ${p => p.theme.colors.blueTwo};

  // PROBABLY DELETE WHEN DONE:
  // Define width on IE/FF to expand main image properly
  // ${(isIE) && 'width: 65rem;'}
`;
const Caption = styled.figcaption`
  display: flex;
  margin-bottom: 10px;
  font-size: ${p => p.theme.fontSizes.seven};
  line-height: 1.5;
  color: ${p => p.theme.colors.lightBlack};
`;
const ImageHolder = styled.div`
  padding: 17px;
  background-color: ${p => p.theme.colors.reverieBlue};
`;
const Image = styled.img`
  // The main image should shrink proportionally, i.e.,
  // don't scale and center it w/n the element 
  width: 100%;
  height: 100%;
  max-width: 100%;
  box-sizing: border-box;
  ${!isIE && 'flex: 1;'} // Overflow shrinks in IE if this isn't set for at least one child
  vertical-align: top;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, .3);
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
    type,
    zoomed
  } = project.attributes;
  const caption = captions[indexForProjectPics];
  // Get the larger res image if: a. desktop or b. pinchZoomed.
  const source =
    !isMobile || props.appState.pinchZooomed
      ? zoomed[indexForProjectPics]
      : full[indexForProjectPics];

  const attributeArray = showTheseAttributes.map(
    name => project.attributes[name]
  );

  return (
    <Main>
      <ContentHolder>
        <Shelf
          height="32px"
          tinyHeight="20px"
        >
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
                      {showTheseAttributes[idx][0]
                        .toUpperCase()
                        + showTheseAttributes[idx]
                          .slice(1)}
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
            <Caption>{caption}</Caption>
            <ImageHolder>
              <Image
                alt="mainPic"
                src={source}
              />
            </ImageHolder>
          </Figure>
        </Overflow>
      </ContentHolder>
    </Main>
  );
}
