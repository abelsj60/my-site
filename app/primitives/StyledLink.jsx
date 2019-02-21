import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  &:focus,
  &:visited,
  &:link {
    text-decoration: none;
  }
`;
