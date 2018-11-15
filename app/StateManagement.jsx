import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router';
import Page from './Page.jsx';
import MagicScroller from './MagicScroller.jsx';
import clips from './data/clips/index.js';
import story from './data/the-story/index.js';
import projects from './data/projects/index.js';
import { splitPath, normalize } from './helpers/utils.js';

class StateManagement extends Component {
  constructor(props) {
    super(props);

    const location = splitPath(this.props);

    /*
      ~ja Ternaries prevent collisions

      State is not updated when we first come through, then we hit render, run Reconciliation, id an update, call cDU, setState, and repeat.

      LC: http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
    */

    this.state = {
      chapterTitle:
        location[1] === 'chapter'
          ? this.validateChapter(location[2]) ||
            normalize(story[0].attributes.title)
          : normalize(story[0].attributes.title),
      projectName:
        location[1] === 'projects'
          ? this.validateProjectName(location[2]) || projects[0].attributes.name
          : projects[0].attributes.name,
      projectThumbnail:
        location[1] === 'projects'
          ? this.validateProjectThumbnail(location[3], 3) || 1
          : 1,
      publication:
        location[1] === 'journalism'
          ? this.validatePublication(location[2]) ||
            clips[0].attributes.publication.toLowerCase()
          : clips[0].attributes.publication.toLowerCase(),
      headline:
        location[1] === 'journalism'
          ? this.validateHeadline(location[2], location[3]) ||
            normalize(clips[0].attributes.headline)
          : normalize(clips[0].attributes.headline),
      magicOpacity: { opacity: 0 },
      magicClicks: splitPath(this.props)[1] === '' ? 'block' : '',
      explore: 'active'
    };

    this.toggleText = this.toggleText.bind(this);
    this.setMagicOpacity = this.setMagicOpacity.bind(this);
    this.toggleMagicPointer = this.toggleMagicPointer.bind(this);
    this.turnOffActiveButtons = this.turnOffActiveButtons.bind(this);
  }

  get scrollTop() {
    return window.pageYOffset;
  }

  toggleText() {
    // Expl: https://stackoverflow.com/a/29101393/9215718

    this.setState({
      explore: this.state.explore === 'active' ? 'inactive' : 'active'
    });
  }

  turnOffActiveButtons() {
    if (this.state.explore === 'inactive') {
      this.toggleText();
    }
  }

  validatePublication(publication) {
    return clips.find(clip =>
      normalize(clip.attributes.publication).includes(publication)
    )
      ? publication
      : undefined;
  }

  validateHeadline(publication, headline) {
    const headlineIsValid = clips.find(clip => {
      return normalize(clip.attributes.headline).includes(headline);
    });

    if (!headline && !headlineIsValid) {
      const defaultClip = clips.filter(clip => {
        return (
          normalize(clip.attributes.publication) ===
          this.validatePublication(publication)
        );
      });

      headline = defaultClip.length
        ? normalize(defaultClip[0].attriubtes.headline)
        : undefined;
    }

    return headline;
  }

  validateProjectName(name) {
    return projects.find(project => project.attributes.name.includes(name))
      ? name
      : undefined;
  }

  validateProjectThumbnail(number, max) {
    return parseInt(number) >= 0 && parseInt(number) <= max
      ? parseInt(number)
      : undefined;
  }

  validateChapter(title) {
    const chapterTitle = story.filter(chapter => {
      return normalize(chapter.attributes.title) === title;
    });

    return chapterTitle.length
      ? normalize(chapterTitle[0].attributes.title)
      : undefined;
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
      splitPath(this.props)[1] === '' &&
      this.state.magicClicks === 'block' &&
      this.scrollTop > 3220
    ) {
      this.setState({ magicClicks: '' });
    }

    if (
      splitPath(this.props)[1] === '' &&
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

  componentDidUpdate() {
    // ~ja Must compare props to state to see a difference
    // Location checks used to prevent collisions

    const location = splitPath(this.props);

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
    const updateProjectThumbnail = projectThumbnail
      ? projectThumbnail !== this.state.projectThumbnail
      : undefined;
    const updatePublication = publication
      ? publication !== this.state.publication
      : undefined;
    const updateHeadline = headline
      ? headline !== this.state.headline
      : undefined;
    const updateMagicClicksWhenGoingHome =
      location[1] === '' &&
      this.scrollTop < 3220 &&
      this.state.magicClicks === '';
    const updateMagicClicksWhenLeavingHome =
      location[1] !== '' && this.state.magicClicks === 'block';

    if (
      updateChapterTitle ||
      updateProjectName ||
      updateProjectThumbnail ||
      updatePublication ||
      updateHeadline ||
      updateMagicClicksWhenGoingHome ||
      updateMagicClicksWhenLeavingHome
    ) {
      this.setState({
        chapterTitle: updateChapterTitle
          ? chapterTitle
          : this.state.chapterTitle,
        projectName: updateProjectName ? projectName : this.state.projectName,
        projectThumbnail: updateProjectThumbnail
          ? projectThumbnail
          : this.state.projectThumbnail,
        publication: updatePublication ? publication : this.state.publication,
        headline: updateHeadline ? headline : this.state.headline,
        magicClicks: updateMagicClicksWhenGoingHome
          ? 'block'
          : updateMagicClicksWhenLeavingHome
            ? ''
            : this.state.magicClicks
      });
    }

    // console.log('State in cDU: ', this.state);
    // console.log('--', Date.now());
  }

  render() {
    return (
      <Fragment>
        <Page
          state={this.state}
          toggleText={this.toggleText}
          turnOffActiveButtons={this.turnOffActiveButtons}
        />
        <MagicScroller />
      </Fragment>
    );
  }
}

export default withRouter(StateManagement);
