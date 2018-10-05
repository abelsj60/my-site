import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import NotFound from './NotFound.jsx';
import Projects from './Projects.jsx';
import JandL from './JandL.jsx';
import Chapter from './Chapter.jsx';
import AlexaStories from './AlexaStories.jsx';
import IndexMenu from './IndexMenu.jsx';
import storyData from './helpers/storyData.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    const location = this.props.location.pathname.split('/');

    console.log('Constructor');
    console.log('Location in Constructor:', location);
    // console.log('Number test: ', this.validateNumber(location[2], 5));
    // console.log('Length test: ', location.length === 2);

    this.state = {
      chapter:
        location[1] === 'chapter' || location[2] === 'chapter'
          ? this.validateNumber(location[2], 4) || 1
          : 1,
      projectName:
        location[1] === 'projects' || location[2] === 'projects'
          ? this.validateProjectName(location[2]) || 'arrow'
          : 'arrow',
      projectImageIndex:
        location[1] === 'projects' || location[2] === 'projects'
          ? this.validateNumber(location[3], 3) || 1
          : 1,
      clip: undefined
    };
  }

  validateProjectName(name) {
    const projects = ['arrow', 'slingshot', 'tmmnews'];
    return projects.includes(name) ? name : undefined;
  }

  validateNumber(number, max) {
    // ~ja Number is 1 through 4, or undefined (for when url is '/chapter')

    // ~ja ! Make dynamic by swapping max for dataStructure

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
            render={() => <Redirect to={'/chapter/' + this.state.chapter} />}
          />
          <Route
            path="/chapter/:num"
            render={() => {
              if (this.state.chapter) {
                return <Chapter chapterNumber={this.state.chapter} />;
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
                  />
                );
              } else {
                return <NotFound />;
              }
            }}
          />
          <Route path="/alexa" component={AlexaStories} />
          <Route
            exact
            path="/jnl"
            render={() => <Redirect to="/jnl/forbes/1" component={JandL} />}
          />
          <Route
            exact
            path="/jnl/:name"
            render={({ match }) => {
              const publication = match.params.name;
              return (
                <Redirect to={'/jnl/' + publication + '/1'} component={JandL} />
              );
            }}
          />
          <Route
            path="/jnl/:publication/:id"
            render={({ match }) => {
              const publication = match.params.publication.toLowerCase();
              const id = parseInt(match.params.id) - 1;

              if (storyData[publication][id]) {
                return <JandL publication={publication} id={id} />;
              } else {
                return <Route component={NotFound} />;
              }
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
        <Footer />
      </section>
    );
  }

  componentDidUpdate() {
    // ~ja Must compare original props to state to see a difference
    // (can't just look at state, as it's already been set)

    const location = this.props.location.pathname.split('/');

    if (location[1] === 'chapter') {
      const chapterNumber = this.validateNumber(parseInt(location[2]), 4);
      const updateChapterNumber = chapterNumber
        ? chapterNumber !== this.state.chapter
        : undefined;

      if (updateChapterNumber) {
        this.setState({ chapter: chapterNumber });
      }
    }

    if (location[1] === 'projects') {
      const projectName = this.validateProjectName(location[2]);
      const projectImageIndex = this.validateNumber(location[3], 3);
      const updateProjectName = projectName
        ? projectName !== this.state.projectName
        : undefined;
      const updateProjectImageIndex = projectImageIndex
        ? projectImageIndex !== this.state.projectImageIndex
        : undefined;

      if (updateProjectName || updateProjectImageIndex) {
        this.setState({
          projectName: updateProjectName ? projectName : this.state.projectName,
          projectImageIndex: updateProjectImageIndex
            ? projectImageIndex
            : this.state.projectImageIndex
        });
      }
    }

    console.log('State in cDU: ', this.state);
    console.log('---');
  }
}

export default App;
