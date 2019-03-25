import Graf from '../primitives/Graf.jsx';
import Hed from '../primitives/Hed.jsx';
import Main from '../primitives/Main.jsx';
import Parallax from '../shared/Parallax.jsx';
import React, { Fragment } from 'react';
import styled from 'styled-components';

import bio from '../data/about/home-page-about.md';
import shortBio from '../data/about/home-page-about-short.md';
import ReactHtmlParser from 'react-html-parser';
import marked from 'marked';

const RestyledMain = styled(Main)`
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  background-color: transparent;

  @media (min-width: 848px) {
    flex-direction: column;
  }
`;
const NameTag = styled.div`
  display: ${p => (p.tempContentIsOn ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  // margin-top: 10px;
  cursor: pointer;
  // font-family: 'Aref Ruqaa', serif;

  @media (min-width: 390px) {
    // margin-top: 20px;
  }
`;
const RestyledHed = styled(Hed)`
  // font-family: inherit;
  font-family: 'Aref Ruqaa', serif;
  font-weight: 700;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, .6);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
`;
const RestyledGraf = styled(Graf)`
  // font-family: inherit;
  font-family: 'Aref Ruqaa', serif;
  font-weight: 700;
  margin-left: 18px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, .6);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;
const PictureBox = styled.div`
  position: fixed;
  top: 0px;
  left: -.5px;
  height: 101%;
  width: 101%;
  overflow: hidden;
  z-index: -1;
`;
const Portal = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.15);
  z-index: 1;
`;
const BoyInForeground = styled.img`
  position: absolute;
  // object-fit: cover;
  // height: 100vh;
  // min-width: 100vw;
  z-index: 1;
  pointer-events: none;

  // https://stackoverflow.com/a/28439444
  display: block;
  width: 100%;
  height: 100%;
  background-image: url(${p => p.srcImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const FantasyAsBackground = styled(BoyInForeground)`
  // position: unset;
  // left: 0px;
  opacity: ${p => (p.inCity ? '0' : '1')};
  transform: ${p => (p.inCity ? 'scale(1)' : 'scale(1.15)')};
  transition: transform 1.75s, opacity 1.5s cubic-bezier(0.77, 0, 0.175, 1);
  z-index: 0;

  // display: block;
  // width: 100%;
  // height: 100%;

  // background-image: url(${p => p.srcImage});
  // background-size: cover;
  // background-repeat: no-repeat;
  // background-position: center;
`;
const CityAsBackground = styled(FantasyAsBackground)`
  // position: absolute;
  opacity: ${p => (p.inCity ? '1' : '0')};
  transform: ${p => (p.inCity ? 'scale(1.15)' : 'scale(1)')};
`;
const BioContainer = styled.div`
  width: 80%;
  margin-top: 25px;
  display: ${p => (p.tempContentIsOn ? 'none' : 'flex')};

  @media (min-width: 390px) {
    margin-top: 40px;
    width: 360px;
  }

  // @media (min-width: 848px) {
  //   width: 45%;
  // }
`;
const Text = styled.section`
  overflow: auto;
  
  p {
    font-family: 'Aref Ruqaa', serif;
    font-weight: 700;
    margin-top: 0px;
    // margin-left: 2px;
    margin-bottom: 10px;
    font-size: 1.2rem;
    color: #ffe74c;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, .6);
    text-align: center;
    // font-weight: 600; // Use if not Aref Ruqaa!
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &:last-child {
      margin-bottom: 0px;
    }

    @media (min-width: 390px) {
      // font-size: 1.4rem;
      font-size: 1.6rem;
    }
    
  }
`;
const Ball = styled.div`
  position: absolute;
  top: 185px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow:
      inset 0 0 50px #fff,      /* inner white */
      inset 20px 0 80px #f0f,   /* inner left magenta short */
      inset -20px 0 80px #0ff,  /* inner right cyan short */
      inset 20px 0 300px #f0f,  /* inner left magenta broad */
      inset -20px 0 300px #0ff, /* inner right cyan broad */
      0 0 50px #fff,            /* outer white */
      -10px 0 80px #f0f,        /* outer left magenta */
      10px 0 80px #0ff;         /* outer right cyan */
`;

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
                <RestyledHed
                  normal
                  c="yellow"
                  data-depth=".3"
                  data-friction-x=".7"
                  data-friction-y=".7"
                  s="4.5"
                  rS="6.5"
                >
                James Abels
                </RestyledHed>
                <RestyledGraf
                  c="yellow"
                  data-depth=".2"
                  data-friction-x=".9"
                  data-friction-y=".9"
                  s="1.298"
                  t="65"
                  rS="1.9"
                  rT="95"
                  rL="20"
                >
                Narrative coding and other adventures
                </RestyledGraf>
                {/*<Line
                  data-depth=".2"
                  data-friction-x=".7"
                  data-friction-y=".7"
                />*/}
              </NameTag>
            )
          }
        />
        <Parallax
          render={
            renderProps => (
              <BioContainer
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
              </BioContainer>
            )
          }
        />
        <PictureBox>
          <BoyInForeground alt="" src="" srcImage="/foreground.png" />
          <Portal />
          <FantasyAsBackground
            alt=""
            inCity={inCity}
            src=""
            srcImage="/background-fantasy.png"
          />
          <CityAsBackground
            alt=""
            inCity={inCity}
            src=""
            srcImage="/background-city.png"
          />
        </PictureBox>
      </RestyledMain>
    </Fragment>
  );
}
