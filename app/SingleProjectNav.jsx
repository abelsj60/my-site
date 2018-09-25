import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleProjectNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.project.thumbnails.map(
      (thumbnail, index) =>
        thumbnail && (
          <Link
            key={index}
            to={'/projects/' + this.props.project.name + '/' + index}
            onClick={() =>
              this.props.updateState(null, this.props.project, index)
            }
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
