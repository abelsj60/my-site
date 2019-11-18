import React from 'react';
import spinner from '../../docs/assets/images/convert-to-data-uri/spinner.gif';
import styled, { css, keyframes } from 'styled-components';

const loaderKeyframes = keyframes`
  0% {
    transform: scaleX(0);
  }

  100% {
    transform: scaleX(-1);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-left: ${p => p.smallMarginLeft && css`${p.smallMarginLeft.includes('auto') ?  p.smallMarginLeft : p.smallMarginLeft + 'px'}`};
  margin-right: ${p => p.smallMarginRight && css`${p.smallMarginRight.includes('auto') ?  p.smallMarginRight : p.smallMarginRight + 'px'}`};
  opacity: ${p => p.show ? '1' : '0'};
  transition: opacity .2s;
  width: ${p => p.cWidth && css`${p.cWidth}px`};
  max-width: ${p => p.maxWidth && css`${p.maxWidth}px`};

  @media (min-width: ${p => p.theme.mediaQueries.tinyView}) {
    margin-left: ${p => p.marginLeft && css`${p.marginLeft.includes('auto') ? p.marginLeft : p.marginLeft + 'px'}`};
  }
`;
const ImgContainer = styled.div`
  height: 16px;
  width: 16px;
`;
const ImgLoader = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${p => p.spinner});
  background-size: cover;
`;
const Text = styled.p`
  color: ${p => !p.white ? p.theme.colors.black : p.theme.colors.white};
  margin-bottom: ${p => p.marginBottom + 'px'};
  font-size: ${p => p.smallFont ? p.theme.fontSizes.zero : p.theme.fontSizes.six };
`;
const LoadingBar = styled.div`
  position: relative;
  height: 1px;
  background-color: ${p => !p.white ? p.theme.colors.white : p.theme.colors.black };
`;
const ProgressBar = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  will-change: transform;
  background-color: ${p => !p.white ? p.theme.colors.black : p.theme.colors.white};
  animation: ${p => p.show && css`1.25s ${loaderKeyframes} infinite`}; 
`;

export default function Loader(props) {
  if (props.done) {
    return null;
  }

  return (
    <Container
      cWidth={props.cWidth}
      maxWidth={props.maxWidth}
      marginLeft={props.marginLeft}
      onTransitionEnd={props.forTransition}
      show={props.show}
      smallMarginLeft={props.smallMarginLeft}
      smallMarginRight={props.smallMarginRight}
    >
      {
        props.spinner ? (
          <ImgContainer>
            <ImgLoader 
              spinner={spinner}
            />
          </ImgContainer>
        ) : (
          <div>
            <Text
              marginBottom={props.marginBottom}
              smallFont={props.smallFont}
              white={props.white}
            >
              Loading...
            </Text>
            <LoadingBar
              white={props.white}
            >
              <ProgressBar 
                show={props.show}
                white={props.white}
              />
            </LoadingBar>
          </div>
        )
      }
    </Container>
  );
}
