import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    caption: 'customizes interactive video for every viewer'
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
    caption:
      'perfectly choreographs live software presentations around the world'
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
    caption: 'is a bespoke video news site for episodic content'
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

  render() {
    const urlName = this.props.match.params.name;
    const setActiveItem = function(mappedWith, urlItem) {
      if (mappedWith === urlItem) {
        return 'active';
      } else {
        return 'inactive';
      }
    };
    const prepName = function(name) {
      if (name === 'tmmnews') {
        return name.slice(0, 3).toUpperCase() + name.slice(3);
      } else {
        return name.slice(0, 1).toUpperCase() + name.slice(1);
      }
    };

    return (
      <main id="my-projects" className="">
        <section id="project-info" className="left">
          <nav>
            {projectData.map((project, index) => (
              <Link
                key={index}
                to={'/projects/' + project.name + '/1'}
                onClick={() => this.updateState(null, project)}
                className={setActiveItem(project.name, urlName)}
              >
                <p>{prepName(project.name)}</p>
              </Link>
            ))}
          </nav>
          <section className="project-text">
            <p className="project-text">Project</p>
            <p>{prepName(this.state.projName)}</p>
            <p className="project-text">Type</p>
            <p>Answer</p>
            <p className="project-text">What I did</p>
            <p>Answer</p>
            <p className="project-text">Key technologies</p>
            <p>Answer</p>
            <p className="project-text">Description</p>
            <p>Answer</p>
            <p className="project-text">What you're looking at</p>
            <p>Answer</p>
          </section>
        </section>
        <section id="project-images" className="right">
          <section className="project-image">
            <img
              src={this.state.projImgs[this.state.picIndex - 1]}
              alt="mainPic"
            />
          </section>
          <section className="project-thumbnails">
            {this.state.projThumbs.map(
              (thumbnail, index) =>
                thumbnail && (
                  <Link
                    key={index}
                    to={'/projects/' + this.state.projName + '/' + index}
                    onClick={() => this.updatePicIndex(null, index)}
                  >
                    <img
                      className="thumbnail"
                      src={thumbnail}
                      alt={'thumbnail ' + index}
                    />
                  </Link>
                )
            )}
          </section>
        </section>
      </main>
    );
  }
}

export default Projects;
