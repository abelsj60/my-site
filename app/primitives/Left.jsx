import styled from 'styled-components';

export default styled.nav`
  display: none;

  @media (min-width: 848px) {
    display: flex;
    margin: 25px 0px 25px 25px;
    min-width: 327px;
    border-right: 0.5px solid ${p => !p.reverie ? p.theme.colors.lightestBlue : p.theme.colors.lightestBlue};
  }
`;
