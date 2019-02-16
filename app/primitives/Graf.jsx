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
 */

const colors = {
  blue: '#6e7dab',
  lightBlack: '#455057',
  pink: '#fd1172',
  yellow: '#ffe74c',
  white: 'white'
};

export default styled.p`
  color: ${p => colors[p.color] || undefined};
  font-size: ${p => p.size && p.size + 'rem'};
  font-style: ${p => p.italic && 'italic'};
  font-weight: ${p => p.normal && 'normal'};
  line-height: normal;
  margin-bottom: ${p => p.bottom && p.bottom + 'px'};
  margin-top: ${p => p.top && p.top + 'px'};

  @media (min-width: 848px) {
    color: ${p => colors[p.bigColor] || undefined};
    margin-top: ${p => p.bigTop && p.bigTop + 'px'};
  }
`;
