import React, { Component } from 'react';
import ChPreview from './ChPreview.jsx';
import { Link } from 'react-router-dom';

var background = '/test/pngtree-magskyline.jpg';
var chapters = ['One', 'Two', 'Three'];
var chapterBackgrounds = ['silver', 'deepskyblue', 'mediumspringgreen', 'darksalmon'];

var homeStyle2 = function(topicStatus, opacity) {
  if(!topicStatus) {
    return {
      flex: '1',
      display: 'flex'
    }
  } else {
    return {
      flex: '1',
      display: 'flex',
      width: '100%',
      opacity: opacity,
      zIndex: '1'
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

var setSection = function(chapter) {
  if(chapter === 'One') {
    return '/projects';
  } else if(chapter === 'Two') {
    return '/chapter';
  } else {
    return '/alexa'
  }
}

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

    // this.props.topicMenu

    var ptrStyle = {
      pointerEvents: 'none',
      display: 'fixed',
      width: '100%',
      height: '100%'
    }

    return (
      <div id='tTop' style={homeStyle2(this.props.topicStatus, this.state.tOpacity)}>
        {
          chapters.map((chapter, index) =>
            (
              <Link to={setSection(chapter)} key={index} style={styleWColor(index, this.props.topicStatus)}>
                <ChPreview chNumber={chapter} background={background} />
              </Link>
            )
          )
        }
      </div>
    )
  }

}

export default Topics;
