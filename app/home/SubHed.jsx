import styled from 'styled-components';

export default styled.h2`
  font-family: 'Aref Ruqaa', serif;
  text-shadow: 1.5px 1px 2px white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${p => p.theme.colors.black};
  font-weight: 700;
  margin-left: ${p => p.marginLeft};
  margin-bottom: 5px;

  @media (min-width: ${p => p.theme.mediaQueries.tinyView} and min-height: 640px) {
    margin-bottom: 17px;
  }
`;
