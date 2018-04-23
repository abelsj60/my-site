import React, { Component } from 'react';
import ChPreview from './ChPreview.jsx';

var background = '/test/pngtree-magskyline.jpg';
var chapters = ['One', 'Two', 'Three'];
var chapterBackgrounds = ['silver', 'deepskyblue', 'mediumspringgreen', 'darksalmon'];

var homeStyle2 = function(topicStatus, opacity) {
  if(!topicStatus) {
    return {
      flex: '1',
      display: 'flex',
      marginTop: '63px'
    }
  } else {
    return {
      flex: '1',
      display: 'flex',
      marginTop: '63px',
      width: '100%',
      opacity: opacity
    }
  }
}

var styleWColor = function(num) {
  return {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,.25)'
  }
};

class Topics extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tOpacity: 0
    }

    this.setOpacity = this.setOpacity.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.setOpacity);
  }

  componentWilLUnmount() {
    window.addEventListener('scroll', this.setOpacity);
  }

  setOpacity(event) {
    var scrollTop = window.pageYOffset;

    if(scrollTop >= 2400) {
      // console.log('scrollTop:', scrollTop);
      var oldPercent = (scrollTop - 2400) / (3221 - 2400);
      var numForOpacity = ((1 - 0) * oldPercent) + 0;
      // console.log('oldPercent:', oldPercent);
      // console.log('numForOpacity:', numForOpacity);
      this.setState({ tOpacity: numForOpacity });
    }
  }

  render() {

    return (
      <div id='tTop' style={homeStyle2(this.props.topicStatus, this.state.tOpacity)}>
        {
          chapters.map((chapter, index) =>
            (
              <div id='tSection' key={index} style={styleWColor(index, this.props.topicStatus)}>
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
