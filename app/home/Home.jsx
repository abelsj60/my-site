import Main from '../primitives/Main.jsx';
import Parallax from '../shared/Parallax.jsx';
import React, { Fragment } from 'react';
import styled /*, { keyframes }*/ from 'styled-components';
import bio from '../data/about/home-page-about.md';
import shortBio from '../data/about/home-page-about-short.md';
import ReactHtmlParser from 'react-html-parser';
import marked from 'marked';

const RestyledMain = styled(Main)`
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  @media (min-width: ${p => p.theme.mediaQueries.desktopView}) {
    flex-direction: column;
  }
`;
const NameTag = styled.div`
  display: ${p => (p.tempContentIsOn ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  cursor: pointer;
`;
const Hed = styled.h1`
  font-family: 'Aref Ruqaa', serif;
  font-size: 4.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, .6);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${p => p.theme.colors.yellow};
  font-weight: 700;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: ${p => p.theme.fontSizes.seventeen};
  }
`;
const Motto = styled.p`
  font-family: 'Aref Ruqaa', serif;
  margin-left: 18px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, .6);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: ${p => p.theme.fontSizes.five};
  margin-top: 70px;
  color: ${p => p.theme.colors.yellow};
  font-weight: 700;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    font-size: ${p => p.theme.fontSizes.fourteen};
    margin-top: 100px;
    margin-left: 20px;
  }
`;
const BioBox = styled.div`
  width: 80%;
  margin-top: 30px;
  display: ${p => (p.tempContentIsOn ? 'none' : 'flex')};
  z-index: 2;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    margin-top: 60px;
    width: 360px;
  }
`;
const Text = styled.section`
  overflow: auto;
  
  p {
    font-weight: 500;
    margin-bottom: 10px;
    font-size: ${p => p.theme.fontSizes.three};
    color: ${p => p.theme.colors.white};
    text-shadow: 1px 1px 2px rgba(0, 0, 0, .6);
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &:last-child {
      margin-bottom: 0px;
    }

    @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
      font-size: ${p => p.theme.fontSizes.twelve};
    } 
  }
`;
const PictureBox = styled.div`
  position: fixed;
  top: 0px;
  left: -1px;
  height: 101%;
  width: 101%;
  overflow: hidden;
  z-index: 1;
`;
const BoyInForeground = styled.img`
  position: absolute;
  z-index: 2;
  pointer-events: none;

  // https://stackoverflow.com/a/28439444
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover; // Use if img is an <img>

  // Use if img is a background-image in CSS
  // background-image: url(${p => p.srcImage});
  // background-size: cover;
  // background-repeat: no-repeat;
  // background-position: center;
`;
const Portal = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 1;
`;
const FantasyAsBackground = styled(BoyInForeground)`
  opacity: ${p => (p.inCity ? '0' : '1')};
  transform: ${p => (p.inCity ? 'scale(1)' : 'scale(1.15)')};
  transition: transform 1.75s, opacity 1.5s cubic-bezier(0.77, 0, 0.175, 1);
  z-index: 0;
`;
const CityAsBackground = styled(FantasyAsBackground)`
  opacity: ${p => (p.inCity ? '1' : '0')};
  transform: ${p => (p.inCity ? 'scale(1.15)' : 'scale(1)')};
`;

// const PulseKeyframes = keyframes`
//   0% {
//     background-color: rgba(0,0,0,.1);
//     box-shadow: 0 0 0 0 rgba(255,231,76, 0.2);
//   }
//   50% {
//     background-color: rgba(0,0,0,0);
//     box-shadow: 0 0 0 15px rgba(0,0,0, 0);
//   }
//   100% {
//     background-color: rgba(0,0,0,0);
//     box-shadow: 0 0 0 0 rgba(255,231,76, 0);
//   }
// `;
// const Ball = styled.div`
//   position: absolute;
//   width: 5px;
//   height: 5px;
//   border-radius: 50%;
//   margin-top: 227px;
//   margin-left: 125px;
//   // Easing function reference: https://easings.net/en
//   animation: ${PulseKeyframes} 2.5s ease-out -10s infinite;
//   padding: 7px;
//   z-index: 3;

//   @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
//     width: 5px;
//     height: 5px;
//     margin-top: 368px;
//     margin-left: 175px;
//     padding: 10px;
//   }
// `;

export default function Home(props) {
  const {
    inCity,
    showBusinessCard,
    showLegalTerms
  } = props.appState;
  const {
    boundHandleClickForApp
  } = props;

  let aboutMeText = shortBio.body;
  const screenSize = window.innerWidth;

  if (screenSize < 390) {
    aboutMeText = shortBio.body;
  } else {
    aboutMeText = bio.body;
  }

  return (
    <Fragment>
      <RestyledMain>
        <Parallax
          render={
            renderProps => (
              <NameTag
                ref={
                  el => {
                    renderProps.scene = el;
                  }
                }
                onClick={
                  () => boundHandleClickForApp('swapHomePageImage')
                }
                data-pointer-events={true}
                tempContentIsOn={showBusinessCard || showLegalTerms}
              >
                <Hed
                  normal
                  data-depth=".3"
                  data-friction-x=".7"
                  data-friction-y=".7"
                >
                James Abels
                </Hed>
                <Motto
                  data-depth=".2"
                  data-friction-x=".9"
                  data-friction-y=".9"
                >
                Narrative coding and other adventures
                </Motto>
              </NameTag>
            )
          }
        />
        <Parallax
          render={
            renderProps => (
              <BioBox
                ref={
                  el => {
                    renderProps.scene = el;
                  }
                }
                tempContentIsOn={showBusinessCard || showLegalTerms}
              >
                <Text
                  data-depth=".4"
                  data-friction-x=".7"
                  data-friction-y=".7"
                >
                  {ReactHtmlParser(
                    marked(
                      aboutMeText,
                      { smartypants: true }
                    )
                  )}
                </Text>
              </BioBox>
            )
          }
        />
        <PictureBox>
          <BoyInForeground
            alt=""
            src="https://user-images.githubusercontent.com/30417590/55294127-2c1c5980-53cc-11e9-9848-5295cd05a9cc.png"
          />
          <Portal />
          <FantasyAsBackground
            alt=""
            inCity={inCity}
            src="https://user-images.githubusercontent.com/30417590/55294130-33436780-53cc-11e9-93cc-f61572bca6ef.png"
          />
          <CityAsBackground
            alt=""
            inCity={inCity}
            src="https://user-images.githubusercontent.com/30417590/55294135-3c343900-53cc-11e9-8f9c-e66499ccd920.png"
          />
        </PictureBox>
      </RestyledMain>
    </Fragment>
  );
}
