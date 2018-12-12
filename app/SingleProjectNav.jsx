import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleProjectNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const project = this.props.project;

    // TODO: Loading /projects/menu directly, change model with switches?

    return (
      <section className="project-thumbnails">
        {project.attributes.thumbnails.map((thumbnail, index) => (
          <Link
            key={index}
            className={
              this.props.isCurrentProject &&
              this.props.localState.indexForProjectPictures === index
                ? 'active'
                : 'inactive'
            }
            to={`/projects/${project.attributes.name}/${index + 1}`}
          >
            <img src={thumbnail} alt={`Thumbnail ${index + 1}`} />
            <div id="thumbnail-highlight" />
          </Link>
        ))}
      </section>
    );
  }
}

export default SingleProjectNav;
