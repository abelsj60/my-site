import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleProjectNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="project-thumbnails">
        {this.props.projectData.thumbnails.map(
          (thumbnail, index) =>
            thumbnail && (
              <Link
                key={index}
                onClick={
                  this.props.state && this.props.state.menu === 'active'
                    ? () => this.props.toggleMenu()
                    : undefined
                }
                to={`/projects/${this.props.projectData.name}/${index + 1}`}
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
