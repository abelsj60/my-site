import React, { Component } from 'react';
import ChPreview from './ChPreview.jsx';
import { Link } from 'react-router-dom';

var chapters = ['One', 'Two', 'Three'];

class Topics extends Component {
  constructor(props) {
    super(props)
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

    return (
      <div id='Topics' className={setTopicsClass(this.props.topicsShown)} style={{opacity: this.props.opacity}}>
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
