import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router';
import Router from './Router.jsx';
import MagicScroller from './MagicScroller.jsx';
import articleData from './data/articleData.js';
import storyData from './data/storyData.js';
import projectData from './data/projectData.js';
import { normalize } from './helpers/utils.js';

class AppState extends Component {
  constructor(props) {
    super(props);

    // ~ja Hold component state here when controlled by AppBar
    // Can't pass state to AppBar from Chapter in this model w/o Redux

    const location = this.props.location.pathname.split('/');

    this.state = {
      chapterTitle:
        location[1] === 'chapter'
          ? this.validateChapter(location[2]) || normalize(storyData[0].title)
          : normalize(storyData[0].title),
      projectName:
        location[1] === 'projects'
          ? this.validateProjectName(location[2]) || projectData[0].name
          : projectData[0].name,
      projectThumbnail:
        location[1] === 'projects'
          ? this.validateProjectThumbnail(location[3], 3) || 1
          : 1,
      publication:
        location[1] === 'journalism'
          ? this.validatePublication(location[2]) ||
            articleData[0].publication.toLowerCase()
          : articleData[0].publication.toLowerCase(),
      headline:
        location[1] === 'journalism'
          ? this.validateHeadline(location[2], location[3]) ||
            normalize(articleData[0].headline)
          : normalize(articleData[0].headline),
      storyText: 'show-text',
      magicOpacity: { opacity: 0 },
      magicClicks:
        this.props.location.pathname.split('/')[1] === '' ? 'block' : ''
    };

    this.toggleText = this.toggleText.bind(this);
    this.setMagicOpacity = this.setMagicOpacity.bind(this);
    this.toggleMagicPointer = this.toggleMagicPointer.bind(this);
  }

  get scrollTop() {
    return window.pageYOffset;
  }

  toggleText() {
    // Expl: https://stackoverflow.com/a/29101393/9215718

    this.setState({
      storyText: this.state.storyText === 'show-text' ? 'no-text' : 'show-text'
    });
  }

  validatePublication(publication) {
    return articleData.find(clip =>
      normalize(clip.publication).includes(publication)
    )
      ? publication
      : undefined;
  }

  validateHeadline(publication, headline) {
    const headlineIsValid = articleData.find(clip => {
      return normalize(clip.headline).includes(headline);
    });

    if (!headline && !headlineIsValid) {
      const defaultClip = articleData.filter(clip => {
        return (
          normalize(clip.publication) === this.validatePublication(publication)
        );
      });

      headline = defaultClip.length
        ? normalize(defaultClip[0].headline)
        : undefined;
    }

    return headline;
  }

  validateProjectName(name) {
    return projectData.find(project => project.name.includes(name))
      ? name
      : undefined;
  }

  validateProjectThumbnail(number, max) {
    return parseInt(number) >= 0 && parseInt(number) <= max
      ? parseInt(number)
      : undefined;
  }

  validateChapter(title) {
    const chapterTitle = storyData.filter(chapter => {
      return normalize(chapter.title) === title;
    });

    return chapterTitle.length ? normalize(chapterTitle[0].title) : undefined;
  }

  setMagicOpacity() {
    let finalOpacity;
    const opacityValue = (this.scrollTop - 580) / (3221 - 580);
    const opacityToString = opacityValue + '';
    const opacityFailSafe =
      this.scrollTop < 15 && this.state.magicOpacity.opacity !== 0;

    if (opacityValue > 0 && opacityValue <= 1) {
      finalOpacity = opacityToString.slice(1, 4);
    } else if (opacityValue >= 1) {
      finalOpacity = 1;
    } else if (opacityFailSafe) {
      finalOpacity = 0;
    }

    if (typeof finalOpacity !== 'string') {
      finalOpacity = finalOpacity + '';
    }

    if (finalOpacity || opacityFailSafe) {
      this.setState({
        magicOpacity: {
          opacity: finalOpacity
        }
      });
    }
  }

  toggleMagicPointer() {
    if (
      this.props.location.pathname.split('/')[1] === '' &&
      this.state.magicClicks === 'block' &&
      this.scrollTop > 3220
    ) {
      this.setState({ magicClicks: '' });
    }

    if (
      this.props.location.pathname.split('/')[1] === '' &&
      this.state.magicClicks === '' &&
      this.scrollTop < 3220
    ) {
      this.setState({ magicClicks: 'block' });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.setMagicOpacity);
    window.addEventListener('scroll', this.toggleMagicPointer);
  }

  render() {
    return (
      <Fragment>
        <Router state={this.state} toggleText={this.toggleText} />
        <MagicScroller location={this.props.location} />
      </Fragment>
    );
  }

  componentDidUpdate() {
    // ~ja Must compare props to state to see a difference
    // Location checks used to prevent collisions

    const location = this.props.location.pathname.split('/');

    const chapterTitle =
      location[1] === 'chapter' ? this.validateChapter(location[2]) : undefined;
    const projectName =
      location[1] === 'projects'
        ? this.validateProjectName(location[2])
        : undefined;
    const projectThumbnail =
      location[1] === 'projects'
        ? this.validateProjectThumbnail(location[3], 3)
        : undefined;
    const publication =
      location[1] === 'journalism'
        ? this.validatePublication(location[2])
        : undefined;
    const headline =
      location[1] === 'journalism'
        ? this.validateHeadline(location[2], location[3])
        : undefined;
    const updateChapterTitle = chapterTitle
      ? chapterTitle !== this.state.chapterTitle
      : undefined;
    const updateProjectName = projectName
      ? projectName !== this.state.projectName
      : undefined;
    const updateprojectThumbnail = projectThumbnail
      ? projectThumbnail !== this.state.projectThumbnail
      : undefined;
    const updatePublication = publication
      ? publication !== this.state.publication
      : undefined;
    const updateHeadline = headline
      ? headline !== this.state.headline
      : undefined;
    const updateMagicClicksWhenNavigatingHome =
      location[1] === '' &&
      this.scrollTop < 3220 &&
      this.state.magicClicks === '';
    const updateMagicClicksWhenNavigatingInward =
      location[1] !== '' && this.state.magicClicks === 'block';

    if (
      updateChapterTitle ||
      updateProjectName ||
      updateprojectThumbnail ||
      updatePublication ||
      updateHeadline ||
      updateMagicClicksWhenNavigatingHome ||
      updateMagicClicksWhenNavigatingInward
    ) {
      this.setState({
        chapterTitle: updateChapterTitle
          ? chapterTitle
          : this.state.chapterTitle,
        projectName: updateProjectName ? projectName : this.state.projectName,
        projectThumbnail: updateprojectThumbnail
          ? projectThumbnail
          : this.state.projectThumbnail,
        publication: updatePublication ? publication : this.state.publication,
        headline: updateHeadline ? headline : this.state.headline,
        magicClicks: updateMagicClicksWhenNavigatingHome
          ? 'block'
          : updateMagicClicksWhenNavigatingInward
            ? ''
            : this.state.magicClicks
      });
    }

    console.log('State in cDU: ', this.state);
    console.log('--', Date.now());
  }
}

export default withRouter(AppState);
