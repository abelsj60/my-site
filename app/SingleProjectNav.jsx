import React, { Component } from 'react';

class SingleProjectNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const state = this.props.state;
    const project = this.props.project;

    // TODO: Loading /projects/menu directly, change model with switches?

    return (
      <section className="project-thumbnails">
        {project.attributes.thumbnails.map((thumbnail, index) => (
          <section
            key={index}
            className={
              this.props.isCurrentProject &&
              state.indexForProjectPictures === index
                ? 'active'
                : 'inactive'
            }
            onClick={() =>
              this.props.handleClick(project.attributes.name, index)
            }
          >
            <img src={thumbnail} alt={`Thumbnail ${index + 1}`} />
            <div id="thumbnail-highlight" />
          </section>
        ))}
      </section>
    );
  }
}

export default SingleProjectNav;
