import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ChNav extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    var setActiveItem = function(mappedWith, urlNum) {
      urlNum = parseInt(urlNum);

      if(mappedWith === urlNum) {
        return 'active';
      } else {
        return 'inactive';
      }
    }

    return (
        <Link className={'link linkForNav ' + setActiveItem(this.props.chapter, this.props.urlChNum)} to={'/chapter/' + this.props.chapter}>
          <p className='pForChapterNav'>{this.props.chapter}</p>
        </Link>
    )
  }

}

export default ChNav;
