import styled from 'styled-components';

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
  font-size: ${p => p.theme.fontSizes.hed};
  color: ${p => p.theme.colors[p.color]};
  margin-top: ${p => p.flushTop ? '-8px' : ''};
  margin-bottom: ${p => p.bottom && p.bottom + 'px'};
  font-weight: ${p => p.weight && p.weight};
`;
