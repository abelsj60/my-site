import ContentHolder from '../primitives/ContentHolder.jsx';
import eventManagement from '../helpers/eventManagement.js';
import Loader from '../shared/Loader.jsx';
import Main from '../primitives/Main.jsx';
import Mapper from '../shared/Mapper.jsx';
import MenuButton from '../shared/MenuButton.jsx';
import offlineImageToggle from '../helpers/offlineImageToggle.js';
import Overflow from '../primitives/Overflow.jsx';
import ProjectNav from './ProjectNav.jsx';
import React, { Fragment } from 'react';
import Shelf from '../shared/Shelf.jsx';
import styled from 'styled-components';
import urlPrefix from '../helpers/urlPrefix';

const OfflineSpacer = styled.div`
  ${p => !p.offline && 'display: none;'}
  flex: 1;
`;
const Type = styled.p`
  font-size: ${p => p.theme.fontSizes.three};
  color:${p => p.theme.colors.lightBlack};
  margin-bottom: 4px;
  font-style: italic;
`;
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
  margin: 0px;
  padding-top: 15px;
  border-top: 1px solid lightgrey;
`;
const Caption = styled.figcaption`
  margin-bottom: 10px;
  font-size: ${p => p.theme.fontSizes.seven};
  line-height: 1.5;
  color: ${p => p.theme.colors.lightBlack};
`;
const ImageHolder = styled.div`
  padding: 15px;
  background-color: ${p => p.theme.colors.reverieBlue};
`;
const MainImage = styled.img`
  opacity: ${p => p.imageLoaded > 1 || p.offline ? '1' : '0'};
  width: 100%;
  height: auto;
  vertical-align: top;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, .3);
  ${p => p.imageLoaded > 0 && 'transition: opacity .25s ease-in;'}
  ${p => p.offline && 'font-size: .8rem;'}
`;

export default function Projects(props) {
  const {
    appState,
    boundHandleClickForContentLoader,
    contentState
  } = props;
  const { offline } = appState;
  const {
    allContentData,
    imageLoaded,
    projectIndex,
    thumbnailIndex
  } = contentState;
  const {
    captions,
    description,
    imageHolderHeight,
    mainImages,
    pitch,
    projectName,
    showTheseAttributes,
    type
  } = allContentData[projectIndex].attributes;
  const caption = captions[thumbnailIndex];
  const altText = description[thumbnailIndex];
  const filePrefix = mainImages[thumbnailIndex];
  const holderHeight = imageHolderHeight[thumbnailIndex].split(' ');
  const ratio = (100 / (holderHeight[0] / holderHeight[1]));
  const isOffline = imageLoaded < 2 && offline;
  const attributeArray = showTheseAttributes.map(
    name => allContentData[projectIndex].attributes[name]
  );
  const handleProjectEvent = (event, state) => {
    eventManagement(event);
    boundHandleClickForContentLoader('imageLoader', state);
  }
  const handleLoadForMainImage = event => handleProjectEvent(event, 1);
  const handleTransitionEndForLoader = event => handleProjectEvent(event, 2);

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
          <OfflineSpacer
            offline={isOffline}
          />
          <Loader
            done={offline || imageLoaded > 1}
            forTransition={handleTransitionEndForLoader}
            marginLeft="auto"
            show={imageLoaded < 1}
            smallMarginLeft="auto"
            spinner={true}
          />
          <ProjectNav
            {...props}
            // ProjectNav tests specific image values
            imageLoaded={imageLoaded}
          />
        </Shelf>
        <Overflow>
          <Type>
            {type}
          </Type>
          <ProjectName>
            {projectName}
          </ProjectName>
          <Dek>
            {pitch}
          </Dek>
          <Mapper
            mapData={attributeArray}
            render={(text, idx) => {
              return (
                <Fragment key={idx}>
                  <Hed>
                    {
                      showTheseAttributes[idx][0]
                        .toUpperCase() + showTheseAttributes[idx]
                        .slice(1)
                    }
                  </Hed>
                  <Graf>
                    {text}
                  </Graf>
                </Fragment>
              );
            }}
          />
          <Figure>
            <Caption>
              {caption}
            </Caption>
            <ImageHolder>
              <div
                // Take up space for image before it loads
                // https://stackoverflow.com/a/51485719
                style={{
                  paddingBottom: `${ratio}%`,
                  height: '0px'
                }}
              >
                <MainImage
                  alt={altText}
                  imageLoaded={imageLoaded}
                  offline={isOffline}
                  onLoad={handleLoadForMainImage}
                  sizes="620px"
                  src={offlineImageToggle(isOffline, `${urlPrefix}${filePrefix}-q95-625-1x.jpg`)}
                  srcSet={
                    offlineImageToggle(isOffline, `${urlPrefix}${filePrefix}-q50-1250-2x.jpg 1250w`),
                    offlineImageToggle(isOffline, `${urlPrefix}${filePrefix}-q50-1875-3x.jpg 1875w`),
                    offlineImageToggle(isOffline, `${urlPrefix}${filePrefix}-q50-2500-4x.jpg 2500w`)
                  }
                />
              </div>
            </ImageHolder>
          </Figure>
        </Overflow>
      </ContentHolder>
    </Main>
  );
}
