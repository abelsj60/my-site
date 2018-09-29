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
  }

  formatProjectName(name) {
    if (name === 'tmmnews') {
      return name.slice(0, 3).toUpperCase() + name.slice(3);
    } else {
      return name.slice(0, 1).toUpperCase() + name.slice(1);
    }
  }

  render() {
    const filteredProjectData = projectData.filter(
      project => project.name === this.props.match.params.name
    )[0];
    const projectName = filteredProjectData.name;
    const formattedProjectName = this.formatProjectName(
      filteredProjectData.name
    );
    const projectCaption = filteredProjectData.caption;
    const fullSizeProjectImages = filteredProjectData.full;
    const indexForFullSizeProjectImages = this.props.match.params.thumbnail;

    return (
      <main id="my-projects" className="">
        <section id="desktop-nav" className="left">
          <MultiProjectNav
            projectData={projectData.filter(
              project => project.name !== projectName
            )}
            formatProjectName={this.formatProjectName}
          />
        </section>
        <section id="project-images" className="right">
          <ReactFitText compressor={1} minFontSize={48}>
            <BlockQuote text={formattedProjectName} />
          </ReactFitText>
          <section id="images-container">
            <section className="project-image">
              <img
                src={fullSizeProjectImages[indexForFullSizeProjectImages - 1]}
                alt="mainPic"
              />
            </section>
            <section id="thumbnails-main" className="project-thumbnails">
              {<SingleProjectNav project={filteredProjectData} />}
            </section>
          </section>
          <BlockQuote elementId="new-block" text={projectCaption} />
        </section>
      </main>
    );
  }
}

export default Projects;
