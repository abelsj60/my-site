import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ItemNav extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    var setActiveItem = function(mappedWith, urlParam) {
      if(parseInt(urlParam)) {
        urlParam = parseInt(urlParam);
      }

      if(mappedWith === urlParam) {
        return 'active';
      } else {
        return 'inactive';
      }
    }

    return (
        <Link className={setActiveItem(this.props.item, this.props.param)} to={this.props.route + this.props.item}>
          <p>{this.props.item}</p>
        </Link>
    )
  }

}

export default ItemNav;
