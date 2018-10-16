import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleProjectNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="project-thumbnails">
        {this.props.project.thumbnails.map(
          (thumbnail, index) =>
            thumbnail && (
              <Link
                key={index}
                to={`/projects/${this.props.project.name}/${index + 1}`}
              >
                <img src={thumbnail} alt={`Thumbnail ${index + 1}`} />
              </Link>
            )
        )}
      </section>
    );
  }
}

export default SingleProjectNav;
