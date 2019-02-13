import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
  &:focus,
  &:visited,
  &:link {
    text-decoration: none;
  }
`;
