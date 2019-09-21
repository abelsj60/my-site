import React from 'react';
import spinner from '../../public/image-loader.gif';
import styled, { css, keyframes } from 'styled-components';

const loaderKeyframes = keyframes`
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-left: ${p => p.marginLeft && css`${p.marginLeft.length <= 2 ? p.marginLeft + 'px' : p.marginLeft}`};
  opacity: ${p => p.show ? '1' : '0'};
  transition: opacity .2s;
  width: ${p => p.cWidth && css`${p.cWidth}px`};
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
  font-size: ${p => !p.smallFont ? p.theme.fontSizes.six : p.theme.fontSizes.one };
`;
const LoadingBar = styled.div`
  height: 1px;
  background-color: ${p => !p.white ? p.theme.colors.white : p.theme.colors.black };
`;
const ProgressBar = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${p => !p.white ? p.theme.colors.black : p.theme.colors.white};
  animation: ${css`1.25s ${loaderKeyframes} infinite`}; 
`;

export default function Loader(props) {
  if (props.done) {
    return null;
  }

  return (
    <Container
      show={props.show}
      cWidth={props.cWidth}
      marginLeft={props.marginLeft}
      onTransitionEnd={props.forTransition}
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
              white={props.white}
              smallFont={props.smallFont}
              marginBottom={props.marginBottom}
            >
              Loading...
            </Text>
            <LoadingBar
              white={props.white}
            >
              <ProgressBar 
                white={props.white}
              />
            </LoadingBar>
          </div>
        )
      }
    </Container>
  );
}
