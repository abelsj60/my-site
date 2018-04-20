import React, { Component } from 'react';

var background = '/test/magician-clean.png';
var background2 = '/test/beaker-magic-2.png';

var setBackground = function(chapter) {
  if(chapter === '') {
    return {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      backgroundImage: `url(${background})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'red',
      backgroundPosition: 'center'
    }
  } else {
    return {
      flex: '1',
      display: 'flex',
      flexDirection: 'column'
    }
  }
};

var setTopic = function(chapter) {
  if(chapter === 'One') {
    return 'The pitch';
  } else if (chapter === 'Two') {
    return 'Some projects';
  } else {
    return 'Coming soon';
  }
};

// Create, Build, Amaze

// var sumStyle = {
//   flex: '1',
//   display: 'flex',
//   flexDirection: 'column',
//   backgroundImage: `url(${background})`,
//   backgroundSize: 'contain',
//   backgroundRepeat: 'no-repeat',
//   backgroundColor: 'black'
// };

var spacerStyle = {
  flexGrow: '1'
};

var hedStyle = {
  paddingLeft: '25px',
  paddingRight: '25px'
};

var pStyle = {
  paddingLeft: '25px',
  paddingRight: '25px'
};

var aStyle = {
  paddingLeft: '25px',
  paddingRight: '25px',
  paddingBottom: '25px'
};

var imgStyle = {
  transform: 'scale(2)'
}

var imgDiv = {
  overflow: 'hidden'
}

var imageShow = function(chapter) {
  if (chapter === 'Two') {
    return <img style={imgStyle} src={background2} alt='test2' />
  }
};

// {imageShow(this.props.chNumber)}

var textStyle = {
  flex: '1'
}

class ChPreview extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={setBackground(this.props.chNumber)}>
        <div style={spacerStyle}>
        </div>
        <h3 style={hedStyle}>{setTopic(this.props.chNumber)}</h3>
        <p style={pStyle}>{this.props.chNumber}</p>
        <a style={aStyle} href='#'>Select</a>
      </div>
    )
  }

}

export default ChPreview;

// <div style={setBackground(this.props.chNumber)}>
//   <div style={spacerStyle}>
//     {imageShow(this.props.chNumber)}
//   </div>
//   <h3 style={hedStyle}>{setTopic(this.props.chNumber)}</h3>
//   <p style={pStyle}>{this.props.chNumber}</p>
//   <a style={aStyle} href='#'>Select</a>
// </div>


// return {
//   flex: '1',
//   display: 'flex',
//   flexDirection: 'column',
//   backgroundImage: `url(${background})`,
//   backgroundSize: 'contain',
//   backgroundRepeat: 'no-repeat',
//   backgroundColor: 'red',
//   backgroundPosition: 'center'
// }
