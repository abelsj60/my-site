import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router';
import Page from './Page.jsx';
import MagicScroller from './MagicScroller.jsx';
import articleData from './data/articleData.js';
import storyData from './data/storyData.js';
import projectData from './data/projectData.js';
import { splitPath, normalize } from './helpers/utils.js';

class StateManagement extends Component {
  constructor(props) {
    super(props);

    const location = splitPath(this.props);

    // LC: http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

    // ~ja Technically, we don't need the location checks/ternaries in state
    // b/c the type of each route element is different for each section of
    // the site, but explicitly checking seems like a better practice.

    // ~ja E.g., No collisions

    // ~ja ! Note, state is not updated when we come through to the links, so we hit render, then we cDU, where a setState occurs, then re-render (I think the lag between the console.log and the completion of setState is Reconciliation).

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
      menu: location[1] === 'menu' ? 'active' : 'inactive',
      legal: 'inactive',
      explore: 'active',
      magicOpacity: { opacity: 0 },
      magicClicks: splitPath(this.props)[1] === '' ? 'block' : ''
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleText = this.toggleText.bind(this);
    this.toggleLegal = this.toggleLegal.bind(this);
    this.setMagicOpacity = this.setMagicOpacity.bind(this);
    this.toggleMagicPointer = this.toggleMagicPointer.bind(this);
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

  toggleMenu() {
    this.setState({
      menu: this.state.menu === 'active' ? 'inactive' : 'active'
    });
  }

  toggleLegal() {
    this.setState({
      legal: this.state.legal === 'active' ? 'inactive' : 'active'
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

  componentDidUpdate(prevProps) {
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
    const prevLocation =
      splitPath(prevProps)[1] === 'menu'
        ? splitPath(prevProps)[2]
        : splitPath(prevProps)[1];
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
    const updateLegal =
      this.state.legal === 'active' &&
      splitPath(this.props)[1] !== prevLocation;

    if (
      updateChapterTitle ||
      updateProjectName ||
      updateProjectThumbnail ||
      updatePublication ||
      updateHeadline ||
      updateMagicClicksWhenGoingHome ||
      updateMagicClicksWhenLeavingHome ||
      updateLegal
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
            : this.state.magicClicks,
        legal: updateLegal ? 'inactive' : this.state.legal
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
          toggleMenu={this.toggleMenu}
          toggleLegal={this.toggleLegal}
        />
        <MagicScroller />
      </Fragment>
    );
  }
}

export default withRouter(StateManagement);
