import React, { Fragment, Component } from 'react';

class ProjectDetails extends Component {
  constructor(props) {
    super(props);
  }

  toggleDetailsClass(state) {
    return !state ? '' : 'show-details';
  }

  get projectDescriptions() {
    return this.props.projectData.details;
  }

  get projectDescriptionKeys() {
    return Object.keys(this.projectDescriptions);
  }

  render() {
    return (
      <section
        className={`project-details ${this.toggleDetailsClass(
          this.props.showProjectDetails
        )}`}
      >
        <h1> {this.props.projectName} </h1>
        {this.projectDescriptionKeys.map((key, index) => {
          if (!Array.isArray(this.projectDescriptions[key])) {
            return (
              <Fragment key={index}>
                <h3 className="project-description">
                  {key[0].toUpperCase() + key.slice(1)}
                </h3>
                <p>{this.projectDescriptions[key]}</p>
              </Fragment>
            );
          }
        })}

        <section
          id="close-details-from-inside"
          onClick={() => this.props.toggleDetails()}
        >
          <p>CLOSE</p>
        </section>
      </section>
    );
  }
}

export default ProjectDetails;
