import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { splitPath } from './helpers/utils.js';

class SingleProjectNav extends Component {
  constructor(props) {
    super(props);
  }

  get location() {
    return splitPath(this.props);
  }

  addCssToShowActiveThumbnail(name, thumbnail) {
    let currentName;
    let currentThumbnail;

    if (!this.location.includes('menu')) {
      currentName = this.location[2];
      currentThumbnail = parseInt(this.location[3]);
    } else {
      currentName = this.props.state.projectName;
      currentThumbnail = this.props.state.projectThumbnail;
    }

    if (name === currentName && thumbnail === currentThumbnail) {
      return 'active';
    }

    return 'inactive';
  }

  render() {
    return (
      <section className="project-thumbnails">
        {this.props.project.attributes.thumbnails.map(
          (thumbnail, index) =>
            thumbnail && (
              <Link
                key={index}
                to={`/projects/${this.props.project.attributes.name}/${index +
                  1}`}
                className={this.addCssToShowActiveThumbnail(
                  this.props.projectName || this.props.project.attributes.name,
                  index + 1
                )}
              >
                <img src={thumbnail} alt={`Thumbnail ${index + 1}`} />
                <div id="thumbnail-highlight" />
              </Link>
            )
        )}
      </section>
    );
  }
}

export default withRouter(SingleProjectNav);
