import React, { Component } from 'react';
import ChPreview from './ChPreview.jsx';
import { Link } from 'react-router-dom';

var topics = ['One', 'Two', 'Three', 'Four'];

class Topics extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    var setSection = function(topic) {
      if(topic === 'One') {
        return '/project';
      } else if(topic === 'Two') {
        return '/chapter';
      } else if(topic === 'Three') {
        return '/jnl'
      } else if(topic === 'Four') {
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
          topics.map((topic, index) =>
            (
              <Link to={setSection(topic)} key={index} className='topicLink'>
                <ChPreview chNumber={topic} />
              </Link>
            )
          )
        }
      </div>
    )
  }

}

export default Topics;
