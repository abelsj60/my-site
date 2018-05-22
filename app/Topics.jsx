import React, { Component } from 'react';
import ChPreview from './ChPreview.jsx';
import { Link } from 'react-router-dom';

var topics = ['One', 'Two', 'Three'];

class Topics extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    var nextPath = {
      'One': '/project',
      'Two': '/chapter',
      'Three': '/jnl',
      'Four': '/alexa'
    };

    return (
      <div id='Topics' style={{opacity: this.props.opacity}}>
        {
          topics.map((topic, index) =>
            (
              <Link to={nextPath[topic]} key={index} className='topicLink'>
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
