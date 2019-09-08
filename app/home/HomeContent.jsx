import bio from "../data/home/home.md";
import Charms from "./Charms.jsx";
import FitText from "@kennethormandy/react-fittext";
import marked from "marked";
import React from "react";
import ReactHtmlParser from "react-html-parser";
import styled from "styled-components";

const Container = styled.div``;
const Motto = styled.h2`
  font-family: 'Aref Ruqaa', serif;
  text-shadow: 1.5px 1px 2px white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${p => p.theme.colors.black};
  font-weight: 700;
  margin-left: .95em;
  margin-bottom: 17px;

  ::selection {
    background-color: transparent;
  }
`;
const Directions = styled.h2`
  font-family: 'Aref Ruqaa', serif;
  text-shadow: 1.5px 1px 2px white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${p => p.theme.colors.black};
  font-weight: 700;
  margin-left: .95em;
  margin-bottom: 17px;

  ::selection {
    background-color: transparent;
  }
`;
const Text = styled.section`
  overflow: auto;
  display: ${p => (p.tempContentIsOn || p.isCasting ? "none" : "block")};
  z-index: 2;
  
  p {
    font-weight: 500;
    margin-left: 1.7em;
    margin-bottom: 10px;
    color: ${p => p.theme.colors.black};
    text-shadow: 1.5px 1px 2px white;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    ::selection {
      background-color: transparent;
    }
  }
`;

export default function(props) {
  const { attributes, body } = bio;
  const { motto } = attributes;

  return (
		<Container
			fadeIn={fadeIn}
      isCasting={isCasting}
      castSpell={castSpell} // Don't show while in progress
      tempContentIsOn={showBusinessCard || showLegalTerms}
      nowShowing={nowShowing === 'charms'}
      onTransitionEnd={() => resetFadeIn()}
		>
      <FitText compressor={2.3}>
        {!isCasting ? (
          <Motto isCasting={isCasting} castSpell={castSpell}>
            {motto}
          </Motto>
        ) : (
          <Directions isCasting={isCasting} castSpell={castSpell}>
            {!inCity
              ? "Tap the pulses to travel home"
              : "Tap the pulses for adventure"}
          </Directions>
        )}
      </FitText>
			{!isCasting 
				? (
        <Text
          isCasting={isCasting}
          castSpell={castSpell}
          finishedHomePageLoad={finishedHomePageLoad}
        >
          <FitText compressor={2.5}>
            <Fragment>
              {ReactHtmlParser(marked(body, { smartypants: true }))}
            </Fragment>
          </FitText>
        </Text>
      ) : (
        <Charms
          {...props}
          goal={goal}
          homeState={state}
          resetFadeIn={resetFadeIn}
          charmRefs={charmRefs}
        />
      )}
    </Container>
  );
}
