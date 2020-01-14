import styled from 'styled-components';

export default styled.h2`
  font-family: 'Aref Ruqaa', serif;
  font-size: ${p => p.fontSize}px;
  text-shadow: 1.5px 1px 2px white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${p => p.theme.colors.black};
  font-weight: 700;
  margin-bottom: 7px;
  text-align: center;
  // Let's set height in a consistent way. HTML text often has wonky CapHeights and Baselines (space above 
  // and below the glyphs). One solution: 
  // https://medium.com/eightshapes-llc/cropping-away-negative-impacts-of-line-height-84d744e016ce
  // It didn't work well for me. So, I did the following:
  //  1. Founda line-height that tightened the space around the text to what I expected/wanted.
  //  2. Explicitly set the element's height to match the font-size (in px) so nothing gets cut off.
  // Note: This worked great here, but may not work as well with multiple lines of text...
  line-height: .5;
  height: ${p => p.fontSize}px;
  // We can rely on margin-top b/c we've used the above css to reset the line-height.
  margin-top: ${p => p.extraMarginTop ? '12px' : '6px'};

  @media (min-width: ${p => p.theme.mediaQueries.tinyView} and min-height: 640px) {
    margin-bottom: 17px;
  }
`;
