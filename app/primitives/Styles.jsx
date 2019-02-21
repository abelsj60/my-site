// We use single letter props to avoid adding them to
// HTML elements as attributes. Why? Don't know!
// Just works...!

const noCSS = '';
const colors = {
  blue: '#6e7dab',
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

    @media (min-width: 848px){
        ${p.bC ? 'color:' + colors[p.bC] : noCSS};
        ${p.bT ? 'margin-top:' + p.bT + 'px' : noCSS};
    }
`;
