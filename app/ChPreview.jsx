import React, { Component } from 'react';

var background = '/test/magician-clean.png';
var background2 = '/test/beaker-magic-2.png';

var setBackground = function(chapter) {
  if(chapter !== '') {
    return {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid red',
      pointerEvents: 'none'
    }
  // } else {
  //   return {
  //     flex: '1',
  //     display: 'flex',
  //     flexDirection: 'column'
  //   }
  }
};

var setTopic = function(chapter) {
  if(chapter === 'One') {
    return 'Some projects';
  } else if (chapter === 'Two') {
    return 'The pitch';
  } else {
    return 'Alexa Stories';
  }
};

// Create, Build, Amaze

var spacerStyle = {
  flexGrow: '1'
};

var hedStyle = {
  paddingLeft: '25px',
  paddingRight: '25px'
};

var pStyle = {
  paddingLeft: '25px',
  paddingRight: '25px',
  paddingBottom: '25px'
};

// var aStyle = {
//   paddingLeft: '25px',
//   paddingRight: '25px',
//   paddingBottom: '25px'
// };

// var textStyle = {
//   flex: '1'
// }

class ChPreview extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='chpTop' style={setBackground(this.props.chNumber)}>
        <div id='chpSpacer' style={spacerStyle}>
        </div>
        <h3 style={hedStyle}>{setTopic(this.props.chNumber)}</h3>
        <p style={pStyle}>{this.props.chNumber}</p>
      </div>
    )
  }

}

export default ChPreview;
