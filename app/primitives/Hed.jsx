import styled from 'styled-components';
import styles from './Styles.jsx';

/** API
 * color: c="string"
 * font-size: s="num" (+ rem)
 * font-style: 'italic'
 * margin-top: t="num" (+ px)
 * margin-bottom: b="num" (+ px)
 * font-weight: 'normal'
 *
 * @media (min-width: 848px)
 * color: bC="string"
 * margin-top: bT="num" (+ px)
 * font-size: bS="num" (+ rem)
 *
 * colors: 'blue', 'lightblack', 'pink', 'yellow', 'white'
 */

export default styled.h1`
  ${p => styles(p)};
`;
