import CustomLink from '../shared/CustomLink.jsx';
import styled from 'styled-components';

export default styled(CustomLink)`
  &:focus,
  &:visited,
  &:link {
    text-decoration: none;
  }
`;
