import React from 'react';

import Story from '../Story.jsx';
import Projects from '../Projects.jsx';
import Article from '../Article.jsx';
import ArticleNav from '../ArticleNav.jsx';
import ChapterNav from '../ChapterNav.jsx';
import MultiProjectNav from '../MultiProjectNav.jsx';

import Content from './Content.js';

export default class Data {
  constructor(type, props) {
    const c = new Content(type);
    const contentData = c.getContentData();

    this._props = props;

    this.type = type;
    this.contentData = contentData;
  }

  getText() {
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

  getComponent() {
    const props = this._props;
    const type = this.type;

    switch (type) {
      case 'story':
        return <Story {...props} data={this.contentData} />;
      case 'projects':
        return (
          <Projects {...props} text={this.getText()} data={this.contentData} />
        );
      case 'journalism':
        return (
          <Article {...props} text={this.getText()} data={this.contentData} />
        );
      default:
        return undefined;
    }
  }

  getMenuNavigator() {
    const props = this._props;
    const type = this.type;

    switch (type) {
      case 'story':
        return (
          <ChapterNav
            {...props}
            isMenu={true}
            section={type}
            data={this.contentData}
          />
        );
      case 'projects':
        return (
          <MultiProjectNav
            {...props}
            section={type}
            isProjectMenu={true}
            data={this.contentData}
          />
        );
      case 'journalism':
        return <ArticleNav {...props} section={type} data={this.contentData} />;
      default:
        return undefined;
    }
  }
}
