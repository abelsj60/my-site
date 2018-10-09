import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ItemNav extends Component {
  constructor(props) {
    super(props);
  }

  idActiveItem(chapter, param) {
    if (chapter === param) {
      return 'active';
    } else {
      return 'inactive';
    }
  }

  render() {
    return (
      <Link
        className={this.idActiveItem(this.props.chapterTitle, this.props.param)}
        to={`${this.props.route}${this.props.chapterTitle}`}
      >
        <p>{this.props.item}</p>
      </Link>
    );
  }
}

export default ItemNav;
