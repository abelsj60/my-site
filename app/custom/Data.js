import React from 'react';

import TheStory from '../TheStory.jsx';
import Projects from '../Projects.jsx';
import Journalism from '../Journalism.jsx';
import ArticleNav from '../ArticleNav.jsx';
import ChapterNav from '../ChapterNav.jsx';
import MultiProjectNav from '../MultiProjectNav.jsx';

import Content from './Content.js';

export default class Data {
  constructor(section, props) {
    this._props = props;

    this.section = section;
    this.text = this._getText();
    this.component = this._getComponent();
    this.contentData = this._getContentData();
    this.menuNavigator = this._getMenuNavigator();
  }

  _getContentData() {
    const c = new Content(this.section);
    return c.contentData;
  }

  _getText() {
    const section = this.section;

    switch (section) {
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
    const section = this.section;

    switch (section) {
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
    const section = this.section;

    switch (section) {
      case 'story':
        return (
          <ChapterNav
            {...props}
            isMenu={true}
            section={section}
            data={this._getContentData()}
          />
        );
      case 'projects':
        return (
          <MultiProjectNav
            {...props}
            section={section}
            isProjectMenu={true}
            data={this._getContentData()}
          />
        );
      case 'journalism':
        return (
          <ArticleNav
            {...props}
            section={section}
            data={this._getContentData()}
          />
        );
      default:
        return undefined;
    }
  }
}
