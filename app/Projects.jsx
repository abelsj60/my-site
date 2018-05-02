import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

var projectData = [
  {
    name: 'arrow',
    thumbnails:
      [
        null,
        'https://picsum.photos/196/175/?random', 'https://picsum.photos/197/175/?random', 'https://picsum.photos/198/175/?random'
      ],
    full:
      [
        'https://picsum.photos/873/569/?random',
        'https://picsum.photos/874/569/?random',
        'https://picsum.photos/875/569/?random'
      ],
    caption: 'customizes interactive video for every viewer'
  },
  {
    name: 'slingshot',
    thumbnails:
      [
        null,
        'https://picsum.photos/199/175/?random', 'https://picsum.photos/200/175/?random', 'https://picsum.photos/201/175/?random'
      ],
    full:
      [
        'https://picsum.photos/876/569/?random',
        'https://picsum.photos/877/569/?random',
        'https://picsum.photos/878/569/?random'
      ],
    caption: 'perfectly choreographs live software presentations around the world'
  },
  {
    name: 'tmmnews',
    thumbnails:
      [
        null,
        'https://picsum.photos/202/175/?random', 'https://picsum.photos/203/175/?random', 'https://picsum.photos/204/175/?random'
      ],
    full:
      [
        'https://picsum.photos/879/569/?random',
        'https://picsum.photos/880/569/?random',
        'https://picsum.photos/881/569/?random'
      ],
    caption: 'is a bespoke video news site for episodic content'
  }
];

class Projects extends Component {
  constructor(props) {
    super(props)
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
    var { params } = this.props.match;
    var pIndex = params.thumbnail;
    var pData = this.getProjData(null, params.name);

    this.setState(
      {
        projName: pData.name,
        projThumbs: pData.thumbnails,
        projImgs: pData.full,
        projCaption: pData.caption,
        picIndex: pIndex
      }
    )
  }

  updateState(event, project) {
    this.setState(
      {
        projName: project.name,
        projThumbs: project.thumbnails,
        projImgs: project.full,
        projCaption: project.caption,
        picIndex: 1
      }
    )
  }

  updatePicIndex(event, index) {
    this.setState({picIndex: index})
  }

  getProjData(event, project) {
    if(project === 'arrow') {
      return projectData[0];
    } else if(project === 'slingshot') {
      return projectData[1];
    } else if(project === 'tmmnews') {
      return projectData[2];
    }
  }

  render() {
    var urlName = this.props.match.params.name;

    var setActiveItem = function(mappedWith, urlItem) {
      if(mappedWith === urlItem) {
        return 'active';
      } else {
        return 'inactive';
      }
    }

    return (
      <div id='ProjectContainer'>
        <div id='ProjectNav' className='BoxForProject'>

          {
            projectData.map((project, index) => (
              <Link key={index} to={'/project/' + project.name + '/1'} onClick={() => this.updateState(null, project)}>
                <p id='projectLinks' className={setActiveItem(project.name, urlName)}>

                  {
                    project.name.slice(0, 1).toUpperCase() + project.name.slice(1)
                  }

                </p>
              </Link>
            ))
          }

        </div>
        <div id='CapAndContent'>
          <div id='Caption'>
            <p>
              {
                this.state.projName.slice(0, 1).toUpperCase() + this.state.projName.slice(1) + ' ' + this.state.projCaption
              }
            </p>
          </div>
          <div id='ProjectContent' className='BoxForProject'>
            <div id='ProjectElements'>
              <div id='MainPicture' style={{overflow: 'hidden'}}>
                <img src=

                {
                  this.state.projImgs[this.state.picIndex - 1]
                }

                alt='mainPic' />
              </div>
              <div id='Thumbnails' className='FrameForProject'>

                {
                  this.state.projThumbs.map((thumbnail, index) => (
                    thumbnail &&
                      <Link to={'/project/' + this.state.projName + '/' + index} className='projectLink' onClick={() => this.updatePicIndex(null, index)}>
                        <img className='imgThumbs' src={thumbnail} alt={'thumbnail ' + index} />
                      </Link>
                    )
                  )
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;
