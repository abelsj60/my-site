import React, { Component } from 'react';
import ChPreview from './ChPreview.jsx';

var background = '/test/pngtree-magskyline.jpg';
var chapters = ['One', 'Two', 'Three'];
var chapterBackgrounds = ['silver', 'deepskyblue', 'mediumspringgreen', 'darksalmon'];

var homeStyle = {
  flex: '1',
  display: 'flex'
};

var styleWColor = function(num) {
  return {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: chapterBackgrounds[num]
  }
};

class Topics extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={homeStyle}>
        {
          chapters.map((chapter, index) =>
            (
              <div key={index} style={styleWColor(index)}>
                <ChPreview chNumber={chapter} background={background} />
              </div>
            )
          )
        }
      </div>
    )
  }

}

export default Topics;
