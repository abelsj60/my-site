// We use single letter props to avoid adding them to
// HTML elements as attributes. Why? Don't know!
// Just works...

const noCSS = '';
const colors = {
  blue: '#6e7dab',
  lightBlue: '#e4e7ef',
  lightBlack: '#455057',
  pink: '#fd1172',
  yellow: '#ffe74c',
  white: 'white'
};

export default p => `
  ${p.c ? 'color:' + colors[p.c] : noCSS};
  ${p.s ? 'font-size:' + p.s + 'rem' : noCSS};
  ${p.italic ? 'font-style: italic' : noCSS};
  ${p.normal ? 'font-weight: normal' : noCSS};
  ${p.t ? 'margin-top:' + p.t + 'px' : noCSS};
  ${p.b ? 'margin-bottom:' + p.b + 'px' : noCSS};

  @media (min-width: 390px) {
    ${p.rC ? 'color:' + colors[p.rC] : noCSS};
    ${p.rS ? 'font-size:' + p.rS + 'rem' : noCSS};
    ${p.bold ? 'font-weight: bold' : noCSS};
    ${p.rT ? 'margin-top:' + p.rT + 'px' : noCSS};
    ${p.rB ? 'margin-bottom:' + p.rB + 'px' : noCSS};
    ${p.rL ? 'margin-left:' + p.rL + 'px' : noCSS};
  } 

  @media (min-width: 848px){
      ${p.bC ? 'color:' + colors[p.bC] : noCSS};
      ${p.bT ? 'margin-top:' + p.bT + 'px' : noCSS};
      ${p.bB ? 'margin-bottom:' + p.bB + 'px' : noCSS};
      ${p.bS ? 'font-size:' + p.bS + 'rem' : noCSS};
  }
`;
