import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ItemNav extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    var setActiveItem = function(mappedWith, urlItem) {
      urlItem = parseInt(urlItem);

      if(mappedWith === urlItem) {
        return 'active';
      } else {
        return 'inactive';
      }
    }

    return (
        <Link className={'linkForNav ' + setActiveItem(this.props.item, this.props.urlNum)} to={'/chapter/' + this.props.item}>
          <p className='pForChapterNav'>{this.props.item}</p>
        </Link>
    )
  }

}

export default ItemNav;
