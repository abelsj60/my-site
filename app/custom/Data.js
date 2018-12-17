import React from 'react';

import storyData from '../data/the-story/index.js';
import projectData from '../data/projects/index.js';
import articleData from '../data/clips/index.js';

import TheStory from '../TheStory.jsx';
import Projects from '../Projects.jsx';
import Journalism from '../Journalism.jsx';

import ArticleNav from '../ArticleNav.jsx';
import ChapterNav from '../ChapterNav.jsx';
import MultiProjectNav from '../MultiProjectNav.jsx';

export default class Data {
  constructor(type, props) {
    this._props = props;

    this.type = type;
    this.text = this._getText();
    this.component = this._getComponent();
    this.contentData = this._getContentData();
    this.menuNavigator = this._getMenuNavigator();
  }

  _getContentData() {
    const type = this.type;

    switch (type) {
      case 'story':
        return storyData;
      case 'projects':
        return projectData;
      case 'journalism':
        return articleData;
      default:
        return undefined;
    }
  }

  _getText() {
    const type = this.type;

    switch (type) {
      case 'story':
        return;
      case 'projects':
        return 'Technology projects for me, clients, and fun';
      case 'journalism':
        return 'Staff and freelance reporting for Forbes.com, Mergermarket, Slate and others';
      default:
        return undefined;
    }
  }

  _getComponent() {
    const props = this._props;
    const type = this.type;

    switch (type) {
      case 'story':
        return <TheStory {...props} data={this._getContentData()} />;
      case 'projects':
        return <Projects {...props} data={this._getContentData()} />;
      case 'journalism':
        return (
          <Journalism
            {...props}
            text={this._getText()}
            data={this._getContentData()}
          />
        );
      default:
        return undefined;
    }
  }

  _getMenuNavigator() {
    const props = this._props;
    const type = this.type;

    switch (type) {
      case 'story':
        return (
          <ChapterNav
            {...props}
            isMenu={true}
            section={type}
            data={this._getContentData()}
          />
        );
      case 'projects':
        return (
          <MultiProjectNav
            {...props}
            section={type}
            isProjectMenu={true}
            data={this._getContentData()}
          />
        );
      case 'journalism':
        return (
          <ArticleNav {...props} section={type} data={this._getContentData()} />
        );
      default:
        return undefined;
    }
  }
}
