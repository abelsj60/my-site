import React, { Component } from 'react';
import ReactFitText from 'react-fittext';
import MultiProjectNav from './MultiProjectNav.jsx';
import SingleProjectNav from './SingleProjectNav.jsx';
import BlockQuote from './BlockQuote.jsx';

const projectData = [
  {
    name: 'arrow',
    thumbnails: [
      null,
      'https://picsum.photos/196/175/?random',
      'https://picsum.photos/197/175/?random',
      'https://picsum.photos/198/175/?random'
    ],
    full: [
      'https://picsum.photos/873/569/?random',
      'https://picsum.photos/874/569/?random',
      'https://picsum.photos/875/569/?random'
    ],
    caption: 'Customized video interactivity'
  },
  {
    name: 'slingshot',
    thumbnails: [
      null,
      'https://picsum.photos/199/175/?random',
      'https://picsum.photos/200/175/?random',
      'https://picsum.photos/201/175/?random'
    ],
    full: [
      'https://picsum.photos/876/569/?random',
      'https://picsum.photos/877/569/?random',
      'https://picsum.photos/878/569/?random'
    ],
    caption: 'Perfect software demos'
  },
  {
    name: 'tmmnews',
    thumbnails: [
      null,
      'https://picsum.photos/202/175/?random',
      'https://picsum.photos/203/175/?random',
      'https://picsum.photos/204/175/?random'
    ],
    full: [
      'https://picsum.photos/879/569/?random',
      'https://picsum.photos/880/569/?random',
      'https://picsum.photos/881/569/?random'
    ],
    caption: 'Bespoke video news'
  }
];

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      thumbnails: [],
      images: '',
      caption: '',
      pictureIndex: null
    };

    this.updateState = this.updateState.bind(this);
  }

  get projectName() {
    const name = this.state.name;

    if (name === 'tmmnews') {
      return name.slice(0, 3).toUpperCase() + name.slice(3);
    } else {
      return name.slice(0, 1).toUpperCase() + name.slice(1);
    }
  }

  componentDidMount() {
    const stateData = projectData.filter(
      project => project.name === this.props.match.params.name
    )[0];

    this.setState({
      name: stateData.name,
      thumbnails: stateData.thumbnails,
      images: stateData.full,
      caption: stateData.caption,
      pictureIndex: this.props.match.params.thumbnail
    });
  }

  updateState(unused, project, index) {
    // ~ja ? Is this necssary? Can't I just setState?

    this.setState({
      name: project.name,
      thumbnails: project.thumbnails,
      images: project.full,
      caption: project.caption,
      pictureIndex: index
    });
  }

  render() {
    return (
      <main id="my-projects" className="">
        <section id="desktop-nav" className="left">
          <MultiProjectNav
            projectData={projectData.filter(
              project => project.name !== this.state.name
            )}
            name={this.state.name}
            updateState={this.updateState}
          />
        </section>
        <section id="project-images" className="right">
          <ReactFitText compressor={1} minFontSize={48}>
            <BlockQuote text={this.projectName} />
          </ReactFitText>
          <section id="images-container">
            <section className="project-image">
              <img
                src={this.state.images[this.state.pictureIndex - 1]}
                alt="mainPic"
              />
            </section>
            <section id="thumbnails-main" className="project-thumbnails">
              {this.state.name && (
                <SingleProjectNav
                  project={
                    projectData.filter(
                      project => project.name === this.state.name
                    )[0]
                  }
                  updateState={this.updateState}
                />
              )}
            </section>
          </section>
          <BlockQuote elementId="new-block" text={this.state.caption} />
        </section>
      </main>
    );
  }
}

export default Projects;
