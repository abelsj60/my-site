import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { normalize, splitPath, validateParam } from './helpers/utils.js';
import Projects from './Projects.jsx';
import Menu from './Menu.jsx';
import MultiProjectNav from './MultiProjectNav.jsx';
import projectData from './data/projects/index.js';

export default class ProjectLoader extends Component {
  constructor(props) {
    super(props);

    const urlParams = splitPath(this.props);
    const isProjectMenu = urlParams[2] === 'menu';
    const projectHasNoName = this.props.match.isExact;
    const projectHasNoPicture = urlParams.length !== 4;
    const useDefaultProjectName = isProjectMenu || projectHasNoName;
    const useDefaultPictureIndex = projectHasNoPicture;

    const indexForProjectData = !useDefaultProjectName
      ? validateParam('name', projectData, urlParams[2])
      : 0;
    const indexForProjectPictures = !useDefaultPictureIndex
      ? validateParam('full', projectData, urlParams[3])
      : 0;

    if (!isProjectMenu) {
      const indexForProjectPicturesConvertedToUrlParam =
        indexForProjectPictures + 1;

      if (projectHasNoName) {
        const defaultProjectName = normalize(
          projectData[indexForProjectData].attributes.name
        );

        this.props.history.replace(
          `/projects/${defaultProjectName}/${indexForProjectPicturesConvertedToUrlParam}`
        );
      } else if (projectHasNoPicture) {
        const currentProjectName = urlParams[2];

        this.props.history.replace(
          `/projects/${currentProjectName}/${indexForProjectPicturesConvertedToUrlParam}`
        );
      }
    }

    this.state = {
      isProjectMenu,
      indexForProjectData,
      indexForProjectPictures
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(projectName, projectPictureIndex) {
    const linkChangesProjects =
      projectData[this.state.indexForProjectData].attributes.name !==
      projectName;
    const linkChangesProjectPicture =
      this.state.indexForProjectPictures !== projectPictureIndex;

    if (linkChangesProjects || linkChangesProjectPicture) {
      const newIndexForProjectData =
        linkChangesProjects &&
        projectData.findIndex(
          project => project.attributes.name === projectName
        );
      const newIndexForProjectPicturesConvertedToUrlParam =
        projectPictureIndex + 1;

      this.props.history.push(
        `/projects/${projectName}/${newIndexForProjectPicturesConvertedToUrlParam}`
      );

      if (linkChangesProjects) {
        this.setState({
          indexForProjectData: newIndexForProjectData,
          indexForProjectPictures: projectPictureIndex
        });
      } else {
        this.setState({ indexForProjectPictures: projectPictureIndex });
      }
    }
  }

  componentDidUpdate(prevProps) {
    const userHitTheBrowserBackOrForwardButton =
      this.props.history.action === 'POP';
    const userHitTheMenuButton =
      this.props.location.pathname.includes('menu') ||
      prevProps.location.pathname.includes('menu');
    const projectHasAlreadyChanged =
      this.props.location.pathname === prevProps.location.pathname;

    if (
      (userHitTheBrowserBackOrForwardButton || userHitTheMenuButton) &&
      !projectHasAlreadyChanged
    ) {
      const urlParams = splitPath(this.props);
      const isProjectMenu = urlParams[2] === 'menu';
      const projectHasNoName = this.props.match.isExact;
      const projectHasNoPicture = urlParams.length !== 4;
      const useProjectNameFromState = projectHasNoName || isProjectMenu;
      const useProjectPictureFromState = projectHasNoPicture || isProjectMenu;
      const newIndexForProjectData = !useProjectNameFromState
        ? validateParam('name', projectData, urlParams[2])
        : this.state.indexForProjectData;
      const newIndexForProjectPictures = !useProjectPictureFromState
        ? validateParam('full', projectData, urlParams[3])
        : this.state.indexForProjectPictures;
      const newIndexForProjectPicturesConvertedToUrlParam =
        newIndexForProjectPictures + 1;

      if (projectHasNoName) {
        const projectName = normalize(
          projectData[newIndexForProjectData].attributes.name
        );

        this.props.history.replace(
          `/projects/${projectName}/${newIndexForProjectPicturesConvertedToUrlParam}`
        );
      } else if (projectHasNoPicture) {
        const currentProjectName = urlParams[2];

        this.props.history.replace(
          `/projects/${currentProjectName}/${newIndexForProjectPicturesConvertedToUrlParam}`
        );
      }

      this.setState({
        isProjectMenu: isProjectMenu,
        indexForProjectData: newIndexForProjectData,
        indexForProjectPictures: newIndexForProjectPictures
      });
    }
  }

  render() {
    return this.state.isProjectMenu ? (
      <Menu
        text="Technology projects for me, clients, and fun"
        section={'projects'}
        link={'/projects'}
      >
        <MultiProjectNav
          data={projectData}
          state={this.state}
          handleClick={this.handleClick}
        />
      </Menu>
    ) : this.state.indexForProjectData !== -1 ? (
      <Projects
        data={projectData}
        state={this.state}
        handleClick={this.handleClick}
      />
    ) : (
      <Redirect to="/notfound" />
    );
  }
}

// base/projects — this.props.match.isExact
// base/projects/name — urlParams.length === 3
// base/projects/name/0 — OK
