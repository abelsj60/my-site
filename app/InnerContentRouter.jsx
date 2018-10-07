import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Chapter from './Chapter.jsx';
import Projects from './Projects.jsx';
import JandL from './JandL.jsx';
import IndexMenu from './IndexMenu.jsx';
import NotFound from './NotFound.jsx';
import clipData from './helpers/clipData.js';
// import storyData from './helpers/storyData.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    // LC: http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

    const location = this.props.location.pathname.split('/');

    console.log('Constructor');
    // console.log('Location in Constructor:', location);
    // console.log('Number test: ', this.validateNumber(location[2], 5));
    // console.log('Length test: ', location.length === 2);

    // ~ja Technically, we don't need the location checks/ternaries in state
    // b/c the location of each number type is different in each section of
    // the site, but explicitly checking seems like a better practice

    // ~ja ! Note, state is not updated when we come through to the links, so we hit render, then we cDU, where a setState occurs, then re-render (I think the lag between the log and the completion of setState is reconciliation). Do do something other than relying on state; setState w/func? Call earlier? build param differently?

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
    return 'Switched toggleDetails!';
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
        .replace(/\./g, '')
        .replace(/'+/g, '')
        .replace(/,+/g, '')
        .replace(/\//g, '-')
        .toLowerCase();
    }

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
    console.log('State in Render: ', this.state);
    return (
      <section className="inner-page">
        <Header />
        <Switch>
          {/*
            <Route
              exact
              path="/chapter/index"
              render={() => {
                const section = 'chapter';

                return <IndexMenu section={section} />;
            }}
            />
          */}
          <Route
            exact
            path="/chapter"
            render={() => <Redirect to={`/chapter/${this.state.chapter}`} />}
          />
          <Route
            path="/chapter/:num"
            render={() => {
              if (this.state.chapter) {
                return (
                  <Chapter
                    chapterNumber={this.state.chapter}
                    storyText={this.state.storyText}
                  />
                );
              } else {
                return <NotFound />;
              }
            }}
          />
          <Route
            exact
            path="/projects"
            render={() => (
              <Redirect
                to={`/projects/${this.state.projectName}/${
                  this.state.projectImageIndex
                }`}
              />
            )}
          />
          <Route
            exact
            path="/projects/:name"
            render={() => (
              <Redirect
                to={`/projects/${this.state.projectName}/${
                  this.state.projectImageIndex
                }`}
              />
            )}
          />
          <Route
            path="/projects/:name/:projectImageIndex"
            render={() => {
              if (this.state.projectName && this.state.projectImageIndex) {
                return (
                  <Projects
                    projectName={this.state.projectName}
                    projectImageIndex={this.state.projectImageIndex}
                    projectDetails={this.state.projectDetails}
                  />
                );
              } else {
                return <NotFound />;
              }
            }}
          />
          <Route
            exact
            path="/jnl"
            render={() => (
              <Redirect
                to={`/jnl/${this.state.publication}/${this.state.headline}`}
              />
            )}
          />
          <Route
            exact
            path="/jnl/:publication"
            render={() => {
              return (
                <Redirect
                  to={`/jnl/${this.state.publication}/${this.state.headline}`}
                />
              );
            }}
          />
          <Route
            path="/jnl/:publication/:headline"
            render={() => {
              return (
                <JandL
                  publication={this.state.publication}
                  headline={this.state.headline}
                />
              );
            }}
          />
          <Route
            exact
            path="/index"
            render={() => {
              return <Redirect to={'/index/projects'} />;
            }}
          />
          <Route
            path="/index/:section"
            render={({ match }) => {
              const section = match.params.section.toLowerCase();

              return <IndexMenu section={section} />;
            }}
          />
          <Route component={NotFound} />
        </Switch>
        <Footer
          toggleText={this.toggleText}
          storyText={this.state.storyText}
          projectDetails={this.state.projectDetails}
          toggleDetails={this.toggleDetails}
        />
      </section>
    );
  }

  componentDidUpdate() {
    // ~ja Must compare props to state to see a difference
    // Location checks used in 186 - 195 as good practice

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

export default App;
