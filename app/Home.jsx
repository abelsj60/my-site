import React, { Component } from 'react';
import ChPreview from './ChPreview.jsx';
import SiteHeader from './SiteHeader.jsx';
import Footer from './Footer.jsx';
import Topics from './Topics.jsx';

var background = '/test/pngtree-magskyline.jpg';
var background2 = '/test/beaker-magic-2.png';

var containerStyle = {
  flex: '1',
  display: 'flex',
  overflow: 'hidden'
};

var divStyle = {
  flex: '1',
  backgroundColor: 'black'
}

var imgStyle = {
  position: 'fixed',
  width: '101%'
}

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={containerStyle}>
        <div style={divStyle}>
          <img style={imgStyle} src={background} alt='pic' />
        </div>
      </div>
    )
  }

}

export default Home;


// <div style={containerStyle}>
// <div style={picStyle}>
//   <div style={parentStyle}>
//     <img style={imgStyle} src={background} alt='img' />

//   </div>
// </div>
// </div>


// <div style={topicStyle}>
// <Topics />
// </div>

// var styleWColor = {
//   flex: '1',
//   backgroundImage: `url(${background})`,
//   backgroundRepeat: 'no-repeat',
//   backgroundColor: 'black'
// };

// var styleWColor = function(num) {
//   return {
//     flex: '1',
//     display: 'flex',
//     flexDirection: 'column',
//     backgroundColor: chapterBackgrounds[num]
//   }
// };

// var styleWColor = {
//   flex: '1',
//   display: 'flex',
//   flexDirection: 'column',
  // backgroundImage: `url(${background})`,
  // backgroundSize: 'contain',
  // backgroundRepeat: 'no-repeat',
  // backgroundSize: '100%',
  // backgroundColor: 'black'
// };

// <div style={homeStyle}>
// <div style={styleWColor}>
// </div>
// </div>
