import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.jsx';
import InnerRouter from './InnerRouter.jsx';
import articleData from './data/articleData';
import storyData from './data/storyData';
import projectData from './data/projectData';

class OuterRouter extends Component {
  constructor(props) {
    super(props);

    const location = this.props.location.pathname.split('/');

    this.state = {
      chapterTitle:
        location[1] === 'chapter'
          ? this.validateChapter(location[2]) ||
            storyData[0].title
              .replace(/,+/g, '')
              .replace(/\s+/g, '-')
              .toLowerCase()
          : storyData[0].title
            .replace(/,+/g, '')
            .replace(/\s+/g, '-')
            .toLowerCase(),
      projectName:
        location[1] === 'projects'
          ? this.validateProjectName(location[2]) || projectData[0].name
          : projectData[0].name,
      projectImageIndex:
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
            articleData[0].headline
              .toLowerCase()
              .replace(/\s+/g, '-')
              .replace(/\./g, '')
              .replace(/'+/g, '')
              .replace(/,+/g, '')
              .replace(/:/g, '')
              .replace(/\//g, '-')
              .toLowerCase()
          : articleData[0].headline
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/\./g, '')
            .replace(/'+/g, '')
            .replace(/,+/g, '')
            .replace(/:/g, '')
            .replace(/\//g, '-')
            .toLowerCase(),
      showStoryText: true,
      showProjectDetails: false
    };

    this.toggleText = this.toggleText.bind(this);
    this.toggleDetails = this.toggleDetails.bind(this);
  }

  toggleText() {
    // Expl: https://stackoverflow.com/a/29101393/9215718

    this.setState({ showStoryText: !this.state.showStoryText });
    return 'Switched text!';
  }

  toggleDetails() {
    this.setState({ showProjectDetails: !this.state.showProjectDetails });
    return 'Switched details!';
  }

  validatePublication(publication) {
    return articleData.find(clip =>
      clip.publication
        .replace(/\s+/g, '')
        .toLowerCase()
        .includes(publication)
    )
      ? publication
      : undefined;
  }

  validateHeadline(publication, headline) {
    const headlineIsValid = articleData.find(clip => {
      return clip.headline
        .replace(/\s+/g, '-')
        .replace(/\./g, '')
        .replace(/'+/g, '')
        .replace(/,+/g, '')
        .replace(/:/g, '')
        .replace(/\//g, '-')
        .toLowerCase()
        .includes(headline);
    });

    if (!headline && !headlineIsValid) {
      const defaultClip = articleData.filter(clip => {
        return (
          clip.publication.replace(/\s+/g, '').toLowerCase() ===
          this.validatePublication(publication)
        );
      });

      headline = defaultClip.length
        ? defaultClip[0].headline
          .replace(/\s+/g, '-')
          .replace(/\./g, '')
          .replace(/'+/g, '')
          .replace(/,+/g, '')
          .replace(/:/g, '')
          .replace(/\//g, '-')
          .toLowerCase()
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
    return parseInt(number) > 0 && parseInt(number) <= max
      ? parseInt(number)
      : undefined;
  }

  validateChapter(title) {
    const chapterTitle = storyData.filter(chapter => {
      return (
        chapter.title
          .replace(/,+/g, '')
          .replace(/\s+/g, '-')
          .toLowerCase() === title
      );
    });

    return chapterTitle.length
      ? chapterTitle[0].title
        .replace(/,+/g, '')
        .replace(/\s+/g, '-')
        .toLowerCase()
      : undefined;
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route
          render={({ location }) => (
            <InnerRouter
              state={this.state}
              toggleText={this.toggleText}
              toggleDetails={this.toggleDetails}
              location={location}
            />
          )}
        />
      </Switch>
    );
  }

  componentDidUpdate() {
    // ~ja Must compare props to state to see a difference
    // Location checks used to prevent collisions

    const location = this.props.location.pathname.split('/');

    const chapterTitle =
      location[1] === 'about' && location.length > 2
        ? this.validateChapter(location[2])
        : undefined;
    const projectName =
      location[1] === 'projects'
        ? this.validateProjectName(location[2])
        : undefined;
    const projectImageIndex =
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
    const updateProjectImageIndex = projectImageIndex
      ? projectImageIndex !== this.state.projectImageIndex
      : undefined;
    const updatePublication = publication
      ? publication !== this.state.publication
      : undefined;
    const updateHeadline = headline
      ? headline !== this.state.headline
      : undefined;

    if (
      updateChapterTitle ||
      updateProjectName ||
      updateProjectImageIndex ||
      updatePublication ||
      updateHeadline
    ) {
      this.setState({
        chapterTitle: updateChapterTitle
          ? chapterTitle
          : this.state.chapterTitle,
        projectName: updateProjectName ? projectName : this.state.projectName,
        projectImageIndex: updateProjectImageIndex
          ? projectImageIndex
          : this.state.projectImageIndex,
        publication: updatePublication ? publication : this.state.publication,
        headline: updateHeadline ? headline : this.state.headline
      });
    }

    console.log('State in cDU: ', this.state);
    console.log('---');
  }
}

export default withRouter(OuterRouter);
