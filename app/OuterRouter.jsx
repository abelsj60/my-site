import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.jsx';
import InnerRouter from './InnerRouter.jsx';
import clipData from './helpers/clipData';

class OuterRouter extends Component {
  constructor(props) {
    super(props);

    const location = this.props.location.pathname.split('/');

    this.state = {
      chapter:
        location[1] === 'chapter'
          ? this.validateNumber(location[2], 4) || 1
          : 1,
      projectName:
        location[1] === 'projects'
          ? this.validateProjectName(location[2]) || 'arrow'
          : 'arrow',
      projectImageIndex:
        location[1] === 'projects'
          ? this.validateNumber(location[3], 3) || 1
          : 1,
      publication:
        location[1] === 'jnl'
          ? this.validatePublication(location[2]) || 'forbes'
          : 'forbes',
      headline:
        location[1] === 'jnl'
          ? this.validateHeadline(location[2], location[3]) ||
            'all-things-considered-digitally'
          : 'all-things-considered-digitally',
      storyText: true,
      projectDetails: false
    };

    this.toggleText = this.toggleText.bind(this);
    this.toggleDetails = this.toggleDetails.bind(this);
  }

  toggleText() {
    // Expl: https://stackoverflow.com/a/29101393/9215718

    this.setState({ storyText: !this.state.storyText });
    return 'Switched text!';
  }

  toggleDetails() {
    this.setState({ projectDetails: !this.state.projectDetails });
    return 'Switched details!';
  }

  validatePublication(publication) {
    return [
      'blouinnews',
      'forbes',
      'ft',
      'setonhallmagazine',
      'slate',
      'thedardenreport'
    ].includes(publication)
      ? publication
      : undefined;
  }

  validateHeadline(publication, headline) {
    const thePublication = !headline
      ? this.validatePublication(publication)
      : undefined;

    if (headline) {
      const theClip = clipData.find(clip => {
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

      return theClip ? headline : undefined;
    }

    if (thePublication) {
      return clipData
        .filter(clip => {
          return (
            clip.publication.replace(/\s+/g, '').toLowerCase() ===
            thePublication
          );
        })[0]
        .headline.replace(/\s+/g, '-')
        .replace(/\s+/g, '-')
        .replace(/\./g, '')
        .replace(/'+/g, '')
        .replace(/,+/g, '')
        .replace(/:/g, '')
        .replace(/\//g, '-')
        .toLowerCase();
    }

    // ~ja No headline, publication invalid

    return undefined;
  }

  validateProjectName(name) {
    return ['arrow', 'slingshot', 'tmmnews'].includes(name) ? name : undefined;
  }

  validateNumber(number, max) {
    return parseInt(number) > 0 && parseInt(number) <= max
      ? parseInt(number)
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
              validateProjectName={this.validateProjectName}
              validateNumber={this.validateNumber}
              validatePublication={this.validatePublication}
              validateHeadline={this.validateHeadline}
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

    const chapterNumber =
      location[1] === 'chapter'
        ? this.validateNumber(parseInt(location[2]), 4)
        : undefined;
    const projectName =
      location[1] === 'projects'
        ? this.validateProjectName(location[2])
        : undefined;
    const projectImageIndex =
      location[1] === 'projects'
        ? this.validateNumber(location[3], 3)
        : undefined;
    const publication =
      location[1] === 'jnl' ? this.validatePublication(location[2]) : undefined;
    const headline =
      location[1] === 'jnl'
        ? this.validateHeadline(location[2], location[3])
        : undefined;
    const updateChapterNumber = chapterNumber
      ? chapterNumber !== this.state.chapter
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
      updateChapterNumber ||
      updateProjectName ||
      updateProjectImageIndex ||
      updatePublication ||
      updateHeadline
    ) {
      this.setState({
        chapter: updateChapterNumber ? chapterNumber : this.state.chapter,
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
