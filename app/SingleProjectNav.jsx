import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleProjectNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.thumbnails.map(
      (thumbnail, index) =>
        thumbnail && (
          <Link
            key={index}
            to={'/projects/' + this.props.projName + '/' + index}
            onClick={() => this.props.updatePicIndex(null, index)}
          >
            <img
              className="thumbnail"
              src={thumbnail}
              alt={'thumbnail ' + index}
            />
          </Link>
        )
    );
  }
}

export default SingleProjectNav;
