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
      projName: '',
      projThumbs: [],
      projImgs: '',
      projCaption: '',
      picIndex: null
    };

    this.getProjData = this.getProjData.bind(this);
    this.updateState = this.updateState.bind(this);
    this.updatePicIndex = this.updatePicIndex.bind(this);
  }

  componentDidMount() {
    const { params } = this.props.match;
    const pIndex = params.thumbnail;
    const pData = this.getProjData(null, params.name);

    this.setState({
      projName: pData.name,
      projThumbs: pData.thumbnails,
      projImgs: pData.full,
      projCaption: pData.caption,
      picIndex: pIndex
    });
  }

  updateState(event, project) {
    this.setState({
      projName: project.name,
      projThumbs: project.thumbnails,
      projImgs: project.full,
      projCaption: project.caption,
      picIndex: 1
    });
  }

  updatePicIndex(event, index) {
    this.setState({ picIndex: index });
  }

  getProjData(event, project) {
    if (project === 'arrow') {
      return projectData[0];
    } else if (project === 'slingshot') {
      return projectData[1];
    } else if (project === 'tmmnews') {
      return projectData[2];
    }
  }

  prepName(name) {
    if (name === 'tmmnews') {
      return name.slice(0, 3).toUpperCase() + name.slice(3);
    } else {
      return name.slice(0, 1).toUpperCase() + name.slice(1);
    }
  }

  render() {
    return (
      <main id="my-projects" className="">
        <ReactFitText compressor={1} minFontSize={48}>
          <BlockQuote text={this.prepName(this.state.projName)} />
        </ReactFitText>
        <section id="project-info" className="left">
          <nav id="desktop-project-nav">
            <MultiProjectNav
              projectData={projectData}
              prepName={this.prepName}
              projName={this.state.projName}
              updatePicIndex={this.updatePicIndex}
            />
          </nav>
        </section>
        <section id="project-images" className="right">
          <section className="project-image">
            <img
              src={this.state.projImgs[this.state.picIndex - 1]}
              alt="mainPic"
            />
          </section>
          <section id="thumbnails-main" className="project-thumbnails">
            <SingleProjectNav
              thumbnails={this.state.projThumbs}
              projName={this.props.projName}
              updatePicIndex={this.updatePicIndex}
            />
          </section>
          <BlockQuote
            elementId="new-block"
            text={this.prepName(this.state.projCaption)}
          />
        </section>
        <BlockQuote text={this.prepName(this.state.projCaption)} />
      </main>
    );
  }
}

export default Projects;
