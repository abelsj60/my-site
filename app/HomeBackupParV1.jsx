import React, { Component } from 'react';
import ChPreview from './ChPreview.jsx';
import SiteHeader from './SiteHeader.jsx';
import Footer from './Footer.jsx';
import Topics from './Topics.jsx';

var background = '/test/pngtree-magskyline.jpg';
var background2 = '/test/beaker-magic-2.png';

var containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
};

var containerStyle2 = {
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  zIndex: '0'
}

var headerStyle = {
  flex: '1'
};

var picStyle = {
  flex: '1',
  overflow: 'hidden'
};

var topicStyle = {
  flex: '1',
  display: 'flex'
}

var footerStyle = {
  flex: '1'
};

var imgStyle = {
  zIndex: '-2',
  transform: 'scale(1.1)',
  position: 'relative',
  top: '0',
  left: '0',

};

var imgStyle2 = {
  zIndex: '-1',
  transform: 'scale(2)',
  position: 'absolute',
  top: '0'
}

var parentStyle = {
  position: 'relative',
  top: '0',
  left: '0'
}

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={containerStyle}>
        <div>
          <div style={headerStyle}>
            <SiteHeader />
          </div>
          <div style={picStyle}>
            <div style={parentStyle}>
              <img style={imgStyle} src={background} alt='img' />
              <img style={imgStyle2} src={background2} alt='img2' />
            </div>
          </div>
          <div style={footerStyle}>
            <Footer />
          </div>
        </div>
      </div>
    )
  }

}

export default Home;


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
