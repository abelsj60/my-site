import React, { Component } from 'react';
import ChPreview from './ChPreview.jsx';
import { Link } from 'react-router-dom';

var background = '/test/pngtree-magskyline.jpg';
var chapters = ['One', 'Two', 'Three'];
var chapterBackgrounds = ['silver', 'deepskyblue', 'mediumspringgreen', 'darksalmon'];

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
      var oldPercent = (scrollTop - 2400) / (3221 - 2400);
      var numForOpacity = ((1 - 0) * oldPercent) + 0;
      this.setState({ tOpacity: numForOpacity });
    }
  }

  render() {

    var setSection = function(chapter) {
      if(chapter === 'One') {
        return '/projects';
      } else if(chapter === 'Two') {
        return '/chapter';
      } else {
        return '/alexa'
      }
    }

    var setTopicsClass = function(home) {
      if(!home) {
        return 'notHome';
      } else {
        return 'home';
      }
    }

    var setOpacity = function(topic, opacity) {
      if(topic && opacity >= 0) {
        return { opacity: opacity };
      } else {
        return;
      }
    }

    return (
      <div id='Topics' className={setTopicsClass(this.props.topicsShown)} style={setOpacity(this.props.topicsShown, this.state.tOpacity)}>
        {
          chapters.map((chapter, index) =>
            (
              <Link to={setSection(chapter)} key={index} className='topicLink'>
                <ChPreview chNumber={chapter} />
              </Link>
            )
          )
        }
      </div>
    )
  }

}

export default Topics;
