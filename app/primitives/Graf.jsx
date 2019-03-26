import styled from 'styled-components';

/** API
 * color: color="string"
 * font-size: size="num" (+ rem)
 * font-style: 'italic'
 * margin-top: top="num" (+ px)
 * margin-bottom: bottom="num" (+ px)
 *
 * @media (min-width: 848px)
 * color: bigColor="string"
 * margin-top: bigTop="num" (+ px)
 *
 * colors: 'blue', 'lightblack', 'pink', 'yellow', 'white'
 */

export default styled.p`
  font-weight: ${p => p.weight && p.weight};
  margin-bottom: ${p => p.bottom && p.bottom + 'px'};
  color: ${p => p.theme.colors[p.color]};
`;
